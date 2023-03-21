import { View, Text } from "react-native";
import React from "react";
import { Header } from "react-native-elements";
import { Ionicons, Feather } from "@expo/vector-icons";
import styles from "./styles";

export default function AccountNavbar() {
  return (
    <View>
      <Header
        containerStyle={{ backgroundColor: 'rgb(235, 237, 240)' }}

        leftComponent={
          <View style={styles.leftComponentView}>
            <Ionicons name="ios-chevron-back-outline" size={24} color="#ED4C67" />
            <Text style={styles.leftComponentText}>Profile</Text>
          </View>}

        rightComponent={
          <View style={{ flexDirection: "row"}}>
            <Feather name="heart" size={24} color="black" />
            <Feather
              name="shopping-cart"
              size={24}
              color="black"
              style={{ marginRight: 20, marginLeft: 20 }}
            />
          </View>
        }
      />
    </View>
  );
}
