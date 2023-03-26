import { View, Text, Image } from 'react-native'
import React from 'react'
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { openHomeAddPicAndVideoModal } from '../../../redux/actions/modal';
import { removePicAndVideoStorage } from '../../../redux/actions/storage';

export default function  ListPictureAndVideo({item,type, handPressItem}) {
  const navigation = useNavigation();
  const dispatch = useDispatch()


  if(type === 'plus') {
    return (
      <Plus onPress={() => dispatch(openHomeAddPicAndVideoModal(true, ["25%"]))}>
        <Feather name="plus-circle" size={50} color="#ED4C67" />
    </Plus>
    )
  }


 
  return (
    <Container onPress={() => handPressItem(item.id)}>
      <Avatar source={{ uri: item.uri }}/>
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
const Avatar = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`