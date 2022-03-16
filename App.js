import 'react-native-gesture-handler'
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import firebase from './src/config/firebaseConfig'
import AppLoading from 'expo-app-loading'

import Login from './src/views/Login'
import Register from './src/views/Register'
import Configuration from './src/views/Configuration'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

export default function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [isChecking, setIsChecking] = useState(true);

  const userIsLogged = async () => {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) setIsLogged(true)
      else setIsLogged(false)
    })
  }

  if(isChecking) {
    return (
      <AppLoading 
        startAsync={() => userIsLogged()}
        onFinish={() => setIsChecking(false)}
        onError={console.warn}
      />
    )
  }

  return (
    <NavigationContainer>
      {isLogged ? (
        <Drawer.Navigator initialRouteName='Configuration'>
          <Drawer.Screen name="Configuration" component={Configuration} />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen 
            name='Login'
            component={Login}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name='Register'
            component={Register}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
