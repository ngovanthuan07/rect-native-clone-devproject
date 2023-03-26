import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Ionicons, Feather, FontAwesome, AntDesign  } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import CustomVideoPlayer from './../../../components/video/customVideoPlayer'
import { useEffect } from 'react';
import { countLikePost, checkLikePost, likePost } from '../../../services/post'
import { useDispatch } from 'react-redux';
import { openCommentModal } from './../../../redux/actions/modal';
const {height, width} = Dimensions.get('window')

export default function HomeSliderScreen({route}) {
  const post = route.params.data
  const [data, setDate] = useState(route.params.data.assets)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [countLike, setCountLike] = useState(0)
  const [checkLike, setCheckLike] = useState(false)
  
  const dispatch = useDispatch()

  const handleLike = async () => {
    setCheckLike(await likePost(post.id))
  }

  useEffect(() => {
    (async () => {
        const like = await countLikePost(post.id)
        const check = await checkLikePost(post.id)
        setCheckLike(check)
        setCountLike(like)
    })()
  }, [checkLike])

  const navigation = useNavigation()

  return (
    <View 
                style={
                    {   
                        flex: 1,
                        paddingTop: 30,
                        backgroundColor: 'black'
                    }}

    >
      <View 
                style={{
                    height: 50,
                    marginHorizontal: 10
                }}
      >
        <Ionicons name="ios-chevron-back-outline" size={30} color="#ED4C67" onPress={() => navigation.goBack()}/>
      </View>
      <View 
                style={
                    {   
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        // marginHorizontal: '5%'
                    }}
      >
        <View style={{height: height/1.3}}>
            <FlatList 
                data={data}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                onScroll={e => {
                    const x = e.nativeEvent.contentOffset.x
                    setCurrentIndex((x / width).toFixed(0))

                }}
                renderItem={({item, index}) => {
                    return (
                        <View
                                style={
                                    {   width: width,
                                        height: height/2,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}  
                        >
                            <TouchableOpacity
                                style={{
                                    width: '90%',
                                    height: '90%',
                                    backgroundColor: 'black',
                                    borderRadius: 10
                                }}
                            >
                                {
                                    item.type === 'video' ?
                                        <CustomVideoPlayer videoUrl={item.uri}/>
                                    :
                                    <Image style={{
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'black',
                                        borderRadius: 10
                                    }} 
                                        source={{uri: item.uri}
                                    }/>

                                }
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
      </View>
      <View 
            style={{
                flex: 0.1,
                flexDirection: 'row', 
                justifyContent: 'space-between',
                marginHorizontal: 50
            }}
        >
        <TouchableOpacity>
            <FontAwesome name="share" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center'}}>
            <Ionicons name="heart" size={24} color={checkLike ? "#ED4C67" : "white"} onPress={() => handleLike()}/>
            <Text style={{color: 'white'}}>{countLike}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(openCommentModal(true, post))}>
            <AntDesign name="message1" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View
            style={{
                flexDirection: 'row',
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
            }}
      > 
        {
            data.map((item, index) => {
                return (
                    <View 
                        style={{
                            width: 5, 
                            height: 5, 
                            borderRadius: 4, 
                            backgroundColor: currentIndex == index ? 'white' : 'gray',
                            marginLeft: 5
                        }}>

                    </View>
                )
            })
        }
      </View>
    </View>
  )
}