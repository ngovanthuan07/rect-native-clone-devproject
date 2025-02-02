import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthScreen from '../../screens/auth'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { userAuthStateListener } from '../../redux/actions/auth'
import HomeNavigation from './../home/index';
import ProfileScreen from '../../screens/account/profile'
import AddPictureAndVideoScreen from '../../screens/home/addPicAndVideo'
import Modal from '../../components/modal'
import CustomVideoPlayer from './../../components/general/index';
import HomeSliderScreen from './../../screens/slider/home/index';
import AddProductScreen from '../../screens/home/addProduct'
import AddProductNext from '../../screens/home/addProduct/next'
import ProductSearchDetail from '../../screens/product/detail'
import Cart from '../../screens/cart'
import RoomDetail from '../../screens/room/roomDetail'
import AddPictureAndVideoRoomScreen from '../../screens/room/roomDetail/addPicAndVideo'
import AddMember from '../../screens/member'
import Order from '../../screens/order'
import SellerSignUp from '../../screens/account/signup_seller'

const Stack = createNativeStackNavigator()

export default function Route() {
  const currentUserObj = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAuthStateListener());
  }, []);

  if (!currentUserObj.loaded) {
    return <View></View>;
  }



  return (
    <NavigationContainer>
        <Stack.Navigator>
        {currentUserObj.currentUser == null ? 
          <Stack.Screen name="auth" component={AuthScreen} options={{ headerShown: false }} />
          :
          <>
            <Stack.Screen name="home" component={HomeNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="editProfile" component={ProfileScreen} options={{ headerShown: false }} />
            <Stack.Screen name="sellerSignUp" component={SellerSignUp} options={{ headerShown: false }} />
            <Stack.Screen name="addPictureAndVideo" component={AddPictureAndVideoScreen} options={{ headerShown: false }} />
            <Stack.Screen name="videoTest" component={CustomVideoPlayer} options={{ headerShown: false }} />
            <Stack.Screen name="homeSliderScreen" component={HomeSliderScreen} options={{ headerShown: false }} />
            <Stack.Screen name="addProduct" component={AddProductScreen} options={{ headerShown: false }} />
            <Stack.Screen name="addProductNext" component={AddProductNext} options={{ headerShown: false }} />
            <Stack.Screen name="productSearchDetail" component={ProductSearchDetail} options={{ headerShown: false }} />
            <Stack.Screen name="cart" component={Cart} options={{ headerShown: false }} />
            <Stack.Screen name="roomDetail" component={RoomDetail} options={{ headerShown: false }} />
            <Stack.Screen name="roomDetailAddPictureAndVideo" component={AddPictureAndVideoRoomScreen} options={{ headerShown: false }} />
            <Stack.Screen name="addMember" component={AddMember} options={{ headerShown: false }} />
            <Stack.Screen name="order" component={Order} options={{ headerShown: false }} />

          </>
       }
        </Stack.Navigator>
        <Modal />
    </NavigationContainer>
  )
}