import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity } from 'react-native'

import firebase from '../../config/firebaseConfig'
import styles from './style'

const Login = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const createUserFirebase = ({ navigation }) => {
    
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text>Criar conta</Text>
      <TextInput 
        placeholder='Nome'
        type='text'
        value={name}
        onChangeText={(text) => setName(texto)}
      />
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
        disabled={email === '' || password === '' || name === ''}
        onPress={createUserFirebase}
      >
        <Text>Cadastrar</Text>
      </TouchableOpacity>
      <Text>
        Já tem conta?
        <Text onPress={() => navigation.navigate("Register")}>Fazer login</Text>
      </Text>
    </KeyboardAvoidingView>
  )
}

export default Login