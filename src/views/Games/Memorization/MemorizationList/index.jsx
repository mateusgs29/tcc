import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import memorizationGamesData from '../MemorizationInfo'
import firebase from '../../../../config/firebaseConfig'
import styles from './style'

const MemorizationList = ({ navigation }) => {
  const user = firebase.auth().currentUser;
  const database = firebase.firestore() 
  const collection = database.collection(user.uid).doc("games").collection("memorization")

  const [hitsGames, setHitsGames] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const difficult = {
    easy: "fácil",
    medium: "médio",
    hard: "difícil"
  }

  const getHits = () => {
    collection.get()
      .then((querySnapshot) => {
        const objTemp = {}
        querySnapshot.forEach(doc => {
          objTemp[doc.id] = doc.data().hits
        })
        setHitsGames({ ...objTemp })
      })
      .catch(console.log)
      .finally(() => setIsLoading(false))
  }

  useEffect(getHits, [])

  if (isLoading) return (
    <View style={styles.containerLoading}>
      <ActivityIndicator size="large" color="black" />
    </View>
  )

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Memorização</Text>
      {memorizationGamesData.map(game => {
  
        return <TouchableOpacity 
          key={`Game-${game.name}`}
          onPress={() => navigation.navigate(game.name, { doc: game.cod, options: game.options })} 
          style={styles.game}
        >
          <Text style={styles.gameName}>{game.name}</Text>
          <View style={styles.gameDetails}>
            <Text style={[styles.difficult, styles[`${game.difficult}Difficult`]]}>
              {difficult[game.difficult]}
            </Text>
            {!!hitsGames[game.cod] && 
              <Text style={styles.gameResult}>
                Pontuação: {hitsGames[game.cod]}/{game.qtdResult}
              </Text>
            }
          </View>
        </TouchableOpacity>
      })}
    </ScrollView>
  )
}

export default MemorizationList