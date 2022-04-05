import React, { useState, useEffect } from 'react'
import { 
  KeyboardAvoidingView, 
  Platform, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image,
  View,
  ActivityIndicator
} from 'react-native'

import firebase from '../../config/firebaseConfig'
import styles from './style'
import logo from '../../../assets/icon.png'
import { Feather } from '@expo/vector-icons';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [initializing, setInitializing] = useState(true)
  const [loading, setLoading] = useState(false)

  const loginFirebase = () => {
    setLoading(true)
    setError(false)
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user
        navigation.navigate("PrivateRoutes")
      }).catch((error) => {
        setError(true)
      }).finally(() => setLoading(false))
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) navigation.navigate("PrivateRoutes") 
      setInitializing(false)
    })
  }, [])

  if(initializing) return null

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
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder='Senha'
        secureTextEntry
        type='text'
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />

      {error &&
        <Text style={styles.textError}>
          <Feather name="alert-triangle" size={16} /> Ocorreu um erro, verifique o email e a senha!
        </Text>
      }

      <TouchableOpacity
        disabled={email === '' || password === '' || loading}
        onPress={loginFirebase}
        style={styles.btnLogin}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.textBtnLogin}>Entrar</Text>
        )}
      </TouchableOpacity>

      <View style={styles.containerLinkRegister}>
        <Text style={styles.textRegister}>
          Não tem uma conta?
        </Text>
          <TouchableOpacity 
            onPress={() => navigation.navigate("Register")} 
            style={styles.btnRegister}
          >
            <Text style={styles.textBtnRegister}>Se cadastrar</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login