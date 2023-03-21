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
import { useDispatch } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {openHomePlusModal} from '../../redux/actions/modal'


export default function HomeScreen() {
  const [hasCameraPermissions, setHasCameraPermissions] = useState(false)
  const [hasAudioPermissions, setHasAudioPermissions] = useState(false)
  const [hasGalleryPermissions, setHasGalleryPermissions] = useState(false)

  const [galleryItems, setGalleryItems] = useState([])

  const [cameraRef, setCameraRef] = useState(null)
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)
  const [cameraFlash, setCameraFlash] = useState(Camera.Constants.FlashMode.off)

  const [isCameraReady, setIsCameraReady] = useState(false)
  const isFocused = useIsFocused()

  const navigation = useNavigation()

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

  const bottomSheetRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)



  const dispatch = useDispatch()


  return (
    // onPress={() => navigation.navigate('addPictureAndVideo')}
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => dispatch(openHomePlusModal(true, ["40%"]))}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}