import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, KeyboardAvoidingView, Image } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import CustomButton from '../../../components/CustomButton'
import Timer from '../../../components/Timer'
import ordersData from './ordersData'
import firebase from '../../../config/firebaseConfig'
import styles from './style'
import DetailsGame from '../../../components/ContainerGame/DetailsGame'

const Orders1 = ({ navigation, route }) => {
  const user = firebase.auth().currentUser;
  const database = firebase.firestore();

  const qtdOrders = route.params.options.qtdOrders

  const [step, setStep] = useState(1)
  const [ordersGame, setOrdersGame] = useState([])
  const [result, setResult] = useState(0)
  const [loadingResult, setLoadingResult] = useState(false)

  const getWords = (qtd) => {
    let arr = [[], []]
    let arrObj = []
    while(qtd !== 0) {

      const n1 = Math.floor(Math.random() * ordersData.orders.length)
      const n2 = Math.floor(Math.random() * ordersData.clients.length)

      if (arr[0].indexOf(ordersData.orders[n1].toLowerCase()) === -1 &&
      arr[1].indexOf(ordersData.clients[n2]) === -1) {

        arr[0].push(ordersData.orders[n1].toLowerCase())
        arr[1].push(ordersData.clients[n2])

        arrObj.push({ 
          id: (qtd - 1).toString(),
          avatar: ordersData.clients[n2], 
          order: ordersData.orders[n1]
        })
        qtd--
      }
    }
    setOrdersGame(arrObj)
  }

  const checkResult = async (answers) => {
    setLoadingResult(true)

    const qtdHits = ordersGame.reduce((result, order) => {

      if (answers[order.id] && answers[order.id].trim().toLowerCase() === order.order.toLowerCase()) 
        return result + 1
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

  useEffect(() => getWords(qtdOrders), [])

  const Game = () => {
    return (
      <View style={styles.containerGame}>
        <Text style={styles.title}>Pedidos</Text>
        <ScrollView style={styles.listWords}>
          {ordersGame.map((order, index) => (
            <View key={`order-${index}`} style={styles.containerOrder}>
              <Image source={order.avatar} style={styles.avatarOrder} />
              <Text style={styles.order}>{order.order}</Text>
            </View>
          ))}
        </ScrollView>
        <View>
          <Timer minutes={0} seconds={20} nextStep={() => setStep(3)} />
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
    const [answers, setAnswers] = useState({})

    return (
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        
        <Text style={styles.details}>Escreva abaixo os pedidos de cada cliente.</Text>

        <ScrollView style={styles.listWords}>
          {ordersGame.map((order, index) => (
            <View key={`order-${index}`} style={styles.containerAnswer}>
              <Image source={order.avatar} style={styles.avatarOrder} />
              <TextInput 
                multiline={true}
                numberOfLines={2}
                type='text'
                value={answers[order.id]}
                onChangeText={(text) => setAnswers({ ...answers, [order.id]: text })}
                style={styles.inputAnswers}
              />
            </View>
          ))}
        </ScrollView>

        <CustomButton
          loading={loadingResult}
          onPress={() => checkResult(answers)}
          color="green"
          icon={<FontAwesome5 name="arrow-right" size={20} color="white" />}
          newStyle={styles.btnMarginVertical}
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
          <Text style={styles.details}>A quantidade de pedidos dos clientes acertados foi de: </Text>
          <Text style={styles.result}>{result}/{qtdOrders}</Text>
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
        <DetailsGame title="Pedidos 01" nextStep={setStep}>
          Imagine que você é um garçom. Veja os clientes a seguir e decore os pedidos de cada um.

          Em seguida, escreva esses pedidos de acordo com que cada cliente pediu.
        </DetailsGame>
      )}
      {step === 2 && <Game />}
      {step === 3 && <Answers />}
      {step === 4 && <ResultGame />}
    </>
  )
}

export default Orders1