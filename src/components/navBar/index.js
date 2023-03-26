import { View, Text } from "react-native";
import React from "react";
import { Header } from "react-native-elements";
import { Ionicons, Feather } from "@expo/vector-icons";
import styles from "./styles";

export default function NavbarCommon({
  title=null, 
  iconRight = {
    cart: false,
    heart: false,
    share: false,
    notification: false
  }
}) {
  return (
    <View style={styles.container}>
      <View style={styles.leftNav}>
        <Text style={styles.textLeft}>{title}</Text>
      </View>

      <View style={styles.rightNav}>
          { iconRight.cart ?
            <Feather name="share-2" size={24} color="black" style={{paddingLeft: 10}}/>
            :
            null

          }
           { iconRight.heart ?
            <Feather name="heart" size={24} color="black" style={{paddingLeft: 10}}/>
            :
            null

          }
           { iconRight.share ?
            <Feather name="shopping-cart" size={24} color="black" style={{paddingLeft: 10}}/>
          :
            null

          }
          { iconRight.notification ?
            <Ionicons name="notifications-outline" size={24} color="black" style={{paddingLeft: 10}}/>
          :
            null
          }
        </View>
    </View>
  );
}
