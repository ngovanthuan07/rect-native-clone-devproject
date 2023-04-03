import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function MemberItem({item}) {
  console.log(item)
  return (
    <View style={styles.container} key={item?.id}>
       <Image style={styles.image} source={{uri: item?.user?.avatar ? item?.user?.avatar : null}}/>
       <Text>{item?.user?.name}</Text>
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
        width: 50,
        height: 50,
        borderRadius: 40,
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#bdc3c7'
        
    }
})
