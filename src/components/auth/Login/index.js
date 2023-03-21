import { View, Text } from "react-native";
import React, { useState } from "react";
import { Button, Header, Input, Icon, CheckBox } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { login, setUserAndToken } from "../../../redux/actions/auth";

export default function Login({ authPage, setAuthPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(email, password)).then((response) => {
      if (response.data) {
        dispatch(setUserAndToken(response.data.user, response.data.token));
        console.log("login successfully");
      } else {
        dispatch(setUserAndToken(null, null));
        console.log("login unsuccessful");
      }
    });
  };

  return (
    <View>
      <Header
        backgroundColor="#ED4C67"
        centerComponent={{ text: "Login", style: { color: "#ffff" } }}
      />

      <Input
        onChangeText={setEmail}
        placeholder="Email"
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
        onChangeText={setPassword}
        placeholder="Password"
        leftIcon={<Icon name="lock-outline" type="material-community" />}
        secureTextEntry={true}
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

      <Button
        onPress={() => handleLogin()}
        title={"Login"}
        buttonStyle={{
          backgroundColor: "#ED4C67",
          borderRadius: 3,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 80,
          marginVertical: 10,
        }}
      />

      <TouchableOpacity
        onPress={() => setAuthPage(!authPage)}
        style={{ padding: 10, justifyContent: "center", alignItems: "center" }}
      >
        <Text>
          Don't have an account yet?{" "}
          <Text style={{ color: "#ED4C67", fontWeight: "bold" }}>Sign up</Text>.
        </Text>
      </TouchableOpacity>
    </View>
  );
}
