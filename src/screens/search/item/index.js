import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useState } from "react";

const { height, width } = Dimensions.get("window");
export default function SearchItem({ item }) {
  
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handleNavigation = () => {
    if(item.choose === 'PRODUCT') {
      navigation.navigate('productSearchDetail', {data: item.id})
    } else {
      if(item?.choose === 'POST') {
        navigation.navigate('homeSliderScreen', {data: item})
      } else {

      }
    }
  }
  
  const myImage = () => {
    if (item?.choose === 'POST') {
      return item.assets[0]?.uri ? item.assets[0].uri : null
    } 
    if(item?.choose === 'PRODUCT') {
      return item?.image ? item.image : null
    }  
    return item?.avatar ? item.avatar : null
  }

  const checkChoose = () => {
    if (item?.choose === 'POST') {
      return 0
    } 
    if(item?.choose === 'PRODUCT') {
      return 1
    }  
    return 2
  }


  return (
    <TouchableOpacity
      onPress={() => handleNavigation()}
      style={{
        width: "40%",
        height: 200,
        marginHorizontal: 5,
        marginVertical: 5,
        backgroundColor: "white",
        borderRadius: 5,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          width: "80%",
          height: 125,
          backgroundColor: "black",
          alignContent: "center",
          alignItems: "center",
        }}
        source={{ uri: myImage()}}
      />
      <Text
        style={{
          paddingTop: 3,
        }}
      >
        {item.name}
      </Text>
      <Text
        style={{
          fontWeight: "bold",
        }}
      >
        {item.currency} {item.pricing}
      </Text>
    </TouchableOpacity>
  );
}
