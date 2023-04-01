import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

const { height, width } = Dimensions.get("window");
export default function SearchItem({ item }) {
  
  
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handleNavigation = () => {
    if(item.choose === 'PRODUCT') {
      navigation.navigate('productSearchDetail', {data: item})

    } else {
      navigation.navigate('homeSliderScreen', {data: item})
    }
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
        source={{ uri: item.assets[0]?.uri ?? null }}
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
