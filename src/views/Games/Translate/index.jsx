import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import translateGamesData from './TranslateInfo'
import TranslateList from './TranslateList'

const Stack = createNativeStackNavigator()

const Translate = () => {
  return (
    <Stack.Navigator initialRouteName='TranslateList' screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="TranslateList"
        component={TranslateList}
      />
      {translateGamesData.map(game => (
        <Stack.Screen 
          key={`Game-${game.name}`}
          name={game.name}
          component={game.component}
        />
      ))}
    </Stack.Navigator>
  )
}

export default Translate