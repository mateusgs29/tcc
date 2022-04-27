import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import CustomButton from '../../../components/CustomButton'
import Timer from '../../../components/Timer'
import alphabetData from './alphabetData'
import firebase from '../../../config/firebaseConfig'
import styles from './style'
import DetailsGame from '../../../components/ContainerGame/DetailsGame'

const Words1 = ({ navigation, route }) => {
  const user = firebase.auth().currentUser;
  const database = firebase.firestore();

  const qtdWords = route.params.options.qtdWords

  const [step, setStep] = useState(1)
  const [result, setResult] = useState(0)
  const [loadingResult, setLoadingResult] = useState(false)

  // const checkResult = async (answers) => {
  //   setLoadingResult(true)

  //   const arr = answers.split(',')
  //   const qtdHits = arr.reduce((result, word) => {
  //     if (wordsGame.indexOf(word.trim().toLowerCase()) !== -1) return result+1
  //     return result
  //   }, 0)
  
  //   setResult(qtdHits)
  
  //   database.collection(user.uid).doc("games")
  //     .collection("translate").doc(route.params.doc)
  //     .set({ hits: qtdHits })
  //     .then(() => setStep(4))
  //     .catch(console.log)
  //     .finally(() => setLoadingResult(false)) 
  // }

  const Game = () => {
    return (
      <View style={styles.containerGame}>
        <View style={styles.alphabet}>
          {Object.keys(alphabetData).map((key, index) => (
            <View key={`char-${index}`} style={styles.containerLetter}> 
              {alphabetData[key]}
              <Text style={styles.letter}>{key}</Text>
            </View>
          ))}
        </View>
        <ScrollView style={styles.listWords}>
          <Text>TESTE</Text>
        </ScrollView>
        <View>
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
        <DetailsGame title="Palavras" nextStep={setStep}>
          Veja a tabela a seguir com imagens relacionadas as letras. 
          Depois traduza a sequência de imagens em palavras, substituindo a imagem por sua respectiva letra correspondente.
        </DetailsGame>
      )}
      {step === 2 && <Game />}
      {/* {step === 3 && <ResultGame />} */}
    </>
  )
}

export default Words1