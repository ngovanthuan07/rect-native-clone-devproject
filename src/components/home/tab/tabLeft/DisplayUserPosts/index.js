import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import uuid from "react-native-uuid";
import { Video } from "expo-av";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function DisplayUserPosts({ item }) {

  const navigation = useNavigation()

  const handleNavigation = (id) => {
    
  }


  if (item.assets.length === 4) {
    return (
      <TouchableOpacity 
                  style={styles.containerFour} 
                  key={item.id} 
                  onPress={() => navigation.navigate('homeSliderScreen', {data: item})}>
        {item.assets.map((asset) =>
          item.assets[0].type === "image" ? (
            <Image style={styles.imageFour} source={{ uri: asset.uri }} />
          ) : (
            <Video
              style={styles.imageFour}
              source={{ uri: asset.uri }}
              resizeMode="cover"
              shouldPlay="false"
              isLooping
            />
          )
        )}
        <View>
          <Text>{item.name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="eye" size={15} color="black" />
            <Text style={{fontSize: 10}}> (0)</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  if (item.assets.length > 1 && item.assets.length < 4) {
    return (
      <TouchableOpacity 
                  style={styles.containerFour}
                  key={item.id}
                  onPress={() => navigation.navigate('homeSliderScreen', {data: item})}
      >
        {item.assets.map((asset) =>
          item.assets[0].type === "image" ? (
            <Image style={styles.imageTwo} source={{ uri: asset.uri }} />
          ) : (
            <Video
              style={styles.imageTwo}
              source={{ uri: asset.uri }}
              resizeMode="cover"
              shouldPlay="false"
              isLooping
            />
          )
        )}
        <View>
          <Text>{item.name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="eye" size={15} color="black" />
            <Text style={{fontSize: 10}}> (0)</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity 
                  style={styles.containerOne} 
                  key={item.id}
                  onPress={() => navigation.navigate('homeSliderScreen', {data: item})}
    >
      {item.assets[0].type === "image" ? (
        <Image style={styles.imageOne} source={{ uri: item.assets[0].uri }} />
      ) : (
        <Video
          style={styles.imageOne}
          source={{ uri: item.assets[0].uri }}
          resizeMode="cover"
          shouldPlay="false"
          isLooping
        />
      )}
     <View>
          <Text>{item.name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="eye" size={15} color="black" />
            <Text style={{fontSize: 10}}> (0)</Text>
          </View>
        </View>
    </TouchableOpacity>
  );
}
