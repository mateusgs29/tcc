import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import firebase from '../../../config/firebaseConfig'
import { Feather } from '@expo/vector-icons'
import styles from './style'

const DeleteAccount = ({ navigation }) => {
  const user = firebase.auth().currentUser;

  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({
    isError: false,
    message: ""
  })

  const deleteAccountFirebase = async () => {
    setLoading(true)
    setError({isError: false, message: ""})
    try {
      const credential = firebase.auth.EmailAuthProvider.credential(user.email, password)
      await user.reauthenticateWithCredential(credential)
      await user.delete().then(() => {
        navigation.navigate("Login")
      })
    } catch (err) {
      if(err.code === "auth/wrong-password") {
        setError({isError: true, message: "Senha atual está incorreta!"})
      } else {
        setError({isError: true, message: "Ocorreu um erro, tente novamente mais tarde"})
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tem certeza que quer deletar sua conta?</Text>
      <Text style={styles.subtitle}>Digite sua senha para confirmar a ação</Text>
      
      <TextInput 
        placeholder='Senha atual'
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
        onPress={() => deleteAccountFirebase()} 
        style={[styles.btn, styles.btnDelete]}
        disabled={loading || password === ""}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.textBtnDelete}>Deletar conta</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.btn, styles.btnCancel]}>
        <Text style={styles.textBtnCancel}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DeleteAccount