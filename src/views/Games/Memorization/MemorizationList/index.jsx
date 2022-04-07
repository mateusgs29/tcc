import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import memorizationGamesData from '../MemorizationInfo'
import styles from './style'

const MemorizationList = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Memorização</Text>
      {memorizationGamesData.map(game => {
        let difficult = ''
        if (game.difficult === 'easy') difficult = 'fácil'
        if (game.difficult === 'medium') difficult = 'médio'
        if (game.difficult === 'hard') difficult = 'difícil'

        return <TouchableOpacity 
          key={`Game-${game.name}`}
          onPress={() => navigation.navigate(game.name)} 
          style={styles.game}
        >
          <Text style={styles.gameName}>{game.name}</Text>
          <View>
            <Text style={[styles.difficult, styles[`${game.difficult}Difficult`]]}>
              {difficult}
            </Text>
          </View>
        </TouchableOpacity>
      })}
    </ScrollView>
  )
}

export default MemorizationList