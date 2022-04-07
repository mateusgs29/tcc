import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import firebase from '../../../config/firebaseConfig'
import { Ionicons, Feather } from '@expo/vector-icons'
import styles from './style'
import CustomButton from '../../../components/CustomButton'

const InfoUser = ({ navigation }) => {
  const user = firebase.auth().currentUser;
  
  const [name, setName] = useState(user.displayName)
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [changePassword, setChangePassword] = useState(false)
  const [editable, setEditable] = useState(false)
  const [loading, setLoading] = useState(false) 
  const [error, setError] = useState({
    isError: false,
    message: ""
  })
  
  const changeUserData = async () => {
    setLoading(true)
    setError({isError: false, message: ""})
    try {
      await user.updateProfile({ displayName: name })
      if (changePassword) {
        const credential = firebase.auth.EmailAuthProvider.credential(user.email, oldPassword)
        await user.reauthenticateWithCredential(credential)
        await user.updatePassword(newPassword)
      }
      navigation.goBack()
    } catch(err) {
      if(err.code === "auth/wrong-password") {
        setError({isError: true, message: "Senha atual está incorreta!"})
      } else if(err.code === "auth/weak-password") {
        setError({isError: true, message: "Senha deve ter no mínimo 6 caracteres!"})
      } else {
        setError({isError: true, message: "Ocorreu um erro, tente novamente mais tarde"})
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações do usuário</Text>

      <TextInput
        value={user.email}
        editable={false}
        selectTextOnFocus={false}
        style={[styles.input, styles.inputDisabled]}
      />
      <TextInput
        value={name}
        placeholder="Nome"
        type="text"
        onChangeText={(text) => setName(text)}
        style={[styles.input, !editable && styles.inputDisabled]}
        editable={editable}
      />
      {changePassword && (
        <>
          <TextInput
            placeholder='Senha atual'
            secureTextEntry
            type='text'
            value={oldPassword}
            onChangeText={(text) => setOldPassword(text)}
            style={styles.input}
            editable={editable}
          />

          <TextInput
            placeholder='Nova senha'
            secureTextEntry
            type='text'
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
            style={styles.input}
            editable={editable}
          />
        </>
      )}
      
      {error.isError &&
        <Text style={styles.textError}>
          <Feather name="alert-triangle" size={16} /> {error.message}
        </Text>
      }

      <View style={styles.containerCheckbox}>
        <TouchableOpacity
          style={[styles.checkboxBase, changePassword && styles.checkboxChecked]}
          onPress={() => setChangePassword(!changePassword)}
        >
          {changePassword && <Ionicons name="checkmark" size={16} color="white" />}
        </TouchableOpacity>
        <Text style={styles.checkboxText}>Trocar senha?</Text>
      </View>

      {!editable ? (
        <>
          <CustomButton onPress={() => setEditable(true)} color="purple">
            Editar
          </CustomButton>
          <CustomButton
            onPress={() => navigation.goBack()}
            color="gray"
            newStyle={styles.marginTopBtn}
          >
            Voltar
          </CustomButton>
        </>
      ) : (
        <>
          <CustomButton
            onPress={changeUserData} 
            color="green"
            loading={loading}
          >
            Salvar
          </CustomButton>
          <CustomButton
            onPress={() => setEditable(false)}
            color="gray"
            newStyle={styles.marginTopBtn}
          >
            Cancelar
          </CustomButton>
        </>

      )}
    </View>
  )
}

export default InfoUser