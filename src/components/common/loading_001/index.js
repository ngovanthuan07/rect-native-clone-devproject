import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay/lib";

export default function Loading001() {
  const loading = useSelector(state => state.spinner.loading)

  return <Spinner
    visible={loading} 
    textStyle={{ color: "#FFF" }} 
  />;
}
