import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Camera } from 'expo-camera'
import { Audio } from 'expo-av'
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library'
import * as VideoThumbnails from 'expo-video-thumbnails';

import { useIsFocused } from '@react-navigation/core'
import { Feather, AntDesign } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'
import styles from './styles';

import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet"
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {openHomePlusModal} from '../../redux/actions/modal'
import Modal from './../../components/modal/index';
import NavbarCommon from '../../components/navBar'
import Info from '../../components/home/info'
// import { Tab, TabView } from 'react-native-elements';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabLeft from './../../components/home/tab/tabLeft/index';
import TabRight from './../../components/home/tab/tabRight/index';
import {displayPosts, displayUserPostAndProduct} from '../../redux/actions/postAndProduct';
import { Header001 } from '../../components/common'
import uuid from 'react-native-uuid';
import Spinner from 'react-native-loading-spinner-overlay';

const Tab = createMaterialTopTabNavigator();



export default function HomeScreen() {
  const [hasCameraPermissions, setHasCameraPermissions] = useState(false)
  const [hasAudioPermissions, setHasAudioPermissions] = useState(false)
  const [hasGalleryPermissions, setHasGalleryPermissions] = useState(false)

  const [galleryItems, setGalleryItems] = useState([])

  const [cameraRef, setCameraRef] = useState(null)
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)
  const [cameraFlash, setCameraFlash] = useState(Camera.Constants.FlashMode.off)
  const [loading, setLoading] = useState(false);


  const [isCameraReady, setIsCameraReady] = useState(false)
  const isFocused = useIsFocused()

  const [_tab, _setTab] = useState('LEFT')
 

  const navigation = useNavigation()

  const currentUser = useSelector(state => state.auth.currentUser);


  const dispatch = useDispatch()

  useEffect(() => {
      (async () => {
          const cameraStatus = await Camera.requestCameraPermissionsAsync()
          setHasCameraPermissions(cameraStatus.status == 'granted')

          const audioStatus = await Audio.requestPermissionsAsync()
          setHasAudioPermissions(audioStatus.status == 'granted')

          const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
          setHasGalleryPermissions(galleryStatus.status == 'granted')

          if (galleryStatus.status == 'granted') {
              const userGalleryMedia = await MediaLibrary.getAssetsAsync({ sortBy: ['creationTime'], mediaType: ['video'] })
              setGalleryItems(userGalleryMedia.assets)
          }
      })()
  }, [])

  useEffect(() => {
    (async () => {
      setLoading(true)
      if(_tab === 'LEFT') {
        await dispatch(displayPosts())
      }
      if(_tab === 'RIGHT') {
        await dispatch(displayUserPostAndProduct())
      }
      setLoading(false)
    })()
  }, [_tab])
 

  return (
    // onPress={() => navigation.navigate('addPictureAndVideo')}
    <SafeAreaView style={styles.container}>
      <Spinner
          visible={loading}
          textStyle={{color: '#FFF'}}
      />
      <Header001 
          css={{
            heightContainer: '50px',
            backgroundColor: 'white'
          }}
          left= {{
              title: '',
              textSite: '15px',
          }}
          right= {{
            share: true,
            heath: true,
            cart: true,
            notification: true
          }}

      />
      <Info user={currentUser}/>


      <Tab.Navigator>
        <Tab.Screen
          name="Screen1"
          component={TabLeft}
          options={{
            headerShown: false,
            tabBarLabel: () => null,
            tabBarIcon: ({ color }) => (
              <Feather name="grid" size={24} color="gray" />
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              // e.preventDefault();
              _setTab('LEFT')
            },
          })}
        />
        <Tab.Screen
          name="Screen2"
          component={TabRight}
          options={{
            headerShown: false,
            tabBarLabel: () => null,
            tabBarIcon: ({ color }) => (
              <Feather name="info" size={24} color="gray" />
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              // e.preventDefault();
              _setTab('RIGHT')
            },
          })}
        />
    </Tab.Navigator>

      

      <TouchableOpacity style={styles.button} onPress={() => dispatch(openHomePlusModal(true, ["40%"]))}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}