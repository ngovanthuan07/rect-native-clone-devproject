import React, { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import Header001 from "./../../components/common/header_0001/index";
import styles from "./styles";
import debounce from "lodash.debounce";
import { mSearchable } from "../../services/search";
import SearchItem from "./item";
import { SafeAreaView } from "react-native-safe-area-context";
import uuid from 'react-native-uuid';

export default function Search() {
  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const delayedQuery = debounce(() => {
      mSearchable(textInput)
        .then((response) => {
          let posts = response.data.posts;
          let products = response.data.products;
          let users = response.data.users;
          setResult(prev => {
            return [].concat(products, posts, users)
          });

          console.log(products[0])
          
        })
        .catch((err) => {
          console.log(err);
          setResult(prev => {
            return []
          });
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
          data={result}
          renderItem={({ item }) => <SearchItem item={item} />}
          keyExtractor={(item) => uuid.v4()}
          contentContainerStyle={{
            paddingLeft: '10%'
          }}
        />
      </SafeAreaView>
    </View>
  );
}
