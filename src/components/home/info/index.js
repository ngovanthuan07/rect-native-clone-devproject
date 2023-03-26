import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { TouchableOpacity, Image } from 'react-native';
import { AvatarOverLay } from './../../account/profile/content/styles';
export default function Info({user}) {
  return (
    <View style={styles.container}>
      <View style={styles.containerBackground}>
        <Image style={styles.background} source={{uri: user.background}}/>
        <View style={styles.containerImage}>
          <Image  style={styles.image} source={{uri: user.avatar}}/>
         <Text style={styles.textUserName}>{user.name}</Text>
        </View>
      </View>
     <View style={styles.bottomContainer}>
      <View style={styles.containerNumber}>
        <Text style={styles.textNumber}>1</Text>
        <Text>Posts</Text>
      </View>
      <View style={styles.containerNumber}>
        <Text style={styles.textNumber}>2</Text>
        <Text>Followers</Text>
      </View>
      <View style={styles.containerNumber}>
        <Text style={styles.textNumber}>3</Text>
        <Text>Following</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.bottomText}>
            Following
          </Text>
        </TouchableOpacity>
      </View>
     </View>
    </View>
  )
}