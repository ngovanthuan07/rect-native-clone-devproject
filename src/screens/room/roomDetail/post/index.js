import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import uuid from 'react-native-uuid';

export default function PostItem({item}) {
  return (
    <View style={styles.container} key={uuid.v4()}>
       <Image style={styles.image} source={{uri: null}}/>
       <Text>{"name"}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
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
