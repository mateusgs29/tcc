import React, { useState, useRef } from 'react'
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import styles from './style'
import { Feather } from '@expo/vector-icons'
import firebase from '../../config/firebaseConfig'
import { Modalize } from 'react-native-modalize'

const Configuration = ({ navigation }) => {
  const user = firebase.auth().currentUser;

  const modalizeRef = useRef(null)

  const onOpen = () => {
    modalizeRef.current?.open('top')
  }

  const modalDeleteAccount = () => {
    return (
      <Modalize
        ref={modalizeRef}
        snapPoint={200}
        avoidKeyboardLikeIOS
        keyboardAvoidingBehavior={Platform.OS === "android" ? "height" : "padding"}
        scrollViewProps={{keyboardShouldPersistTaps: "always"}}
        alwaysOpen
      >
        
      </Modalize>
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("InfoUser")}>
        <Text>Informações sobre o usuário</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("InfoApp")}>
        <Text>Sobre o aplicativo</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Text>Deletar conta</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Configuration