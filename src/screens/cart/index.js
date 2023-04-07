import { View, Text, FlatList, Animated } from "react-native";
import React, { useState } from "react";
import Header001 from "../../components/common/header_0001";
import { useDispatch, useSelector } from "react-redux";
import { SwipeListView } from "react-native-swipe-list-view";
import Spinner from "react-native-loading-spinner-overlay";

import CartItem from "./item";
import HiddenItemWidthActions from "./hiddenItem";
import { removeCart } from "../../services/cart";
import { loadCartDetail } from "../../redux/actions/cart";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Cart() {
  const cartDetails = useSelector((state) => state.cart.cartDetails);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const navigation = useNavigation()

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const total = () => {
    const initialValue = 0;
    return cartDetails.reduce((acc, cur) => acc + cur.total, initialValue)
  }

  const deleteRow = async (rowMap, rowKey) => {
    const cartId = rowKey;
    setLoading(true);
    const response = await removeCart(cartId);
    setLoading(false);
    if (response?.data) {
      if (response.data.status === true) {
        console.log(response.data);
      }
    }
    dispatch(loadCartDetail());
  };

  const renderItem = (data, rowMap) => {
    const item = data.item;
    return <CartItem item={item} />;
  };

  const renderHiddenItem = (data, rowMap) => {
    const item = data.item;
    const rowActionAnimatedValue = new Animated.Value(75);
    const rowHeightAnimatedValue = new Animated.Value(60);
    return (
      <HiddenItemWidthActions
        item={item}
        rowMap={rowMap}
        rowActionAnimatedValue={rowActionAnimatedValue}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        onClose={() => closeRow(rowMap, data.item.id)}
        onDelete={() => deleteRow(rowMap, item.id)}
      />
    );
  };

  return (
    <View
      style={{
        flex: 1,
        marginTop: 30,
      }}
    >
      <Header001
        css={{
          heightContainer: "60px",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
        left={{
          title: "Cart",
          textSite: "20px",
          back: true,
        }}
      />
      <Spinner visible={loading} textStyle={{ color: "#FFF" }} />
      <SwipeListView
        data={cartDetails}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={-100}
        rightOpenValue={-150}
      />
      <View style={{
        width: "100%",
        height: 50,
        flexDirection: "row",
        position: "absolute",
        bottom: 0
      }}>
        <View style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          backgroundColor: "#F2F2F2",
          shadowOpacity: 0.08,
        }}>
          <Text
            style={{
              color: "#ED4C67",
              fontWeight: "bold",
            }}
          >
            Total
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
           $ {total()}
          </Text>
        </View>
        <TouchableOpacity style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ED4C67",
        }}
          onPress={() => navigation.navigate('order', {data: total()})}
        >
          <Text style={{color: 'white', fontWeight: "bold"}}>
            CHECKOUT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
