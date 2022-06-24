import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddIncome from './src/screens/AddIncome'
import AddExpense from './src/screens/AddExpense'
import { RootStackParamList } from './src/types';
import TabNavigation from './src/navigation/TabNavigation'

//Définit Moment locale
import 'moment/locale/fr';
//

const Stack = createNativeStackNavigator<RootStackParamList>()


export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='TabNavigation' component={TabNavigation}/>
        <Stack.Screen name='AddIncome' component={AddIncome}/>
        <Stack.Screen name='AddExpense' component={AddExpense}/>
      </Stack.Navigator>
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

