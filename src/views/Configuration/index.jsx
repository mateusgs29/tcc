import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'

const Configuration = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => navigation.navigate("InfoUser")}
        style={styles.btn}
      >
        <Text style={styles.textBtn}>Informações sobre o usuário</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate("InfoApp")}
        style={styles.btn}
      >
        <Text style={styles.textBtn}>Sobre o aplicativo</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate("DeleteAccount")}
        style={styles.btn}
      >
        <Text style={styles.textBtnDelete}>Deletar conta</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Configuration