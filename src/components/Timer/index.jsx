import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import styles from './style'

const Timer = ({minutes = 1, seconds = 0, nextStep}) => {
  const [[mins, secs], setTime] = useState([minutes, seconds])


  const tick = () => {
    if (mins === 0 && secs === 0) {
      nextStep()
    } else if (secs === 0) {
      setTime([mins - 1, 59])
    } else {
      setTime([mins, secs - 1])
    }
  }

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000)
    return () => clearInterval(timerId)
  })

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}
      </Text>
    </View>  
  )
}

export default Timer