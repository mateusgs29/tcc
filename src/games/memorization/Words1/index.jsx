import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import CustomButton from '../../../components/CustomButton'
import Timer from '../../../components/Timer'
import words from './wordsData'
import firebase from '../../../config/firebaseConfig'
import styles from './style'
import DetailsGame from '../../../components/ContainerGame/DetailsGame'

const Words1 = ({ navigation, route }) => {
  const user = firebase.auth().currentUser;
  const database = firebase.firestore();

  const qtdWords = route.params.options.qtdWords

  const [step, setStep] = useState(1)
  const [wordsGame, setWordsGame] = useState([])
  const [result, setResult] = useState(0)
  const [loadingResult, setLoadingResult] = useState(false)

  const getWords = (qtd) => {
    let arr = []
    while(qtd !== 0) {
      const number = Math.floor(Math.random() * words.length)
      if (arr.indexOf(words[number].toLowerCase()) === -1) {
        arr.push(words[number].toLowerCase())
        qtd--
      }
    }
    setWordsGame(arr)
  }

  const checkResult = async (answers) => {
    setLoadingResult(true)

    const arr = answers.split(',')
    const qtdHits = arr.reduce((result, word) => {
      if (wordsGame.indexOf(word.trim().toLowerCase()) !== -1) return result + 1
      return result
    }, 0)
  
    setResult(qtdHits)
  
    database.collection(user.uid).doc("games")
      .collection("memorization").doc(route.params.doc)
      .set({hits: qtdHits})
      .then(() => setStep(4))
      .catch(console.log)
      .finally(() => setLoadingResult(false)) 
  }

  useEffect(() => getWords(qtdWords), [])

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
            Pr??ximo
          </CustomButton>
        </View>
      </View>
    )
  }

  const Answers = () => {
    const [answers, setAnswers] = useState("")

    return (
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        
        <Text style={styles.details}>Escreva abaixo as palavras que conseguiu memorizar separando-as com v??rgula.</Text>
        <TextInput 
          multiline={true}
          numberOfLines={5}
          type='text'
          value={answers}
          onChangeText={(text) => setAnswers(text)}
          style={styles.inputAnswers}
        />
        <CustomButton
          loading={loadingResult}
          onPress={() => checkResult(answers)}
          color="green"
          icon={<FontAwesome5 name="arrow-right" size={20} color="white" />}
          newStyle={styles.btnMarginTop}
        >
          Resultado
        </CustomButton>
      </KeyboardAvoidingView>
    )
  }
  
  const ResultGame = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Resultado</Text>
        <View>
          <Text style={styles.details}>A quantidade de palavras que voc?? acertou foi: </Text>
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
        <DetailsGame title="Palavras 01" nextStep={setStep}>
          Leia as palavras a seguir com aten????o e tente memoriz??-las no tempo de 1 minuto, na ordem que preferir.
          
          Procure utilizar alguma estrat??gia de memoriza????o. Feito isso, escreva o m??ximo de palavras que conseguir lembrar.
        </DetailsGame>
      )}
      {step === 2 && <Game />}
      {step === 3 && <Answers />}
      {step === 4 && <ResultGame />}
    </>
  )
}

export default Words1