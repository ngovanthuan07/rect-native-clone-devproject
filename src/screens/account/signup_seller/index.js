import { View, Text, TextInput, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { Header001 } from "../../../components/common";
import { buttonStyles, inputStyles } from "../../../styles";
import { TouchableOpacity } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import styles from "./styles";
import { useDispatch } from 'react-redux';
import { signUpSellerService } from "../../../services/user";
import { userAuthStateListener } from "../../../redux/actions/auth";
import { useNavigation } from "@react-navigation/native";
export default function SellerSignUp() {
  const [email, setEmail] = useState("");
  const [bankAccountHolderName, setBankAccountHolderName] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [bankIdentifierCode, setBankIdentifierCode] = useState("");
  const [bankLocation, setBankLocation] = useState("");
  const [bankCurrency, setBankCurrency] = useState("");
  const [address, setAddress] = useState({
    zipCode: "",
    floor: "",
    unit: "",
    blockNo: "",
    roadNama: "",
    building: "",
    state: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch()
  const navigation = useNavigation()

  const handleSignUp = async () => {
    const data = {
      email,
      bankAccountHolderName,
      bankAccountNumber,
      bankIdentifierCode,
      bankLocation,
      bankCurrency,
      address: JSON.stringify(address),
    };
    setLoading(true)
    const response = await signUpSellerService(data);

    if (response) {
        Alert.alert("Success", "Your seller is register successfully!");
        
    } else {
        Alert.alert("Error", "Your seller is register error!");
    }

    dispatch(await userAuthStateListener())

    setLoading(false)

    if(response) {
        navigation.goBack()
    }

  };
  return (
    <View
      style={{
        flex: 1,
        marginTop: 25,
        backgroundColor: "white",
      }}
    >
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <Spinner visible={loading} textStyle={{ color: "#FFF" }} />
        <Header001
          css={{
            heightContainer: "50px",
            backgroundColor: "white",
          }}
          left={{
            title: "Seller Sign Up",
            textSite: "20px",
            back: true,
          }}
        />
        <View style={{ marginHorizontal: 20 }}>
          {/* Address */}
          <View style={{ marginTop: 20 }}>
            <View>
              <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
                Address
              </Text>
            </View>

            <View style={styles.addressContainer}>
              <View style={styles.viewAddressTowInput}>
                <TextInput
                  editable
                  placeholder="Zip code"
                  style={[inputStyles.inputTwo, styles.inputWidth]}
                  onChange={(value) =>
                    setAddress({ ...address, zipCode: value.nativeEvent.text })
                  }
                />
                <TextInput
                  editable
                  placeholder="Floor"
                  style={[inputStyles.inputTwo, styles.inputWidth]}
                  onChange={(value) =>
                    setAddress({ ...address, floor: value.nativeEvent.text })
                  }
                />
              </View>
              <View style={styles.viewAddressTowInput}>
                <TextInput
                  editable
                  placeholder="Unit"
                  style={[inputStyles.inputTwo, styles.inputWidth]}
                  onChange={(value) =>
                    setAddress({ ...address, unit: value.nativeEvent.text })
                  }
                />
                <TextInput
                  editable
                  placeholder="Block No"
                  style={[inputStyles.inputTwo, styles.inputWidth]}
                  onChange={(value) =>
                    setAddress({ ...address, blockNo: value.nativeEvent.text })
                  }
                />
              </View>
              <View style={styles.viewAddressTowInput}>
                <TextInput
                  editable
                  placeholder="Road Nama"
                  style={[inputStyles.inputTwo, { width: "100%" }]}
                  onChange={(value) =>
                    setAddress({ ...address, roadNama: value.nativeEvent.text })
                  }
                />
              </View>
              <View style={styles.viewAddressTowInput}>
                <TextInput
                  editable
                  placeholder="Building"
                  style={[inputStyles.inputTwo, { width: "100%" }]}
                  onChange={(value) =>
                    setAddress({ ...address, building: value.nativeEvent.text })
                  }
                />
              </View>

              <View style={styles.viewAddressTowInput}>
                <TextInput
                  editable
                  placeholder="State"
                  style={[inputStyles.inputTwo, styles.inputWidth]}
                  onChange={(value) =>
                    setAddress({ ...address, state: value.nativeEvent.text })
                  }
                />
                <TextInput
                  editable
                  placeholder="City"
                  style={[inputStyles.inputTwo, styles.inputWidth]}
                  onChange={(value) =>
                    setAddress({ ...address, city: value.nativeEvent.text })
                  }
                />
              </View>
            </View>
          </View>

          {/* Email */}
          <View style={{ marginTop: 20 }}>
            <View>
              <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
                Email
              </Text>
            </View>

            <View>
              <TextInput
                editable
                style={inputStyles.inputTwo}
                onChangeText={setEmail}
              />
            </View>
          </View>

          {/* Bank Account Holder Name */}
          <View style={{ marginTop: 20 }}>
            <View>
              <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
                Bank Account Holder Name
              </Text>
            </View>

            <View>
              <TextInput
                editable
                style={inputStyles.inputTwo}
                onChangeText={setBankAccountHolderName}
              />
            </View>
          </View>

          {/* Bank Account Number */}
          <View style={{ marginTop: 20 }}>
            <View>
              <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
                Bank Account Holder Name
              </Text>
            </View>

            <View>
              <TextInput
                editable
                style={inputStyles.inputTwo}
                onChangeText={setBankAccountHolderName}
              />
            </View>
          </View>

          {/* Bank Identifier Code */}
          <View style={{ marginTop: 20 }}>
            <View>
              <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
                Bank Identifier Code
              </Text>
            </View>

            <View>
              <TextInput
                editable
                style={inputStyles.inputTwo}
                onChangeText={setBankIdentifierCode}
              />
            </View>
          </View>

          {/* Bank Location */}
          <View style={{ marginTop: 20 }}>
            <View>
              <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
                Bank Location
              </Text>
            </View>

            <View>
              <TextInput
                editable
                style={inputStyles.inputTwo}
                onChangeText={setBankLocation}
              />
            </View>
          </View>

          {/* Bank Currency */}
          <View style={{ marginTop: 20 }}>
            <View>
              <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
                Bank Currency
              </Text>
            </View>

            <View>
              <TextInput
                editable
                style={inputStyles.inputTwo}
                onChangeText={setBankCurrency}
              />
            </View>
          </View>

          {/* Bank Currency */}
          <View style={{ marginTop: 20, marginBottom: 10 }}>
            <TouchableOpacity
              style={buttonStyles.grayPinkButton}
              onPress={() => handleSignUp()}
            >
              <Text style={buttonStyles.text}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
