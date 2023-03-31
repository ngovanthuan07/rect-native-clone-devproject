import { View, Text } from "react-native";
import React from "react";
import { Header } from "react-native-elements";
import { Ionicons, Feather } from "@expo/vector-icons";
import styles from "./styles";
import styled from "styled-components";
import { useNavigation } from '@react-navigation/native';


export default function Header001({
  css = {
    heightContainer: '40px',
    backgroundColor: 'white'
  },
  left= {
    title: '',
    textSite: '20px',
  },
  right = {
    share: false,
    heath: false,
    cart: false,
    notification: false
  }
}) {
  const navigation = useNavigation()


  return (
    <Box backgroundColor={css.backgroundColor} heightContainer={css.heightContainer}>
      <Left>
        {
          left?.back ? 
          <Ionicons name="ios-chevron-back-outline" size={24} color="#ED4C67" onPress={() => navigation.goBack()}/>
          : null
        }
        <TextLeft textSite={left.textSite}>
          {left.title}
        </TextLeft>
      </Left>

      <View>
        <Text>
            
        </Text>
      </View>

      <Right>
          {
            right?.share ?
              <Feather name="share-2" size={24} color="black" style={{paddingLeft: 10}}/>
            : null
          }

          {
            right?.heath ?
              <Feather name="heart" size={24} color="black" style={{paddingLeft: 10}}/>
            : null
          }

          {
            right?.cart ?
              <Feather name="shopping-cart" size={24} color="black" style={{paddingLeft: 10}}/>
            : null
          }

          {
            right?.notification ?
              <Ionicons name="notifications-outline" size={24} color="black" style={{paddingLeft: 10}}/>
            : null
          }

      </Right>
    </Box>
  )
}

const Box = styled(View)`
  height: ${props => props.heightContainer};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  paddingRight: 10px;
  paddingLeft: 10px;
  background-color: ${props => props.backgroundColor};

`

const Left = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const TextLeft = styled(Text)`
  color: black;
  font-size: ${props => props.textSite};
  font-weight: bold;
`

const Right = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`
