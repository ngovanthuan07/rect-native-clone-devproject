import { View, Text, SafeAreaView, FlatList, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import DisplayProductItem from "./DisplayProductItem";
import Spinner from "react-native-loading-spinner-overlay";
import { displayProduct } from "../../../../services/post";
import DisplayUserPosts from "../tabLeft/DisplayUserPosts";

export default function TabRight() {
  const posts = useSelector(state => state.postAndProduct.posts)
  const products = useSelector(state => state.postAndProduct.products)

  return (
    <ScrollView style={styles.container}>
      {
        products.length > 0 ? 
        <>
         <View>
            <Text style={styles.text}>Products</Text>
          </View>
          <SafeAreaView style={{ flex: 1}}>
            <FlatList
              horizontal
              data={products}
              renderItem={({ item }) => <DisplayProductItem item={item} />}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{
                paddingHorizontal: 15,
              }}
            />
          </SafeAreaView>
        </> : <></>
      }
      <View>
        <Text style={styles.text}>Postings</Text>
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          horizontal
          data={posts}
          renderItem={({ item }) => <DisplayUserPosts item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
        />
      </SafeAreaView>
    </ScrollView>
  );
}
