import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { ScrollView, SafeAreaView, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import firebase from '../../config/firebaseConfig'
import styles from './style'

const CustomDrawer = (props) => {
  const user = firebase.auth().currentUser;

  const logoutFirebase = () => {
    firebase.auth().signOut()
      .then(() => {
        props.navigation.navigate("Login")
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profile}>
        <Text style={styles.userName}>{user.displayName}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Text onPress={logoutFirebase} style={styles.textLogout}>
        Sair <Ionicons name="exit-outline" size={16} color="black" />
      </Text>
    </SafeAreaView>
    
  )
}

export default CustomDrawer