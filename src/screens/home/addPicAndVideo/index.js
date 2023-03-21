import React, { useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather  } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';
import ListPictureAndVideo from './../../../components/home/AddPictureAndVideo';
import { ListItem } from 'react-native-elements';


export default function AddPictureAndVideoScreen() {
  const [todo, setTodo] = useState([1,2,3])

  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <Ionicons
          name="ios-chevron-back-outline"
          size={30}
          color="#ED4C67"
          onPress={() => navigation.goBack()}
        />
        <HeaderText>Edit Profile</HeaderText>
      </Header>
      <Description editable multiline numberOfLines={4} />
      <Category />
      <SafeAreaView style={{flex:1, marginHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap',}}>
          <ListPictureAndVideo/>
          <ListPictureAndVideo/>
          {
            todo.length < 4 ? <ListPictureAndVideo type={'plus'}/> : null
          }

      </SafeAreaView>  

      <RemoverContainer>
        <AvatarRemove />
        <Feather name="trash" size={24} color="#ED4C67" style={{paddingRight: 30}}/>
      </RemoverContainer>
      

      <ButtonViewContainer>
        <ButtonPost>
          <ButtonTextPost>Post</ButtonTextPost>
        </ButtonPost>
      </ButtonViewContainer>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  padding-top: 30px;
`;
const Header = styled(TouchableOpacity)`
  padding: 10px 0px 10px 0px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderText = styled(Text)`
  font-weight: bold;
`;

const Description = styled(TextInput)`
  margin: 10px 0px 10px 10px;
  padding: 0px 0px 10px 10px;
  width: 90%;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
const Category = styled(TextInput)`
  margin: 10px 0px 10px 10px;
  padding: 10px 0px 10px 10px;
  width: 90%;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const RemoverContainer = styled(View)`
    margin: 10px 0px 10px 10px;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const AvatarRemove = styled(Image)`
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    object-fit: cover;
`



const ButtonViewContainer = styled(View)`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const ButtonPost = styled(TouchableOpacity)`
    padding: 10px 60px 10px 60px;
    background-color: #ED4C67;
    border-radius: 10px;
`;

const ButtonTextPost = styled(Text)`
    color: white;
    font-weight: bold;
`;
