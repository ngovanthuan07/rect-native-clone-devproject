import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import uuid from "react-native-uuid";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function DisplayProductItem({ item }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.containerOne} key={item.id}>
      <Image style={styles.imageOne} source={{ uri: item.image }} />

      <View>
        <Text>{item.name}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 10 }}> {item.currency} {item.pricing}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
