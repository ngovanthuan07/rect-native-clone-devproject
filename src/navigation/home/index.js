import { View, Text } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather, FontAwesome, Fontisto  } from "@expo/vector-icons";
import HomeScreen from "../../screens/home";
import AccountScreen from "../../screens/account";

const Tab = createMaterialBottomTabNavigator();

const EmptyScreen = () => {
  return <View></View>;
};

export default function HomeNavigation() {
  return (
    <Tab.Navigator
      activeColor="#ED4C67"
      barStyle={{ backgroundColor: "white" }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Room"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="persons" size={24} color={ color } />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="QR Scan"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="qrcode" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
