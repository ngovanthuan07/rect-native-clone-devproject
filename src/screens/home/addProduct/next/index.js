import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { Header001 } from "../../../../components/common";
import { Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import buttonStyles from "./../../../../styles/buttonStyles";
import { useNavigation } from "@react-navigation/native";
import { addProduct } from "../../../../services/post";
import Spinner from 'react-native-loading-spinner-overlay';


const { height, width } = Dimensions.get("window");

export default function AddProductNext({ route }) {
  const [item, setItem] = useState(route?.params?.data);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleCancel = () => {
    navigation.navigate("home");
  };

  const handlePublic = async () => {
    setLoading(true)
    const response = await addProduct(item)
    setLoading(false)
    if(response?.data) {
      Alert.alert(
        'Success',
        'Upload Product Successfully',
        [
          {
            text: 'OK',
            onPress: () => handleCancel(),
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Error',
        'Upload Product Error',
        [
          {
            text: 'OK',
            onPress: () => console.log("error"),
          },
        ],
        { cancelable: false }
      );
    }
  };

  const handlePlus = () => {
    setItem({
      ...item,
      quantity: item.quantity + 1,
    });
  };

  const handleMinus = () => {
    if (item.quantity === 1 || item.quantity < 1) {
      setItem({
        ...item,
        quantity: 1,
      });
    } else {
      setItem({
        ...item,
        quantity: item.quantity - 1,
      });
    }
  };

  return (
    <View style={{ flex: 1, marginTop: 30, backgroundColor: "white" }}>
       <Spinner
          visible={loading}
         
          textStyle={{color: '#FFF',}}
        />
      <Header001
        css={{
          heightContainer: "40px",
          backgroundColor: "white",
        }}
        left={{
          title: "Uploads Product",
          textSite: "15px",
          back: true,
        }}
      />
      <View
        style={{
          marginHorizontal: 20,
        }}
      >
        <View>
          <View>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
              Preview
            </Text>
          </View>
        </View>
        <View
          style={{
            width: width / 1.1,
            height: 200,
            backgroundColor: "#F2F2F2",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <Image
            style={{
              width: "100%",
              height: 200,
              backgroundColor: "#F2F2F2",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            source={{ uri: item.assets[0].uri ? item.assets[0].uri : null }}
          />
        </View>
        <View
          style={{
            width: width / 1.1,
            height: 60,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: "#ED4C67",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <View style={{ flex: 2 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {item.currency} {item.pricing}
            </Text>
            <Text style={{ color: "white" }}>{item.name}</Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <AntDesign
              name="minuscircle"
              size={18}
              color="white"
              onPress={() => handleMinus()}
            />

            <Text style={{ color: "white", fontWeight: "bold" }}>
              {item.quantity}
            </Text>

            <AntDesign
              name="pluscircle"
              size={18}
              color="white"
              onPress={() => handlePlus()}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 30,
            marginBottom: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={buttonStyles.grayGreenButton}
            onPress={() => handleCancel()}
          >
            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
              Cancel
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={buttonStyles.grayPinkButton}
            onPress={() => handlePublic()}
          >
            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
              Public
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
