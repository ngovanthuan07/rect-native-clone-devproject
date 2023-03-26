import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components";
import styles from "./styles";
import { Ionicons, Feather } from "@expo/vector-icons";
import CommentItem from "./item";
import { generalStyles } from "../../../styles";
import { getAllCommentByIdPost, createMessage } from "./../../../services/post";

const CommentModal = ({ post, onClose }) => {
  const [content, setContent] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [load, setLoad] = useState(false);
  const currentUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    (async () => {
      const comments = await getAllCommentByIdPost(post.id);
      setCommentList(comments);
    })();
  }, [load]);

  const handleCommentSend = async () => {
    if (content.length == 0) {
      setContent("");
      return;
    }
    await createMessage(post.id, content);
    setContent("");
    setLoad(!load);
  };

  const renderItem = ({ item }) => {
    return <CommentItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <OptionContainer>
        <Text
          style={{
            paddingLeft: 16,
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Comments
        </Text>
        <Feather
          name="x"
          size={25}
          color="black"
          style={{ paddingRight: 10 }}
          onPress={() => onClose()}
        />
      </OptionContainer>
      <FlatList
        data={commentList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.containerInput}>
        <Image
          style={generalStyles.avatarSmall}
          source={{ uri: currentUser?.avatar }}
        />
        <TextInput
          value={content}
          onChangeText={setContent}
          style={styles.input}
        />
        <TouchableOpacity onPress={() => handleCommentSend()}>
          <Ionicons name="arrow-up-circle" size={34} color={"crimson"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentModal;

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
`;
