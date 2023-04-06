import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';

export default function PostItem({item}) {
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.container} key={uuid.v4()} 
      onPress={() => navigation.navigate('homeSliderScreen', {data: item})}
    >
       <Image style={styles.image} source={{uri: item.assets[0].uri ?? null}}/>
       <Text>{item?.name}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      marginRight: 10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: 'black',
    }
})
