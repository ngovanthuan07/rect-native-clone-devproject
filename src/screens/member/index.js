import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header001 from "../../components/common/header_0001";
import debounce from "lodash.debounce";

import styles from "./styles";
import { queryUsersByField } from "../../services/user";
import { Avatar, ListItem } from "react-native-elements";
import buttonStyles from "../../styles/buttonStyles";
import { useDispatch, useSelector } from "react-redux";
import { loadRoomById, loadRooms } from './../../redux/actions/room';
import { inviteRoom } from "../../services/roomService";
import Spinner from 'react-native-loading-spinner-overlay';


export default function AddMember({route}) {
  let room = useSelector((state) => state.room.room);
  const member = room.members.map(member => {
    return member.user.id
  })
  console.log(member)
  const roomId = route.params.data.roomId
  const [loading, setLoading] = useState(false);


  const [textInput, setTextInput] = useState("");
  const [searchUsers, setSearchUsers] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    const delayedQuery = debounce(() => {
      (async () => {
        setSearchUsers(await queryUsersByField("name", textInput));

      })();
    }, 500);

    delayedQuery();

    return delayedQuery.cancel;
  }, [textInput, loading]);

  const handleInvite = async (userId) => {
    setLoading(true)
    const response = await inviteRoom({
      roomId: roomId,
      userId: userId,
    })
    console.log(response)
    await dispatch(loadRooms())
    await dispatch(loadRoomById(roomId))
    setLoading(false)
  }

  return (
    <View>
      <Header001
        css={{
          heightContainer: "60px",
          backgroundColor: "rgb(235, 237, 240)",
        }}
        left={{
          title: "Search",
          textSite: "20px",
          back: true,
        }}
        right={{
          heath: true,
          cart: true,
        }}
      />
      <Spinner
          visible={loading}
          textStyle={{color: '#FFF',}}
        />
      <TextInput
        onChangeText={setTextInput}
        style={styles.textInput}
        placeholder={"Search"}
      />

      <View>
        {searchUsers.map((user, index) => (
          <ListItem key={index} bottomDivider>
            <Avatar source={{ uri: user?.avatar ? user?.avatar : null }} />
            <ListItem.Content>
              <ListItem.Title
                style={{
                  color: "#ED4C67",
                  fontWeight: "bold",
                }}
              >
                {user?.name}
              </ListItem.Title>
              <ListItem.Title>
                {user?.email}
              </ListItem.Title>
              <ListItem.Subtitle>
                {
                  member.includes(user.id) === false ?
                    <TouchableOpacity style={buttonStyles.grayGreenButton}
                      onPress={() => handleInvite(user.id)}
                    >
                      <Text style={{color: 'white', fontWeight: 'bold'}}>Invite</Text>
                    </TouchableOpacity>
                  : null
                }
                {
                  member.includes(user.id) === true ?
                    <TouchableOpacity style={buttonStyles.grayPinkButton}>
                      <Text style={{color: 'white', fontWeight: 'bold'}}>Invited</Text>
                    </TouchableOpacity>
                  : null
                }
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </View>
  );
}
