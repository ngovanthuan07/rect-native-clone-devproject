import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Header } from "react-native-elements";
import AccountNavbar from "../../components/account/navBar";
import AccountHeader from './../../components/account/header/index';
import ContentDetail from "../../components/account/content";
import { useSelector } from 'react-redux';
import { Header001 } from "../../components/common";

export default function AccountScreen() {
  const currentUser = useSelector(state => state.auth.currentUser);

  return (
    <View style={styles.container}>
      <Header001 
          css={{
            heightContainer: '60px',
            backgroundColor: 'rgb(235, 237, 240)'
          }}
          left= {{
              title: 'Profile',
              textSite: '15px',
          }}
          right={{
            heath: true,
            cart: true
          }}

      />
      <AccountHeader user={currentUser}/>
      <ContentDetail />
    </View>
  );
}
