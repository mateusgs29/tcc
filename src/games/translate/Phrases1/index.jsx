import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import CustomButton from '../../../components/CustomButton'
import Timer from '../../../components/Timer'
import { alphabet, phrases } from './gameData'
import firebase from '../../../config/firebaseConfig'
import styles from './style'
import DetailsGame from '../../../components/ContainerGame/DetailsGame'

const Phrases1 = ({ navigation, route }) => {
  const user = firebase.auth().currentUser;
  const database = firebase.firestore();

  const qtdPhrases = route.params.options.qtdPhrases

  const [step, setStep] = useState(1)
  const [phrasesCode, setPhrasesCode] = useState([])
  const [result, setResult] = useState(0)
  const [loadingResult, setLoadingResult] = useState(false)
  
  const getPhrases = (qtd) => {
    let arr = []
    phrases.sort(() => Math.random() - 0.5)
    
    for (let i = 0; i < qtd; i++) {
      const code = phrases[i].split("").map(l => {
        let letter = l.toUpperCase()
        if (letter === "Ó") letter = "O"
        if (letter === "Ã") letter = "A"
        
        return alphabet[letter] ? alphabet[letter] : " " 
      })
      
      arr.push({ phrase: [phrases[i]], code })
    }
    setPhrasesCode(arr)
  }

  // const checkResult = async (answers) => {
  //   setLoadingResult(true)

  //   const qtdHits = Object.keys(answers).reduce((result, word) => {
  //     if (word.toUpperCase() === answers[word].toUpperCase()) return result + 1
  //   }, 0)

  //   setResult(qtdHits)
  
  //   database.collection(user.uid).doc("games")
  //     .collection("translate").doc(route.params.doc)
  //     .set({ hits: qtdHits })
  //     .then(() => setStep(3))
  //     .catch(console.log)
  //     .finally(() => setLoadingResult(false)) 
  // }
  
  useEffect(() => getPhrases(qtdPhrases), [])

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
          {phrasesCode.map((phraseCode, index) => (
            <View key={`phrase-${index}`} style={styles.containerWord}>
              <View style={styles.code}>
                {phraseCode.code.map(code => {
                  if (code === " ") return <Text>      </Text>
                  return code
                })}
              </View>
              <TextInput 
                multiline={true}
                numberOfLines={4}
                type="text"
                value={answers[index]}
                onChangeText={text => setAnswers({ ...answers, [index]: text })}
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

  // const ResultGame = () => {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.title}>Resultado</Text>
  //       <View>
  //         <Text style={styles.details}>A quantidade de palavras que você acertou foi: </Text>
  //         <Text style={styles.result}>{result}/{qtdWords}</Text>
  //       </View>
  //       <CustomButton
  //         onPress={() => {
  //           navigation.navigate("Games")
  //         }}
  //         color="gray"
  //         newStyle={styles.btnMarginTop}
  //       >
  //         Voltar para lista de jogos
  //       </CustomButton>
  //     </View>
  //   )
  // }

  return (
    <>
      {step === 1 && (
        <DetailsGame title="Frases" nextStep={setStep}>
          Veja a tabela a seguir com imagens relacionadas as letras. 
          Depois traduza os textos utilizando essas imagens do quadro como referência.
        </DetailsGame>
      )}
      {step === 2 && <Game />}
      {/* {step === 3 && <ResultGame />} */}
    </>
  )
}

export default Phrases1