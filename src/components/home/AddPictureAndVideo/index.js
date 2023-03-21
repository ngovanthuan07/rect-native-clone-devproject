import { View, Text, Image } from 'react-native'
import React from 'react'
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

export default function  ListPictureAndVideo({type}) {

  if(type === 'plus') {
    return (
      <Plus>
        <Feather name="plus-circle" size={50} color="#ED4C67" />
    </Plus>
    )
  }
 
  return (
    <Container>
      <Image />
    </Container>
  )
}

const Plus = styled(TouchableOpacity)`
  margin: 5px;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: white;
`

const Container = styled(TouchableOpacity)`
  margin: 5px;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
`