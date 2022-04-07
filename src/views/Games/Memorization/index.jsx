import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import memorizationGamesData from './MemorizationInfo'
import MemorizationList from './MemorizationList'

const Stack = createNativeStackNavigator()

const Memorization = () => {
  return (
    <Stack.Navigator initialRouteName='MemorizationList' screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="MemorizationList"
        component={MemorizationList}
      />
      {memorizationGamesData.map(game => (
        <Stack.Screen 
          key={`Game-${game.name}`}
          name={game.name}
          component={game.component}
        />
      ))}
    </Stack.Navigator>
  )
}

export default Memorization