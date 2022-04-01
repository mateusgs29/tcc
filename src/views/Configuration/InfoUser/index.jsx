import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import firebase from '../../../config/firebaseConfig'

const InfoUser = ({ navigation }) => {
  const user = firebase.auth().currentUser;

  const [name, setName] = useState(user.displayName)
  const [password, setPassword] = useState("")
  const [changePassword, setChangePassword] = useState(false)
  const [editable, setEditable] = useState(false)

  const setDisplayNameFirebase = () => {
    user.updateProfile({
      displayName: name
    }).then(() => toggleModal("modalName"))
      .catch((err) => console.log(err))
  }

  return (
    <View>
      <Text>Informações do usuário</Text>
      <TextInput
        value={user.email}
        editable={false}
        selectTextOnFocus={false}
      />
      <TextInput
        value={name}
        placeholder="Nome"
        type="text"
        onChangeText={(text) => setName(text)}
      />
      {changePassword && (
        <>
          <TextInput
            placeholder='Nova senha'
            secureTextEntry
            type='text'
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
    
          <TextInput
            placeholder='Confirme a nova senha'
            secureTextEntry
            type='text'
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </>
      )}

      {!editable ? (
        <TouchableOpacity onPress={() => setEditable(true)}>
          <Text>Editar</Text>
        </TouchableOpacity>
      ) : (
        <View>
          <TouchableOpacity>
            <Text>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setEditable(false)}>
            <Text>Cancelar</Text>
          </TouchableOpacity>
        </View>

      )}
    </View>
  )
}

export default InfoUser