import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Header001 } from "../../components/common";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import inputStyles from "./../../styles/inputStyles";
import * as ImagePicker from "expo-image-picker";
import {
  AvatarTouchableOpacityContainer,
  AvatarViewContainer,
  Avatar_001,
  AvatarOverLay,
} from "../../components/account/profile/content/styles";
import Loading001 from "./../../components/common/loading_001/index";
import { useDispatch, useSelector } from "react-redux";
import { loadingSpinner } from "./../../redux/actions/loading";
import { createRoom } from "./../../services/roomService";
import { ListItem, Avatar } from "react-native-elements";
import { loadRooms } from './../../redux/actions/room';

export default function RoomScreen() {

  const rooms = useSelector(state => state.room.rooms );

  const [modalVisible, setModalVisible] = useState(false);

  const [name, setName] = useState("");

  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  const navigation = useNavigation()

  useEffect(() => {
    dispatch(loadRooms())
  }, [])

  const chooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      await setImage(result.assets[0].uri);
    }
  };

  const handleCreateRoom = async () => {
    const data = {
      name: name,
      image: image,
    };
    dispatch(loadingSpinner(true));

    const response = await createRoom(data);
    console.log(response?.data);
    dispatch(loadingSpinner(false));
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Loading001 />
      <Header001
        css={{
          heightContainer: "60px",
          backgroundColor: "rgb(235, 237, 240)",
        }}
        left={{
          title: "Room",
          textSite: "20px",
        }}
        right={{
          heath: true,
          cart: true,
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Create Room</Text>
            <AvatarViewContainer>
              <AvatarTouchableOpacityContainer onPress={() => chooseImage()}>
                <Avatar_001 source={{ uri: image }} />
                <AvatarOverLay />
                <Feather name="camera" size={26} color="white" />
              </AvatarTouchableOpacityContainer>
            </AvatarViewContainer>

            <TextInput
              onChangeText={setName}
              placeholder="Name Room"
              style={[inputStyles.input, styles.textInput]}
            />

            <View
              style={{
                width: 150,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonCreate]}
                onPress={() => handleCreateRoom()}
              >
                <Text style={styles.textStyle}>Create</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <View>
        {rooms.map((l, i) => (
          <ListItem key={i} 
            onPress={() => navigation.navigate("roomDetail", {data: l.id})}
            bottomDivider>
            <Avatar source={{ uri: l?.image }} />
            <ListItem.Content>
              <ListItem.Title>{l?.name}</ListItem.Title>
              <ListItem.Subtitle>member: {l?.count}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>

      <TouchableOpacity
        style={styles.buttonRoom}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
