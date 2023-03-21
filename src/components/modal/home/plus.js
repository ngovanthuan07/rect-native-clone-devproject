import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import { Feather } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { clearModal } from './../../../redux/actions/modal';
import { useNavigation } from '@react-navigation/native';
export default function Plus({onClose}) {
  const dispatch = useDispatch()

  const navigation = useNavigation()

  const handleNavigation = (nav) => {
    onClose()
    navigation.navigate("addPictureAndVideo")
  }


  return (
    <ViewContainer>
      <OptionContainer>
        <Text style={{flex: 1, textAlign: 'center', fontWeight: 'bold', marginLeft: 30}}>Options</Text>
        <Feather name="x" size={20} color="black" style={{paddingRight: 10}} onPress={() => onClose()}/>
      </OptionContainer>
      <ViewButton>
        <Button onPress={() => handleNavigation("addPictureAndVideo")}>
          <Text>Add Pic/Video</Text>
        </Button>
        <Button>
          <Text>Add Livestream</Text>
        </Button>
        <Button>
          <Text>Choose Products</Text>
        </Button>
        <Button>
          <Text>Add Product</Text>
        </Button>
      </ViewButton>
    </ViewContainer>
  )
}

const ViewContainer = styled(View)`
  flex: 0.3;
`

const OptionContainer = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`


const ViewButton = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Button = styled(TouchableOpacity)`
  display: flex;
  margin: 10px 10px 10px 10px;
`