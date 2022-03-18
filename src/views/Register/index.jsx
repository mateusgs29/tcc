import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, Image, View } from 'react-native'

import firebase from '../../config/firebaseConfig'
import styles from './style'
import logo from '../../../assets/icon.png'
import { Feather } from '@expo/vector-icons';

const Register = ({ navigation }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState({
    isError: false,
    message: ""
  })
  
  const createUserFirebase = () => {
    setError({...error, isError: false})
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user
        user.updateProfile({
          displayName: name
        }).then(() => {
          navigation.navigate("Login")
        })
      }).catch((error) => {
        console.log(error.code)
        if(error.code === "auth/weak-password") {
          setError({isError: true, message: "Senha deve ter no mínimo 6 caracteres!"})
        } else if (error.code === "auth/email-already-in-use") {
          setError({isError: true, message: "Esse e-mail já foi cadastrado!"})
        } else {
          setError({isError: true, message: "Ocorreu um erro, tente novamente mais tarde"})
        }
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
      {error.isError &&
        <Text style={styles.textError}>
          <Feather name="alert-triangle" size={16} /> {error.message}
        </Text>
      }
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