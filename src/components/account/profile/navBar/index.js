import { View, Text } from "react-native";
import React from "react";
import { Header } from "react-native-elements";
import { Ionicons} from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

export default function ProfileNavbar() {
  const navigation = useNavigation()
  return (
    <View>
      <Header
        containerStyle={{ backgroundColor: 'rgb(235, 237, 240)' }}

        leftComponent={
          <View style={styles.leftComponentView}>
            <Ionicons name="ios-chevron-back-outline" size={24} color="#ED4C67" onPress={() => navigation.goBack()}/>
            <Text style={styles.leftComponentText}>Edit Profile</Text>
          </View>}

        leftContainerStyle={{ flex: 2 }}

      />
    </View>
  );
}
