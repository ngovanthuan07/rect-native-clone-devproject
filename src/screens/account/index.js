import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Header } from "react-native-elements";
import AccountNavbar from "../../components/account/navBar";
import AccountHeader from './../../components/account/header/index';
import ContentDetail from "../../components/account/content";
import { useSelector } from 'react-redux';

export default function AccountScreen() {
  const currentUser = useSelector(state => state.auth.currentUser);

  return (
    <View style={styles.container}>
      <AccountNavbar />
      <AccountHeader user={currentUser}/>
      <ContentDetail />
    </View>
  );
}
