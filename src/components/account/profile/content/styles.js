import styled from "styled-components";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native";


export const Page = styled(SafeAreaView)`
    height: 1110px;
    overflow: scroll;
    background-color: white;
`;
export const AvatarViewContainer = styled(View)`
  align-items: center;
  margin-top: 20px;
`;
export const AvatarTouchableOpacityContainer = styled(TouchableOpacity)`
  background-color: gray;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;
export const Avatar = styled(Image)`
  height: 100px;
  width: 100px;
  position: absolute;
`;

export const AvatarOverLay = styled(View)`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
`;

export const BackgroundViewContainer = styled(View)`
  margin: 0px 0px 0px 15px;
`;
export const BackgroundTitleText = styled(Text)`
  font-weight: bold;
`;
export const BackgroundViewContainerElement = styled(View)`
  width: 95%;
  height: 400px;
  border: 2px dashed rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const BackgroundView = styled(View)``;
export const ViewIconUpload = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonUploadImage = styled(TouchableOpacity)`
  width: 160px;
  margin-top: 10px;
  padding: 10px 10px 10px 10px;
  border-radius: 5px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackgroundImageContainer = styled(TouchableOpacity)`
  margin-top: 40px;
  width: 90%;
  height: 50%;
  border-radius: 8px;
  border: 1px dashed rgba(0, 0, 0, 0.1);
`;

export const BackgroundImage = styled(Image)`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const DescriptionContainer = styled(View)`
    margin: 10px 0px 0px 15px;
`

export const DescriptionTitleText = styled(Text)`
  font-weight: bold;
`;

export const TextInputDescription = styled(TextInput)`
    width: 95%;
    padding-bottom: 40px;
    border: 2px dashed rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`

export const ViewInputContainer = styled(View)`
    margin: 10px 0px 0px 15px;
`

export const UpdateButtonView = styled(View)`
  margin-top: 10px;
  align-items: center;
`