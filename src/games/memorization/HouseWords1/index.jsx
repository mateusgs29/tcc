import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import CustomButton from '../../../components/CustomButton'
import Timer from '../../../components/Timer'
import houseWords from './houseWordsData'
import firebase from '../../../config/firebaseConfig'
import styles from './style'
import DetailsGame from '../../../components/ContainerGame/DetailsGame'

const HouseWords1 = ({ navigation, route }) => {
  const user = firebase.auth().currentUser;
  const database = firebase.firestore();

  const qtdWordsGroup = route.params.options.qtdWordsGroup

  const [step, setStep] = useState(1)
  const [wordsKitchen, setWordsKitchen] = useState([])
  const [wordsBathroom, setWordsBathroom] = useState([])
  const [wordsBedroom, setWordsBedroom] = useState([])
  const [result, setResult] = useState({})
  const [loadingResult, setLoadingResult] = useState(false)

  const getWords = (qtd) => {
    let objWords = {kitchen: [], bathroom: [], bedroom: []}
    let qtdWord = qtd
    for (const key of Object.keys(houseWords)) {
      while(qtdWord !== 0) {
        const number = Math.floor(Math.random() * houseWords[key].length)
        if (objWords[key].indexOf(houseWords[key][number].toLowerCase()) === -1) {
          objWords[key].push(houseWords[key][number].toLowerCase())
          qtdWord--
        }
      }
      qtdWord = qtd
    }
    setWordsKitchen(objWords.kitchen)
    setWordsBathroom(objWords.bathroom)
    setWordsBedroom(objWords.bedroom)
  }

  const checkResult = async (answersKitchen, answersBathroom, answersBedroom) => {
    setLoadingResult(true)

    const hitsKitchen = getQtdHits(answersKitchen, wordsKitchen)
    const hitsBathroom = getQtdHits(answersBathroom, wordsBathroom)
    const hitsBedroom = getQtdHits(answersBedroom, wordsBedroom)
    setResult({ kitchen: hitsKitchen, bathroom: hitsBathroom, bedroom: hitsBedroom })
  
    database.collection(user.uid).doc("games")
      .collection("memorization").doc(route.params.doc)
      .set({hits: (hitsKitchen + hitsBathroom + hitsBedroom)})
      .then(() => setStep(4))
      .catch(console.log)
      .finally(() => setLoadingResult(false)) 
  }

  const getQtdHits = (answers, words) => {
    const arr = answers.split(',')
    const qtdHits = arr.reduce((result, word) => {
      if (words.indexOf(word.trim().toLowerCase()) !== -1) return result + 1
      return result
    }, 0)
    return qtdHits
  }

  useEffect(() => getWords(qtdWordsGroup), [])

  const Game = () => {
    
    const randomArr = (arr) => {
      arr.sort(() => Math.random() - 0.5)
      return arr
    }
    
    const wordsGame = randomArr(wordsKitchen.concat(wordsBathroom.concat(wordsBedroom)))

    return (
      <View style={styles.containerGame}>
        <Text style={styles.title}>Palavras</Text>
        <ScrollView style={styles.listWords}>
          {wordsGame.map(word => (
            <Text key={word} style={styles.word}>{word}</Text>
          ))}
        </ScrollView>
        <View>
          <Timer minutes={0} seconds={40} nextStep={() => setStep(3)} />
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
    const [answersKitchen, setAnswersKitchen] = useState("")
    const [answersBathroom, setAnswersBathroom] = useState("")
    const [answersBedroom, setAnswersBedroom] = useState("")

    return (
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        
        <Text style={styles.details}>
          Escreva abaixo as palavras que conseguiu memorizar, colocando-as nos seus determinados grupos e separando-as com vírgula.
        </Text>
        <View style={styles.containerInput}>
          <Text style={styles.label}>Cozinha:</Text>
          <TextInput 
            multiline={true}
            numberOfLines={3}
            type='text'
            value={answersKitchen}
            onChangeText={(text) => setAnswersKitchen(text)}
            style={styles.inputAnswers}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.label}>Banheiro:</Text>
          <TextInput 
            multiline={true}
            numberOfLines={3}
            type='text'
            value={answersBathroom}
            onChangeText={(text) => setAnswersBathroom(text)}
            style={styles.inputAnswers}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.label}>Quarto:</Text>
          <TextInput 
            multiline={true}
            numberOfLines={3}
            type='text'
            value={answersBedroom}
            onChangeText={(text) => setAnswersBedroom(text)}
            style={styles.inputAnswers}
          />
        </View>
        <CustomButton
          loading={loadingResult}
          onPress={() => checkResult(answersKitchen, answersBathroom, answersBedroom)}
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
        <Text style={styles.result}>Cozinha: {result.kitchen}/{qtdWordsGroup}</Text>
        <Text style={styles.result}>Banheiro: {result.bathroom}/{qtdWordsGroup}</Text>
        <Text style={styles.result}>Quarto: {result.bedroom}/{qtdWordsGroup}</Text>
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
        <DetailsGame title="Palavras da Casa 01" nextStep={setStep}>
          Observe as palavras a seguir, todas são relacionadas a casa. 
          Tente memorizá-las no tempo de 40 segundos, na ordem que preferir.

          Após isso,  escreva os itens nos respectivos grupos, de acordo com o local em que ficam situados na casa.
        </DetailsGame>
      )}
      {step === 2 && <Game />}
      {step === 3 && <Answers />}
      {step === 4 && <ResultGame />}
    </>
  )
}

export default HouseWords1