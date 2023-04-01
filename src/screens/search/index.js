import React, { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import Header001 from "./../../components/common/header_0001/index";
import styles from "./styles";
import debounce from "lodash.debounce";
import { searchPost } from "../../services/post";
import SearchItem from "./item";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  const [textInput, setTextInput] = useState("");
  const [searchPosts, setSearchPosts] = useState([]);

  useEffect(() => {
    const delayedQuery = debounce(() => {
      searchPost(textInput)
        .then((response) => {
          let posts = response.data.posts;
          setSearchPosts(posts);
        })
        .catch((err) => {
          console.log(err);
          setSearchPosts([]);
        });
    }, 500);

    delayedQuery();

    return delayedQuery.cancel;
  }, [textInput]);

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
        }}
        right={{
          heath: true,
          cart: true,
        }}
      />

      <TextInput
        onChangeText={setTextInput}
        style={styles.textInput}
        placeholder={"Search"}
      />
      <SafeAreaView>
        <FlatList
          numColumns={2}
          data={searchPosts}
          renderItem={({ item }) => <SearchItem item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingLeft: '10%'
          }}
        />
      </SafeAreaView>
    </View>
  );
}
