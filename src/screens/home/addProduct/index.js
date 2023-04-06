import {
  View,
  Text,
  TextInput,
  Image,
  Switch,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Header001 } from "../../../components/common";
import { Dimensions } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { buttonStyles, generalStyles, inputStyles } from "./../../../styles";
import { ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

export default function AddProductScreen() {
  //product name
  const [productName, setProductName] = useState("");

  // description
  const [description, setDescription] = useState("");
  const handleDescriptionChange = (newText) => {
    setDescription(newText);
  };

  // dropdown product category
  const [selectedProductCategory, setSelectedProductCategory] = useState("");

  // public search able
  const [publicSearchable, setPublicSearchable] = useState(false);
  const toggleSwitchPublicSearchable = () =>
    setPublicSearchable((previousState) => !previousState);

  // Show Live Stream
  const [showLiveSteam, setShowLiveSteam] = useState(false);
  const toggleSwitchLiveSteam = () =>
    setShowLiveSteam((previousState) => !previousState);

  // Dangerous Goods
  const [dangerousGood, setDangerousGood] = useState(false);
  const toggleSwitchDangerousGood = () =>
    setDangerousGood((previousState) => !previousState);

  // currency
  const [selectedCurrency, setSelectedCurrency] = useState("$");

  //pricing
  const [price, setPrice] = useState("");

  // stock
  const [stock, setStock] = useState("");

  // image
  const [image, setImage] = useState(null);
  const chooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      await setImage(result.assets[0].uri);
    }
  };

  const navigation = useNavigation();

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    const data = {
      name: productName,
      category: selectedProductCategory,
      description: description,
      public_searchable: publicSearchable,
      show_product_in_live: showLiveSteam,
      dangerous_goods: dangerousGood,
      currency: selectedCurrency,
      pricing: price,
      discount: 0,
      quantity: 1,
      stock: stock,
      views: 0,
      image: image,
      choose: "PRODUCT",
    };
    navigation.navigate("addProductNext", { data: data });
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        marginTop: 30,
        backgroundColor: "white",
      }}
    >
      <Header001
        css={{
          heightContainer: "40px",
          backgroundColor: "white",
        }}
        left={{
          title: "Add Product",
          textSite: "15px",
          back: true,
        }}
      />

      <View
        style={{
          marginHorizontal: 20,
        }}
      >
        {/* Image */}
        <View>
          <View>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
              Upload Cover Media
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => chooseImage()}
              style={{
                width: 80,
                height: 30,
                borderRadius: 10,
                backgroundColor: "#2ecc71",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Upload
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: width / 1.1,
              height: 150,
              borderWidth: 2,
              borderColor: "gray",
              borderStyle: "solid",
              borderRadius: 10,
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
              }}
              source={{ uri: image ? image : null }}
            />
          </View>
        </View>

        {/* Product Name */}
        <View style={{ marginTop: 20 }}>
          <View>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
              Product Name
            </Text>
          </View>

          <View>
            <TextInput
              editable
              value={productName}
              style={inputStyles.input}
              onChangeText={setProductName}
            />
          </View>
        </View>

        {/* Product Category */}
        <View style={{ marginTop: 20 }}>
          <View>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
              Product Category
            </Text>
          </View>

          <View style={inputStyles.viewPicker}>
            <Picker
              selectedValue={selectedProductCategory}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedProductCategory(itemValue)
              }
            >
              <Picker.Item label="Select a Category" value="" />
              <Picker.Item label="Running Shoes" value="Running Shoes" />
              <Picker.Item label="Walking Shoes" value="Walking Shoes" />
              <Picker.Item label="Sandals" value="Sandals" />
              <Picker.Item label="Business Shoes" value="Business Shoes" />
            </Picker>
          </View>
        </View>

        {/* Add Description */}
        <View style={{ marginTop: 20 }}>
          <View>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
              Add Description
            </Text>
          </View>

          <View>
            <TextInput
              editable
              multiline
              value={description}
              onChangeText={handleDescriptionChange}
              style={inputStyles.textArea}
            />
          </View>
        </View>

        {/* Public Searchable */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
              Public Searchable
            </Text>
          </View>
          <View>
            <Switch
              trackColor={{ false: "#767577", true: "#ED4C67" }}
              thumbColor={publicSearchable ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchPublicSearchable}
              value={publicSearchable}
            />
          </View>
        </View>

        {/* Show LiveSteam */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
              Show LiveSteam
            </Text>
          </View>
          <View>
            <Switch
              trackColor={{ false: "#767577", true: "#ED4C67" }}
              thumbColor={showLiveSteam ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchLiveSteam}
              value={showLiveSteam}
            />
          </View>
        </View>

        {/* Dangerous Good */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
              Dangerous Good
            </Text>
          </View>
          <View>
            <Switch
              trackColor={{ false: "#767577", true: "#ED4C67" }}
              thumbColor={dangerousGood ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchDangerousGood}
              value={dangerousGood}
            />
          </View>
        </View>

        {/* Currency */}
        <View style={{ marginTop: 20 }}>
          <View>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
              Currency
            </Text>
          </View>

          <View style={inputStyles.viewPicker}>
            <Picker
              selectedValue={selectedCurrency}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedCurrency(itemValue)
              }
            >
              <Picker.Item label="USD" value="$" />
              <Picker.Item label="VND" value="vnd" />
            </Picker>
          </View>
        </View>

        {/* Price */}
        <View style={{ marginTop: 20 }}>
          <View>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
              Pricing
            </Text>
          </View>

          <View>
            <TextInput
              editable
              style={inputStyles.input}
              value={price}
              onChangeText={setPrice}
            />
          </View>
        </View>

        {/* Stock */}
        <View style={{ marginTop: 20 }}>
          <View>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Stock</Text>
          </View>

          <View>
            <TextInput
              editable
              value={stock}
              style={inputStyles.input}
              onChangeText={setStock}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 30,
            marginBottom: 30,
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
            onPress={() => handleNext()}
          >
            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
