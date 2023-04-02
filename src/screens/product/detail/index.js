import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Spinner from 'react-native-loading-spinner-overlay';
import buttonStyles from "../../../styles/buttonStyles";
import Header001 from './../../../components/common/header_0001/index';
import { TextInput } from "react-native";
import inputStyles from './../../../styles/inputStyles';
import { addToCart } from "../../../services/cart";
import { useDispatch } from "react-redux";
import { loadCartDetail } from "../../../redux/actions/cart";


const { height, width } = Dimensions.get("window");
export default function ProductSearchDetail({route}) {
  const post = route.params.data
  const navigation = useNavigation()
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  const handlePlus = () => {
    if(quantity === post.quantity) {
      setQuantity(post.quantity)
    } else {
      setQuantity(quantity + 1)
    }
  };

  const handleMinus = () => {
    if (quantity === 1 || quantity < 1) {
      setQuantity(1)
    } else {
      setQuantity(quantity - 1)
    }
  };
  
  const handleAddToCart = async () => {
    const postId = post.id;
    const response = await addToCart(postId, quantity)

    if(response?.data) {
      if(response.data.message && response.data.status === false) {
        Alert.alert(
          'Error',
          response.data.message,
          [
            {
              text: 'OK',
              onPress: () => console.log("error"),
            },
          ],
          { cancelable: false }
        );
      }
    } else {
      Alert.alert(
        'Error',
        'Add to cart Error',
        [
          {
            text: 'OK',
            onPress: () => console.log("error"),
          },
        ],
        { cancelable: false }
      );
    }

    dispatch(loadCartDetail())

  }

  const handleBack = () => {
    navigation.goBack()
  }
  return (
    <View
      style={{
        marginTop: 30,
      }}
    >
      <Header001
        css={{
          heightContainer: "60px",
          backgroundColor: "rgb(235, 237, 240)",
        }}
        left={{
          back: true,
          textSite: "20px",
        }}
        right={{
          heath: true,
          cart: true,
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
            source={{ uri: post.assets[0].uri ? post.assets[0].uri : null }}
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
              {post.currency} {post.pricing}
            </Text>
            <Text style={{ color: "white" }}>{post.name}</Text>
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
              {quantity}
            </Text>

            <AntDesign
              name="pluscircle"
              size={18}
              color="white"
              onPress={() => handlePlus()}
            />
          </View>
        </View>
        <View>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10, marginTop: 10 }}>
              Detail
            </Text>
          </View>
          <TextInput style={inputStyles.input} value={post.name} editable={false}/>
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
            onPress={() => handleBack()}
          >
            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
              Go back
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={buttonStyles.grayPinkButton}
            onPress={() => handleAddToCart()}
          >
            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
              Add to card
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}