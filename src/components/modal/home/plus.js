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
        <Text style={{
            paddingLeft: 16,
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >Options</Text>
        <Feather name="x" size={25} color="black" style={{paddingRight: 10}} onPress={() => onClose()}/>
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
  flex: 1;
`

const OptionContainer = styled(View)`
  height: 40px;
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  border-bottom-style: solid;
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