import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity } from 'react-native'

import firebase from '../../config/firebaseConfig'
import styles from './style'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const loginFirebase = ({ navigation }) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user
      })
      .catch((error) => {
        console.log(error)
        const { code, message } = error
      })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text>Login</Text>
      <TextInput 
        placeholder='E-mail'
        type='text'
        value={email}
        onChangeText={(text) => setEmail(texto)}
      />
      <TextInput
        placeholder='Senha'
        secureTextEntry
        type='text'
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        disabled={email === '' || password === ''}
        onPress={loginFirebase}
      >
        <Text>Entrar</Text>
      </TouchableOpacity>
      <Text>
        Não tem uma conta?
        <Text onPress={() => navigation.navigate("Register")}>Se cadastrar</Text>
      </Text>
    </KeyboardAvoidingView>
  )
}

export default Login