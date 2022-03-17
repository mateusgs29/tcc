import React, { useState } from 'react'
import { 
  KeyboardAvoidingView, 
  Platform, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image
} from 'react-native'

import firebase from '../../config/firebaseConfig'
import styles from './style'
import logo from '../../../assets/icon.png'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const loginFirebase = () => {
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
      behavior={Platform.OS === "ios" ? "position" : ""}
      style={styles.container}
    >
      <Image style={styles.imageLogo} source={logo} />
      <Text style={styles.title}>Login</Text>
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
        disabled={email === '' || password === ''}
        onPress={loginFirebase}
        style={styles.btnLogin}
      >
        <Text style={styles.textBtnLogin}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.textRegister}>
        Não tem uma conta?
        <Text onPress={() => navigation.navigate("Register")} style={styles.linkRegister}> Se cadastrar</Text>
      </Text>
    </KeyboardAvoidingView>
  )
}

export default Login