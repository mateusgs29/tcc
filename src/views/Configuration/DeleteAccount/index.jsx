import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import firebase from '../../../config/firebaseConfig'
import { Feather } from '@expo/vector-icons'
import styles from './style'
import CustomButton from '../../../components/CustomButton'

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

      <CustomButton
        onPress={() => deleteAccountFirebase()} 
        color="red"
        loading={loading}
        optionsDisable={password === ""}
        newStyle={styles.marginTopBtn}
      >
        Deletar conta
      </CustomButton>
      <CustomButton
        onPress={() => navigation.goBack()}
        color="gray"
        newStyle={styles.marginTopBtn}
      >
        Cancelar
      </CustomButton>
    </View>
  )
}

export default DeleteAccount