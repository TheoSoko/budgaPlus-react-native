import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './screens/Home'


type RootStackParamList = {
  Home: undefined
}

const Tab = createBottomTabNavigator<RootStackParamList>()

export default function App () {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {paddingBottom: 2, color: 'black', fontWeight: '500'},
          tabBarIconStyle:  {marginTop: 4}
      }}>
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon: () => <Icon name="euro" size={30} color="green"/>}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};



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

