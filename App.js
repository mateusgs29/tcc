import 'react-native-gesture-handler'
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import firebase from './src/config/firebaseConfig'
import { FontAwesome, Foundation } from '@expo/vector-icons'; 

import Login from './src/views/Login'
import Register from './src/views/Register'
import Configuration from './src/views/Configuration'
import CustomDrawer from './src/components/CustomDrawer'
import Info from './src/views/Info'
import Games from './src/views/Games'
import { colors } from './styleGlobal'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const PrivateRoutes = () => {
  return (
    <Drawer.Navigator 
      initialRouteName='Jogos' 
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveTintColor: colors.purpleSecondary,
        drawerInactiveTintColor: colors.blackLight,
        drawerLabelStyle: {marginLeft: -20}
      }}
    >
      <Drawer.Screen 
        name="Jogos" 
        component={Games} 
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome name="gamepad" size={22} color={color} />
          ),
          drawerLabelStyle: {marginLeft: -23}
        }}
      />
      <Drawer.Screen 
        name="Sobre o Alzheimer" 
        component={Info} 
        options={{
          drawerIcon: ({color}) => (
            <Foundation name="info" size={24} color={color} />
            )
          }}
      />
      <Drawer.Screen 
        name="Configurações" 
        component={Configuration} 
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome name="gear" size={22} color={color} />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name="PrivateRoutes"
          component={PrivateRoutes}
          options={{headerShown: false}}
        />
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
    </NavigationContainer>
  );
}
