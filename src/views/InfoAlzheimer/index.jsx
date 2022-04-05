import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Collapse, CollapseBody, CollapseHeader} from 'accordion-collapse-react-native'
import { MaterialIcons } from '@expo/vector-icons'
import styles from './style'

const Info = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Definição</Text>
      <Text style={styles.text}>
        O Alzheimer é uma doença neurodegenerativa, ou seja, ela afeta o cérebro, fazendo com que o paciente perca neurônios ao longo do tempo. Dentre as demências desse tipo é a mais comum, atingindo milhões de pessoas de idade avançada ao redor do mundo.
      </Text>
      
      <Collapse>
        <CollapseHeader>
          <View style={styles.collapse}>
            <Text style={styles.title}>Sintomas</Text>
            <MaterialIcons name="arrow-drop-down" size={24} color="black" />
          </View>
        </CollapseHeader>
        <CollapseBody style={styles.collapseBody}>
          <Text style={styles.subtitle}>Estágio inicial</Text>
          <Text style={styles.text}>
            Sintomas leves, como perda de memória recente, alterações de comportamento e falta de orientação do espaço e do tempo.
          </Text>

          <Text style={styles.subtitle}>Estágio intermediário</Text>
          <Text style={styles.text}>
            Sintomas pioram, principalmente em relação ao esquecimento, além de atingir partes da cognição, o que causa danos em atividades instrumentais e operativas.
          </Text>
          
          <Text style={styles.subtitle}>Estágio final</Text>
          <Text style={styles.text}>
            A memória se encontra em um estado crítico, por conta da danificação dos neurônios. A comunicação se torna algo quase impossível e há a necessidade de um acompanhante 24 horas por dia.
          </Text>
        </CollapseBody>
      </Collapse>
      
      <Collapse>
        <CollapseHeader>
          <View style={styles.collapse}>
            <Text style={styles.title}>Tratamento</Text>
            <MaterialIcons name="arrow-drop-down" size={24} color="black" />
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text style={styles.text}>
            Nos dias atuais, o Alzheimer não tem cura, entretanto existem meios para retardar o início ou o desenvolvimento dessa doença. 
          </Text>
          <Text style={styles.text}>
            A psicoterapia é algo fundamental para quem foi diagnosticado, porque ela é a terapia responsável por cuidar do cérebro, que é a parte afetada por essa demência. 
          </Text>
          <Text style={styles.text}>
            Atividades intelectuais, como os jogos, também acabam sendo uma ótima ferramenta de prevenção, já que com eles o paciente consegue estimular e fortalecer seus neurônios.
          </Text>
        </CollapseBody>
      </Collapse>
    </ScrollView>
  )
}

export default Info