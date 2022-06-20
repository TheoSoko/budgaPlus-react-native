import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabsParamList } from '../types';
import Home from '../screens/Home'
import Account from '../screens/Account'
import Statistics from '../screens/Statistics'
import FaIcon from 'react-native-vector-icons/FontAwesome';
import Octicon from 'react-native-vector-icons/Octicons'


const Tab = createBottomTabNavigator<BottomTabsParamList>()


export default function TabNavigation () {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {paddingBottom: 2, color: 'black', fontWeight: '500'},
            tabBarIconStyle: {marginTop: 4},
            tabBarActiveBackgroundColor: '#dce1e5',
            //tabBarInactiveBackgroundColor: 'white',
        }}>
          <Tab.Screen name='Home' component={Home} options={{title:'Accueil', tabBarIcon: ({focused, color, size}:any) => <FaIcon name='euro' size={28} color={focused ? '#008b8b' : '#008b8b'}/>}}/>
          <Tab.Screen name='Account' component={Account} options={{title:'Compte', tabBarIcon: ({focused, color, size}:any) => <FaIcon name='user' size={25} color={focused ? '#008b8b' : '#008b8b'}/>}}/>
          <Tab.Screen name='Statistics' component={Statistics} options={{title:'Stats', tabBarIcon: ({focused, color, size}:any) => <Octicon name='graph' size={24} color={focused ? '#008b8b' : '#008b8b'}/>}}/>
        </Tab.Navigator>
    )
  }