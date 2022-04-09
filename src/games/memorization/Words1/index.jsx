import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import CustomButton from '../../../components/CustomButton';
import Timer from '../../../components/Timer';
import words from './wordsData';

import styles from './style'

const Words1 = () => {
  const [step, setStep] = useState(1);
  const [wordsGame, setWordsGame] = useState([])

  const getWords = (qtd) => {
    let arr = []
    while(qtd !== 0) {
      const number = Math.floor(Math.random() * words.length)
      if (arr.indexOf(words[number]) === -1) {
        arr.push(words[number])
        qtd--
      }
    }
    setWordsGame(arr)
  }

  useEffect(() => getWords(10), [])

  const DetailsGame = () => {
    return (
      <View style={styles.containerDetails}>
        <Text style={styles.title}>Palavras 01</Text>
        <View>
          <Text style={styles.details}>
            Leia as palavras a seguir com atenção e tente memorizá-las no tempo de 1 minuto, na ordem que preferir. 
          </Text>
          <Text style={styles.details}>
            Procure utilizar alguma estratégia de memorização. Feito isso, escreva o máximo de palavras que conseguir lembrar.
          </Text>
        </View>
        <CustomButton
          onPress={() => setStep(2)}
          color="gray"
          icon={<FontAwesome5 name="arrow-right" size={20} color="black" />}
        >
          Próximo
        </CustomButton>
      </View>
    )
  }

  const Game = () => {
    return (
      <View style={styles.containerGame}>
        <Text style={styles.title}>Palavras</Text>
        <ScrollView style={styles.listWords}>
          {wordsGame.map(word => (
            <Text key={word} style={styles.word}>{word}</Text>
          ))}
        </ScrollView>
        <View>
          <Timer nextStep={() => setStep(3)} />
          <CustomButton
            onPress={() => setStep(3)}
            color="gray"
            icon={<FontAwesome5 name="arrow-right" size={20} color="black" />}
            newStyle={styles.btnMarginTop}
          >
            Próximo
          </CustomButton>
        </View>
      </View>
    )
  }

  const Answers = () => {
    return (
      <View>
        <Text>TESTE</Text>
      </View>
    )
  }

  return (
    <>
      {step === 1 && <DetailsGame />}
      {step === 2 && <Game />}
      {step === 3 && <Answers />}
    </>
  )
}

export default Words1