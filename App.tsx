import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import Octicon from 'react-native-vector-icons/Octicons'
import Home from './screens/Home'
import Account from './screens/Account'
import Statistics from './screens/Statistics'
import Income from './screens/income'

type RootStackParamList = {
  Home: undefined
  Account: undefined
  Statistics: undefined
  TabNavigation: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator<RootStackParamList>()

export default function App () {
  return (
    <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen name='TabNavigation' component={TabNavigation}/>
    </Stack.Navigator>
  )
}

export function TabNavigation () {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {paddingBottom: 2, color: 'black', fontWeight: '500'},
          tabBarIconStyle: {marginTop: 4}
      }}>
        <Tab.Screen name="Home" component={Home} options={{title:'Méson', tabBarIcon: () => <FaIcon name="euro" size={28} color="#008b8b"/>}}/>
        <Tab.Screen name="Account" component={Account} options={{title:'Compte', tabBarIcon: () => <FaIcon name="user" size={25} color="#008b8b"/>}}/>
        <Tab.Screen name="Statistics" component={Statistics} options={{title:'Stats', tabBarIcon: () => <Octicon name="graph" size={24} color="#008b8b"/>}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

