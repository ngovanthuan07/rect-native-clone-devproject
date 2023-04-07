import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";
import { ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { logout, userAuthStateListener } from "./../../../redux/actions/auth";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ContactDetailText = styled(Text)`
  padding: 20px 0px 20px 10px;
  background-color: rgb(235, 237, 240);
`;

export default function ContentSeller() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout())
      .then((response) => {
        if (response.data.success) {
          dispatch(userAuthStateListener());
        }
      })
      .catch((error) => console.log(error));
  };

  const navigation = useNavigation();

  return (
    <ScrollView>
      <ContactDetailText>Account Setting</ContactDetailText>
      <View>
        <ListItem
          bottomDivider
          onPress={() => navigation.navigate("editProfile")}
        >
          <Icon name="person" />
          <ListItem.Content>
            <ListItem.Title>Profile</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem bottomDivider>
          <Icon name="store" />
          <ListItem.Content>
            <ListItem.Title>Store Info</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem bottomDivider>
          <Icon name="qr-code" />
          <ListItem.Content>
            <ListItem.Title>My QR Code</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem bottomDivider>
          <Icon name="analytics" />
          <ListItem.Content>
            <ListItem.Title>Analytics</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem
          bottomDivider
          onPress={() => navigation.navigate("sellerSignUp")}
        >
          <Icon name="wallet" type="ionicon" />
          <ListItem.Content>
            <ListItem.Title>My Wallet</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem
          bottomDivider
          onPress={() => navigation.navigate("sellerSignUp")}
        >
          <AntDesign name="creditcard" size={24} color="black" />
          <ListItem.Content>
            <ListItem.Title>My Community Wallet</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </View>

      <ContactDetailText>Security Settings</ContactDetailText>
      <View>
        <ListItem bottomDivider>
          <AntDesign name="codesquareo" size={24} color="black" />
          <ListItem.Content>
            <ListItem.Title>Password reset</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem bottomDivider>
          <Icon name="lock" />
          <ListItem.Content>
            <ListItem.Title>Face ID and PIN</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </View>

      <ContactDetailText>App Setting</ContactDetailText>
      <View>
        <ListItem bottomDivider>
          <Ionicons name="ios-notifications-outline" size={24} color="black" />
          <ListItem.Content>
            <ListItem.Title>Notifications</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </View>

      <ContactDetailText>General</ContactDetailText>
      <View>
        <ListItem bottomDivider>
          <AntDesign name="warning" size={24} color="black" />
          <ListItem.Content>
            <ListItem.Title>Privacy Notice</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem bottomDivider>
          <AntDesign name="warning" size={24} color="black" />
          <ListItem.Content>
            <ListItem.Title>Community Rules</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem bottomDivider>
          <AntDesign name="warning" size={24} color="black" />
          <ListItem.Content>
            <ListItem.Title>Help & Feedback</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem bottomDivider onPress={() => handleLogOut()}>
          <Icon name="logout" />
          <ListItem.Content>
            <ListItem.Title>Sign out</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </View>
    </ScrollView>
  );
}
