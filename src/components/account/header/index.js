import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";

const Header = styled(View)`
  margin: 10px 0px 20px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;

`

const Avatar = styled(Image)`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50px
`

const Info = styled(View)`
  padding-left: 20px;
`
const UserText = styled(Text)`
  font-size: 20px;
  color: #ED4C67;
`


export default function AccountHeader({user}) {
  
  return (
    <Header>
      <View>
        <Avatar
          source={{ uri: user.avatar }}
        />
      </View>
      <Info>
        <UserText>{user.name}</UserText>
        <Text>{user.email}</Text>
      </Info>
    </Header>
  );
}
