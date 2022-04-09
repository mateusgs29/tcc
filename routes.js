import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { FontAwesome, Foundation } from '@expo/vector-icons'; 
import { colors } from './styleGlobal'
import CustomDrawer from './src/components/CustomDrawer'

import Login from './src/views/Login'
import Register from './src/views/Register'
import Configuration from './src/views/Configuration'
import Info from './src/views/InfoAlzheimer'
import Games from './src/views/Games'

// Rotas Configuration
import InfoUser from './src/views/Configuration/InfoUser';
import InfoApp from './src/views/Configuration/InfoApp';
import DeleteAccount from './src/views/Configuration/DeleteAccount';

// Rotas Games
import Memorization from './src/views/Games/Memorization';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const ConfigurationNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Configuration' screenOptions={{ headerShown: false }}>
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
      <Stack.Screen 
        name="DeleteAccount"
        component={DeleteAccount}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  )
}

const GamesNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Games' screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="Games"
        component={Games}
      />
      <Stack.Screen 
        name="Memorization"
        component={Memorization}
      />
    </Stack.Navigator>
  )
}

const PrivateRoutes = () => {
  return (
    <Drawer.Navigator 
      initialRouteName="GamesNavigator"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveTintColor: colors.purpleSecondary,
        drawerInactiveTintColor: colors.blackLight,
        drawerLabelStyle: {marginLeft: -20}
      }}
    >
      <Drawer.Screen 
        name="GamesNavigator" 
        component={GamesNavigator} 
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
        name="ConfigurationNavigator" 
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