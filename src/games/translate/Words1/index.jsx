import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import CustomButton from '../../../components/CustomButton'
import { alphabet, words } from './gameData'
import firebase from '../../../config/firebaseConfig'
import styles from './style'
import DetailsGame from '../../../components/ContainerGame/DetailsGame'

const Words1 = ({ navigation, route }) => {
  const user = firebase.auth().currentUser;
  const database = firebase.firestore();

  const qtdWords = route.params.options.qtdWords

  const [step, setStep] = useState(1)
  const [wordsCode, setWordsCode] = useState({})
  const [result, setResult] = useState(0)
  const [loadingResult, setLoadingResult] = useState(false)
  
  const getWords = (qtd) => {
    let objTemp = {}
    words.sort(() => Math.random() - 0.5)
    
    for (let i = 0; i < qtd; i++) {
      const code = words[i].split("").map(letter => alphabet[letter.toUpperCase()])
      objTemp = {...objTemp, [words[i]]: code }
    }
    setWordsCode(objTemp)
  }

  const checkResult = async (answers) => {
    setLoadingResult(true)

    const qtdHits = Object.keys(answers).reduce((result, word) => {
      if (word.toUpperCase() === answers[word].trim().toUpperCase()) return result + 1
    }, 0)

    setResult(qtdHits)
  
    database.collection(user.uid).doc("games")
      .collection("translate").doc(route.params.doc)
      .set({ hits: qtdHits })
      .then(() => setStep(3))
      .catch(console.log)
      .finally(() => setLoadingResult(false)) 
  }
  
  useEffect(() => getWords(qtdWords), [])

  const Game = () => {
    const [answers, setAnswers] = useState({})

    return (
      <View style={styles.containerGame}>
        <View style={styles.alphabet}>
          {Object.keys(alphabet).map((key, index) => (
            <View key={`char-${index}`} style={styles.containerLetter}> 
              {alphabet[key]}
              <Text style={styles.letter}>{key}</Text>
            </View>
          ))}
        </View>
        <ScrollView style={styles.listWords}>
          {Object.keys(wordsCode).map((word, index) => (
            <View key={`word-${index}`} style={styles.containerWord}>
              <View style={styles.code}>
                {wordsCode[word].map(code => code)}
              </View>
              <TextInput 
                type="text"
                value={answers[word]}
                onChangeText={text => setAnswers({ ...answers, [word]: text })}
                style={styles.inputAnswers}
              />
            </View>
          ))}
          <View style={styles.containerBtn}>
            <CustomButton
              onPress={() => checkResult(answers)}
              color="green"
              icon={<FontAwesome5 name="arrow-right" size={20} color="white" />}
              newStyle={styles.btnMarginTop}
              >
              Resultado
            </CustomButton>
          </View>
        </ScrollView>
      </View>
    )
  }

  const ResultGame = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Resultado</Text>
        <View>
          <Text style={styles.details}>A quantidade de palavras que você acertou foi: </Text>
          <Text style={styles.result}>{result}/{qtdWords}</Text>
        </View>
        <CustomButton
          onPress={() => {
            navigation.navigate("Games")
          }}
          color="gray"
          newStyle={styles.btnMarginTop}
        >
          Voltar para lista de jogos
        </CustomButton>
      </View>
    )
  }

  return (
    <>
      {step === 1 && (
        <DetailsGame title="Palavras" nextStep={setStep}>
          Veja a tabela a seguir com imagens relacionadas as letras. 
          Depois traduza a sequência de imagens em palavras, substituindo a imagem por sua respectiva letra correspondente.
        </DetailsGame>
      )}
      {step === 2 && <Game />}
      {step === 3 && <ResultGame />}
    </>
  )
}

export default Words1