import { View, Text } from "react-native";
import React, { useState } from "react";
import { Button, Header, Input, Icon, CheckBox } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TouchableOpacity } from "react-native";
import { register, setUserAndToken } from "../../../redux/actions/auth";
import { useDispatch } from "react-redux";

export default function Register({ authPage, setAuthPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [gender, setGender] = useState(1);

  const dispatch = useDispatch()

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

  const handleRegister = () => {
  
    dispatch(register({
      email: email,
      password: password,
      name: name,
      dob:dateOfBirth,
      phone: phoneNumber,
      gender: gender,
    }))
    .then((response) => {
      if(response.data) {
        dispatch(setUserAndToken(response.data.user, response.data.token))
        console.log('register successfully')
      } else {
        dispatch(setUserAndToken(null, null))
        console.log('register unsuccessful')
      }
    })
  };

  return (
    <View>
      <Header
        backgroundColor="#ED4C67"
        centerComponent={{ text: "Register", style: { color: "#ffff" } }}
      />

      <Input
        onChangeText={setName}
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
        onChangeText={setEmail}
        placeholder="Email"
        leftIcon={<Icon name="email" type="material-community" />}
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

      <Input
        onChangeText={setPhoneNumber}
        placeholder="Phone number"
        leftIcon={{ type: "font-awesome", name: "phone" }}
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

      <Button
        onPress={() => handleRegister()}
        title={"Register"}
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
          Already have an account?{" "}
          <Text style={{ color: "#ED4C67", fontWeight: "bold" }}>Sign in</Text>.
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}
