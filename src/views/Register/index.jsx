import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, Image } from 'react-native'

import firebase from '../../config/firebaseConfig'
import styles from './style'
import logo from '../../../assets/icon.png'

const Register = ({ navigation }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const createUserFirebase = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user
        user.updateProfile({
          displayName: name
        }).then(() => {
          navigation.navigate("Login")
        })
      }).catch((error) => {
        console.log(error)
        const { code, message } = error
      })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Image style={styles.imageLogo} source={logo} />
      <Text style={styles.title}>Criar conta</Text>
      <TextInput 
        placeholder='Nome'
        type='text'
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <TextInput 
        placeholder='E-mail'
        type='text'
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder='Senha'
        secureTextEntry
        type='text'
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />
      <TouchableOpacity
        disabled={email === '' || password === '' || name === ''}
        onPress={createUserFirebase}
        style={styles.btnRegister}
      >
        <Text style={styles.textBtnRegister}>Cadastrar</Text>
      </TouchableOpacity>
      <Text style={styles.textLogin}>
        Já tem conta?
        <Text onPress={() => navigation.navigate("Login")} style={styles.linkLogin}> Fazer login</Text>
      </Text>
    </KeyboardAvoidingView>
  )
}

export default Register