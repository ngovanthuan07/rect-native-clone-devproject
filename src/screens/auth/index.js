import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Login from './../../components/auth/Login/index';
import Register from './../../components/auth/Register/index';

export default function AuthScreen() {
  const [authPage, setAuthPage] = useState(true)

  return (
    <View>
      {
        authPage ? 
        <Login 
            authPage={authPage} 
            setAuthPage={setAuthPage}
        /> 
        :
        <Register 
            authPage={authPage} 
            setAuthPage={setAuthPage}
        />
      }
     
    </View>
  )
}