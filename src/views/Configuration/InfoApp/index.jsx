import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './style'

const InfoApp = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Informações sobre o aplicativo</Text>
      <Text style={styles.text}>
        Esse aplicativo foi desenvolvido por Mateus Gomes de Souza como projeto para a matéria de trabalho de conclusão de curso apresentado ao Instituto Federal de Educação, Ciência e Tecnologia Baiano - Campus Guanambi para obtenção do título de Tecnólogo em Análise e Desenvolvimento de Sistemas.
      </Text>
      <Text style={styles.text}>
        Ele possui o objetivo de ajudar na prevenção da doença do Alzheimer através de jogos voltados ao fortalecimento cerebral.
      </Text>
    </ScrollView>
  )
}

export default InfoApp