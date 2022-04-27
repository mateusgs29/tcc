import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'

const Games = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o tipo de jogo</Text>
      <TouchableOpacity 
        onPress={() => navigation.navigate("Memorization")}
        style={styles.optionGame}
      >
        <Text style={styles.textOptionGame}>Memorização</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate("Translate")}
        style={styles.optionGame}
      >
        <Text style={styles.textOptionGame}>Tradução de imagens</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Games