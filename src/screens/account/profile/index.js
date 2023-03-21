import { View, Text } from 'react-native'
import React from 'react'
import ProfileNavbar from './../../../components/account/profile/navBar/index';
import { useNavigation } from '@react-navigation/native';
import UpdateProfile from '../../../components/account/profile/content';
import { useSelector } from 'react-redux';

export default function ProfileScreen() {
  const currentUser = useSelector(state => state.auth.currentUser);

  const navigation = useNavigation()

  return (
    <View>
      <ProfileNavbar />
      <UpdateProfile user={currentUser}/>
    </View>
  )
}