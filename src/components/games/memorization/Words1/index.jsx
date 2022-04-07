import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import CustomButton from '../../../CustomButton';
import styles from './style'

const Words1 = () => {
  const [step, setStep] = useState(1);

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
      <View>
        <Text>GAME</Text>
        <CustomButton
          onPress={() => setStep(3)}
          color="gray"
          icon={<FontAwesome5 name="arrow-right" size={20} color="black" />}
        >
          Próximo
        </CustomButton>
      </View>
    )
  }

  return (
    <>
      {step === 1 && <DetailsGame />}
      {step === 2 && <Game />}
    </>
  )
}

export default Words1