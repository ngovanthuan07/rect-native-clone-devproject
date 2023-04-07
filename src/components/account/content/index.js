import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";
import { ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux';
import { logout, userAuthStateListener } from './../../../redux/actions/auth';

const ContactDetailText = styled(Text)`
  padding: 20px 0px 20px 10px;
  background-color: rgb(235, 237, 240);
`;

export default function ContentDetail() {

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout())
      .then((response) => {
        if(response.data.success) {
          dispatch(userAuthStateListener())
        }
      })
      .catch((error) => console.log(error))
  }

  const navigation = useNavigation()
 

  return (
    <View>
      <ContactDetailText>Contact Detail</ContactDetailText>
      <View>
        <ListItem bottomDivider onPress={() => navigation.navigate('editProfile')}>
          <Icon name="person"/>
          <ListItem.Content>
            <ListItem.Title>Edit Profile</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem bottomDivider>
          <Icon name="email" />
          <ListItem.Content>
            <ListItem.Title>Email address</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem bottomDivider>
          <Icon name="phone" />
          <ListItem.Content>
            <ListItem.Title>Phone number</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem bottomDivider>
          <Icon name="home" />
          <ListItem.Content>
            <ListItem.Title>Residential addresses</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem bottomDivider onPress={() => navigation.navigate('sellerSignUp')}>
          <Icon name="ios-business" type="ionicon"/>
          <ListItem.Content>
            <ListItem.Title>Start Seller</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        

        <ListItem bottomDivider onPress={() => handleLogOut()}>
          <Icon name="logout"/>
          <ListItem.Content>
            <ListItem.Title>Sign out</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </View>
    </View>
  );
}
