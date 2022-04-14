import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import CustomButton from '../../CustomButton'
import styles from '../style'

const DetailsGame = ({ title, children, nextStep }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>
        <Text style={styles.details}>
          {children}
        </Text>
      </View>
      <CustomButton
        onPress={() => nextStep(2)}
        color="gray"
        icon={<FontAwesome5 name="arrow-right" size={20} color="black" />}
      >
        Próximo
      </CustomButton>
    </View>
  )
}

export default DetailsGame