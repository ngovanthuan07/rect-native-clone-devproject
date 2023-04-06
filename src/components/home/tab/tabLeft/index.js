import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'
import { displayUserPosts } from '../../../../services/post'
import DisplayUserPosts from './DisplayUserPosts'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

export default function TabLeft() {
  const posts = useSelector(state => state.postAndProduct.posts)
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Postings</Text>
      </View>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          numColumns={3}
          data={posts}
          renderItem={({item}) => <DisplayUserPosts item={item}/> }
          keyExtractor={item => item.id}
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
        />
      </SafeAreaView>
    </View>
  )
}