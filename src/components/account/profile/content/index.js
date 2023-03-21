import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import {
  Page,
  AvatarViewContainer,
  AvatarTouchableOpacityContainer,
  Avatar,
  AvatarOverLay,
  BackgroundViewContainer,
  BackgroundTitleText,
  BackgroundViewContainerElement,
  ViewIconUpload,
  ButtonUploadImage,
  BackgroundImageContainer,
  BackgroundImage,
  DescriptionContainer,
  DescriptionTitleText,
  TextInputDescription,
  ViewInputContainer,
  UpdateButtonView,
} from "./styles";
import { ScrollView } from "react-native";
import { Button, Input, Icon, CheckBox } from "react-native-elements";
import * as ImagePicker from 'expo-image-picker'
import { updateUserProfile } from "../../../../services/user";
import { async } from "@firebase/util";
import { useDispatch } from 'react-redux';
import { userAuthStateListener } from './../../../../redux/actions/auth';


export default function UpdateProfile({user}) {
  const [name, setName] = useState(user.name);
  const [dateOfBirth, setdateOfBirth] = useState(user.dob);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [gender, setGender] = useState(user.gender);
  const [description, setDescription] = useState(user.description);

  const [avatar, setAvatar] = useState(user.avatar);
  const [background, setBackground] = useState(user.background);


  const [avatarOld, setAvatarOld] = useState(user.avatar);
  const [backgroundOld, setBackgroundOld] = useState(user.background);


  const chooseImage = async (type='avatar') => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1
    })
    if (!result.canceled) {
        if(type === 'avatar')
          await setAvatar(result.assets[0].uri)
        else
          await setBackground(result.assets[0].uri)
    }
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const dt = new Date(date);
    const formattedDate = date.toISOString().split("T")[0];
    setdateOfBirth(formattedDate);
    hideDatePicker();
  };

  const dispatch = useDispatch();

  const updateProfile = async () => {
    let data = {
      name: name, 
      dob: dateOfBirth,
      gender: gender,
      description: description,
      avatar: avatar,
      background: background
    }
    let response = await updateUserProfile(data, user.avatar, user.background)
    
    if(response) {
      console.log(response.data.user);
      dispatch(userAuthStateListener())
    }


  }

  return (
    <ScrollView>
      <Page>
        <AvatarViewContainer>
          <AvatarTouchableOpacityContainer onPress={() => chooseImage()}>
            <Avatar source={{ uri: (avatar ? avatar : null) }} />
            <AvatarOverLay />
            <Feather name="camera" size={26} color="white" />
          </AvatarTouchableOpacityContainer>
        </AvatarViewContainer>

        <BackgroundViewContainer>
          <BackgroundTitleText>Update Cover Media</BackgroundTitleText>
          <BackgroundViewContainerElement>
            <ViewIconUpload>
              <Feather
                name="upload-cloud"
                size={50}
                color="rgba(0, 0, 0, 0.2)"
              />
              <Text>Let's upload photos and videos</Text>
              <ButtonUploadImage onPress={() => chooseImage('background')}>
                <Feather name="upload-cloud" size={24} color="white" />
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  OPEN GALLERY
                </Text>
              </ButtonUploadImage>
              <BackgroundImageContainer>
                <BackgroundImage source={{ uri: (background ? background : null) }}/>
              </BackgroundImageContainer>
            </ViewIconUpload>
          </BackgroundViewContainerElement>
        </BackgroundViewContainer>

        <DescriptionContainer>
          <DescriptionTitleText>Add description</DescriptionTitleText>

          <TextInputDescription
              editable
              multiline
              value={description}
              onChangeText={setDescription}/>
        </DescriptionContainer>

      

        <ViewInputContainer>
          <Input
            onChangeText={setName}
            value={name}
            placeholder="Name"
            leftIcon={{ type: "font-awesome", name: "user" }}
            containerStyle={{
              backgroundColor: "#F5F5F5",
              borderRadius: 25,
              height: 40,
              marginVertical: 10,
              paddingLeft: 10,
              paddingRight: 10,
            }}
            inputContainerStyle={{
              borderBottomColor: "#F5F5F5",
            }}
            inputStyle={{
              fontSize: 14,
              color: "#000",
            }}
          />

          <Input
            placeholder="Date of birth"
            leftIcon={
              <Icon
                name="calendar"
                type="font-awesome"
                onPress={() => showDatePicker()}
              />
            }
            value={dateOfBirth}
            containerStyle={{
              backgroundColor: "#F5F5F5",
              borderRadius: 25,
              height: 40,
              marginVertical: 10,
              paddingLeft: 10,
              paddingRight: 10,
            }}
            inputContainerStyle={{
              borderBottomColor: "#F5F5F5",
            }}
            inputStyle={{
              fontSize: 14,
              color: "#000",
            }}
          />

          <View>
            <Text style={{ padding: 10, color: "#000" }}>Gender</Text>
            <CheckBox
              title="Nam"
              checkedIcon="dot-circle-o"
              checkedColor="#ED4C67"
              checked={gender === 1}
              onPress={() => setGender(1)}
              value="1"
            />
            <CheckBox
              title="Nữ"
              checkedIcon="dot-circle-o"
              checkedColor="#ED4C67"
              checked={gender === 0}
              onPress={() => setGender(0)}
              value="0"
            />
          </View>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </ViewInputContainer>

        <UpdateButtonView>
          <Button
            title={"UPDATE"}
            onPress={() => updateProfile()}
            buttonStyle={{
              backgroundColor: "#ED4C67",
              borderRadius: 3,
            }}
            containerStyle={{
              width: 300,

            }}
          />
        </UpdateButtonView>
      </Page>
    </ScrollView>
  );
}
