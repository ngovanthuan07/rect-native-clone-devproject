import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import { Feather } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import * as ImagePicker from 'expo-image-picker'
import * as VideoThumbnails from 'expo-video-thumbnails';

import { addPicAndVideoStorage } from '../../../../redux/actions/storage';

export default function AddPictureAndVideo({onClose}) {
  const dispatch = useDispatch()

  const navigation = useNavigation()


  const pickFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1
    })
    if (!result.canceled) {
      dispatch(addPicAndVideoStorage({
        id: uuid.v4(),
        uri: result.assets[0].uri,
        type: result.assets[0].type,
        // thumbnail: result.assets[0].type == 'video' ? generateThumbnail(result.assets[0].uri) : null
      }))
    }
  }
  const generateThumbnail = async (source) => {
    try {
        const { uri } = await VideoThumbnails.getThumbnailAsync(
            source,
            {
                time: 5000,
            }
        );
        return uri;
    } catch (e) {
        console.warn(e);
        return null;
    }
};

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
        <Button onPress={pickFromGallery}>
          <BtnText>Open GALLERY</BtnText>
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
  justify-content: center;
  align-items: center;
`
const Button = styled(TouchableOpacity)`
  display: flex;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  background-color: black;
  justify-content: center;
  align-items: center;
`

const BtnText = styled(Text)`
  color: white;
`