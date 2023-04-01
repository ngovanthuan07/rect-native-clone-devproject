import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  Alert
} from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather  } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';
import ListPictureAndVideo from './../../../components/home/AddPictureAndVideo';
import { CheckBox, ListItem } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import {openHomePlusModal} from '../../../redux/actions/modal'
import { removePicAndVideoStorage } from "../../../redux/actions/storage";
import { createPicAndVideoHome } from "../../../services/post";
import { async } from '@firebase/util';
import { Header001 } from "../../../components/common";
import Spinner from 'react-native-loading-spinner-overlay';


export default function AddPictureAndVideoScreen() {
  const [todo, setTodo] = useState([1,2,3])
  const assets = useSelector(state => state.storage.data)
  const [asset, setAsset] = useState(null)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [watch, setWatch] = useState('EVERYONE')
  const [loading, setLoading] = useState(false);


  const dispatch = useDispatch()

  const handleRemoveElementData = (id) => {
    dispatch(removePicAndVideoStorage(id))
  }

  const handPressItem = (id) => {
    setAsset(assets.find(i => i.id == id))
  }

  const handlePost = async () => {
    setLoading(true)

    const response = await createPicAndVideoHome({
      assets: assets,
      name: name,
      category: category,
      watch: watch,
    })
    setLoading(false)

    if(response?.data) {
      Alert.alert(
        'Success',
        'Upload Pic And Video Successfully',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate("home"),
          },
        ],
        { cancelable: false }
      );
    } else {
        Alert.alert(
          'Error',
          'Upload Pic And Video Error',
          [
            {
              text: 'OK',
              onPress: () => console.log("error"),
            },
          ],
          { cancelable: false }
        );
    }
  }

  const navigation = useNavigation();
  return (
      <Container>
        <Spinner
          visible={loading}
          textStyle={{color: '#FFF',}}
        />
        <Header001 
            css={{
              heightContainer: '40px',
              backgroundColor: 'rgba(0, 0, 0, 0.1)'
            }}
            left= {{
                title: 'Add Pic And Video',
                textSite: '15px',
                back: true
            }}

        />
      <Description  placeholder="Say something" editable multiline numberOfLines={4} onChangeText={setName}/>
      <Category placeholder="Category"  onChangeText={setCategory}/>
      <SafeAreaView style={{flex:1, marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap',}}>
          {
            assets.map(item => (
              <ListPictureAndVideo handPressItem={handPressItem} item={item} key={item.id}/>
            ))
          }
          {
            assets.length < 4 ? <ListPictureAndVideo 
                type={'plus'}/> : null
          }

      </SafeAreaView>

      <RemoverContainer>
        <AvatarRemove source={{ uri: asset?.uri }}/>
        <Feather name="trash" size={24} color="#ED4C67" style={{paddingRight: 30}} onPress={() => handleRemoveElementData(asset.id)}/>
      </RemoverContainer>

      <View style={{flex: 3}}>
        <Text style={{ paddingTop: 5, paddingLeft: 10, color: "#000" }}>Watch</Text>


        <CheckBoxAndButtonContainer>
          <CheckBoxContainer>
            <CheckBox
              title="Everyone"
              checkedIcon="dot-circle-o"
              checkedColor="#ED4C67"
              checked={watch === 'EVERYONE'}
              onPress={() => setWatch('EVERYONE')}
              value="EVERYONE"
            />
          <CheckBox
              title="Following"
              checkedIcon="dot-circle-o"
              checkedColor="#ED4C67"
              checked={watch === 'FOLLOWING'}
              onPress={() => setWatch('FOLLOWING')}
              value="FOLLOWING"
            />
            <CheckBox
              title="Private"
              checkedIcon="dot-circle-o"
              checkedColor="#ED4C67"
              checked={watch === 'PRIVATE'}
              onPress={() => setWatch('PRIVATE')}
              value="PRIVATE"
          />
          </CheckBoxContainer>

            <ButtonPost  onPress={() => handlePost()}>
              <ButtonTextPost>Post</ButtonTextPost>
            </ButtonPost>
        </CheckBoxAndButtonContainer>
      </View>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  
`;
const Header = styled(TouchableOpacity)`
  padding: 10px 0px 10px 0px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderText = styled(Text)`
  font-weight: bold;
`;

const Description = styled(TextInput)`
  margin: 10px 0px 10px 10px;
  padding: 0px 0px 10px 10px;
  width: 90%;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
const Category = styled(TextInput)`
  margin: 10px 0px 10px 10px;
  padding: 10px 0px 10px 10px;
  width: 90%;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const RemoverContainer = styled(View)`
    margin: 140px 0px 0px 13px;
    flex: 0.9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const AvatarRemove = styled(Image)`
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    object-fit: cover;
`
const CheckBoxAndButtonContainer = styled(View)`
  display: flex;
  flex-direction: row;
  `

const CheckBoxContainer = styled(View)`
  flex: 0.9;
`


const ButtonPost = styled(TouchableOpacity)`
    padding: 10px 60px 10px 60px;
    background-color: #ED4C67;
    border-radius: 10px;
    justify-content: center;
`;

const ButtonTextPost = styled(Text)`
    color: white;
    font-weight: bold;
`;
