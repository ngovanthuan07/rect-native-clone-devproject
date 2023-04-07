import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { Header001 } from "../../components/common";
import { inputStyles } from "../../styles";
import { paymentService, paymentComplete } from "../../services/order";
import { useStripe } from "@stripe/stripe-react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { loadCartDetail } from "../../redux/actions/cart";

export default function Order({ route }) {
  const currentUser = useSelector(state => state.auth.currentUser);

  const total = route.params.data;
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  // data
  const [paymentIntent, setPaymentIntent] = useState("");
  const [ephemeralKey, setEphemeralKey] = useState("");
  const [customer, setCustomer] = useState("");
  const [publishableKey, setPublishableKey] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const handlePayment = async () => {
    const data = {
      total,
      phone,
      email,
      address,
    };

    const response = await paymentService(data);
    if (response?.data) {
      setPaymentIntent(response?.data?.paymentIntent);
      setEphemeralKey(response?.data?.ephemeralKey);
      setCustomer(response?.data?.customer);
      setPublishableKey(response?.data?.publishableKey);

      initializePaymentSheet();
      if(loading) {
        await openPaymentSheet();
      }
    } else {
      console.log(response);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert("Success", "Your order is confirmed!");
      await paymentComplete();
      dispatch(await loadCartDetail())
      navigation.navigate("cart");
    }
  };

  const initializePaymentSheet = async () => {
    const { error } = await initPaymentSheet({
      merchantDisplayName: currentUser['name'],
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: currentUser['name'],
        email: email,
        phone: phone,
      },
    });
    if (!error) {
      setLoading(true);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header001
          css={{
            heightContainer: "40px",
            backgroundColor: "white",
          }}
          left={{
            title: "Checkout",
            textSite: "15px",
            back: true,
          }}
        />
        <View
          style={{
            paddingHorizontal: 10,
            marginTop: 20,
          }}
        >
          <TextInput
            autoCapitalize="none"
            placeholder="E-mail"
            keyboardType="email-address"
            onChange={(value) => setEmail(value.nativeEvent.text)}
            style={[inputStyles.inputTwo, styles.spaceButton]}
          />

          <TextInput
            autoCapitalize="none"
            placeholder="Address"
            keyboardType="Address"
            onChange={(value) => setAddress(value.nativeEvent.text)}
            style={[inputStyles.inputTwo, styles.spaceButton]}
          />

          <TextInput
            autoCapitalize="none"
            placeholder="Phone"
            keyboardType="Phone"
            onChange={(value) => setPhone(value.nativeEvent.text)}
            style={[inputStyles.inputTwo, styles.spaceButton]}
          />
          <View style={styles.totalView}>
            <Text style={[styles.totalText]}>Total</Text>
            <Text style={[styles.totalText]}>$ {total}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePayment()}
          >
            <Text style={[styles.textButton]}>Payment</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  spaceButton: {
    marginBottom: 10,
  },
  totalView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  totalText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  textButton: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#0984e3",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
});
