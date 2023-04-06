import { View, Text, Image, Alert } from "react-native";
import React, {useState} from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { addToCart } from "../../../services/cart";
import { useDispatch } from "react-redux";
import { loadCartDetail } from './../../../redux/actions/cart';
import Spinner from 'react-native-loading-spinner-overlay';

export default function CartItem({ item }) {
  const product = item.product;
  const [loading, setLoading] = useState(false);


  const dispatch = useDispatch()

  const handlePlus = async () => {
    const productId = product.id;
    setLoading(true)
    const response = await addToCart(productId, 1)
    setLoading(false)

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

  
  const handleMinus = async () => {
    const productId = product.id;
    setLoading(true)
    const response = await addToCart(productId, -1)
    setLoading(false)

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

  return (
    <View
      style={{
        height: 200,
        paddingHorizontal: 10,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
       <Spinner
          visible={loading}
         
          textStyle={{color: '#FFF',}}
      />
      <View
        style={{
          flex: 1,
        }}
      >
        <Image
          style={{
            width: 100,
            height: 100,
            backgroundColor: "#f2f2f2",
            borderRadius: 5,
          }}
          source={{ uri: product?.image }}
        />
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text>{product?.name}</Text>
        <Text>
          {product?.currency} {product?.pricing}
        </Text>
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
          color="#ED4C67"
          onPress={() => handleMinus()}
        />

        <Text style={{ color: "black", fontWeight: "bold" }}>
          {item?.quantity}
        </Text>

        <AntDesign
          name="pluscircle"
          size={18}
          color="#ED4C67"
          onPress={() => handlePlus()}
        />
      </View>
    </View>
  );
}
