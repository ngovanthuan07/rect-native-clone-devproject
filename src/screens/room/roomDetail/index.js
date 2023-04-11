import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Modal,
  StyleSheet,
  Pressable,
  FlatList
} from "react-native";

import React, { useEffect, useState } from "react";
import { showPostRoom, showRoomService } from "../../../services/roomService";
import { useDispatch, useSelector } from "react-redux";
import { loadRoomById } from "../../../redux/actions/room";
import Header001 from "./../../../components/common/header_0001/index";
import { AntDesign, Feather } from "@expo/vector-icons";
import Info from "./info";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import buttonStyles from "../../../styles/buttonStyles";
import MemberItem from "./memberItem";
import PostItem from './post/index';
import Spinner from 'react-native-loading-spinner-overlay';

export default function RoomDetail({ route }) {
  let room = useSelector((state) => state.room.room);
  let [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation()

  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      setLoading(true)
      dispatch(await loadRoomById(route.params.data));
      setLoading(false)
      setPosts(await showPostRoom(room.id))
    })()
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 30 }}>
      <Spinner
          visible={loading}
          textStyle={{color: '#FFF',}}
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
            <TouchableOpacity onPress={() => navigation.navigate("roomDetailAddPictureAndVideo", {id: room.id})}>
              <Text style={styles.modalText}>Add Pic/Video</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.modalText}>Add Livestream</Text>
            </TouchableOpacity>
            <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Header001
        css={{
          heightContainer: "60px",
          backgroundColor: "rgb(235, 237, 240)",
        }}
        left={{
          title: "Room",
          textSite: "20px",
          back: true,
        }}
        right={{
          heath: true,
          cart: true,
        }}
      />
      <Info room={room} />

      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity style={buttonStyles.grayGreenButton}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Lever Room</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyles.grayPinkButton} onPress={() => navigation.navigate("addMember", {data: {roomId: room.id}})}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Add Member</Text>
        </TouchableOpacity>
      </View>

    <SafeAreaView style={{marginTop: 10}}>
      <FlatList
        horizontal
        data={room?.members}
        renderItem={({item}) => <MemberItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{
            paddingLeft: '5%'
          }}
      />
    </SafeAreaView>

    <Text 
      style={{
        marginTop: 10, 
        fontWeight: 'bold',
        paddingHorizontal: 10
      }}
    >Posts</Text>

    <SafeAreaView style={{marginTop: 10, flex: 1}}>
      <FlatList
        numColumns={3}
        data={posts}
        renderItem={({item}) => <PostItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{
            paddingLeft: '5%'
          }}
      />
    </SafeAreaView>


      <TouchableOpacity
        style={styles.buttonRoom}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
