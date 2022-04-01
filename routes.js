import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { FontAwesome, Foundation } from '@expo/vector-icons'; 
import { colors } from './styleGlobal'

import Login from './src/views/Login'
import Register from './src/views/Register'
import Configuration from './src/views/Configuration'
import CustomDrawer from './src/components/CustomDrawer'
import Info from './src/views/InfoAlzheimer'
import Games from './src/views/Games'

import InfoUser from './src/views/Configuration/InfoUser';
import InfoApp from './src/views/Configuration/InfoApp';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const ConfigurationNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Configuração' screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="Configuration"
        component={Configuration}
      />
      <Stack.Screen 
        name="InfoUser"
        component={InfoUser}
        options={{ presentation: "modal" }}
        
      />
      <Stack.Screen 
        name="InfoApp"
        component={InfoApp}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  )
}

const PrivateRoutes = () => {
  return (
    <Drawer.Navigator 
      initialRouteName="Games"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveTintColor: colors.purpleSecondary,
        drawerInactiveTintColor: colors.blackLight,
        drawerLabelStyle: {marginLeft: -20}
      }}
    >
      <Drawer.Screen 
        name="Games" 
        component={Games} 
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome name="gamepad" size={22} color={color} />
          ),
          drawerLabelStyle: {marginLeft: -23},
          title: "Jogos"
        }}
      />
      <Drawer.Screen 
        name="InfoAlzheimer" 
        component={Info} 
        options={{
          drawerIcon: ({color}) => (
            <Foundation name="info" size={24} color={color} />
          ),
          title: "Sobre o Alzheimer"
        }}
      />
      <Drawer.Screen 
        name="Configurations" 
        component={ConfigurationNavigator} 
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome name="gear" size={22} color={color} />
          ),
          title: "Configurações"
        }}
      />
    </Drawer.Navigator>
  )
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="PrivateRoutes"
          component={PrivateRoutes}
        />
        <Stack.Screen 
          name="Login"
          component={Login}
        />
        <Stack.Screen 
          name="Register"
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes