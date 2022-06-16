import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity} from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList} from '../types';

type AddExpenseProps = NativeStackScreenProps<RootStackParamList, 'AddExpense'>



export default function AddExpense({navigation, route}: AddExpenseProps){
    return(
        <SafeAreaView style={styles.container}>
            <FaIcon onPress={() => navigation.goBack()} name='chevron-left' color='white' size={18} style={styles.icon}/>
            <View style={styles.titleView}>
                <Text style={styles.title}>Dépenses</Text>
                <Text style={styles.subtitle}>Entrez vos dépenses ici</Text>
            </View>
            <View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'mediumturquoise'
    },
    icon: {
        marginTop: 19,
        marginLeft: 20,
    },
    titleView: {
        alignItems: 'center',
        marginTop: 7,
    },
    title: {
        color: 'white',
        fontWeight: '600',
        fontSize: 30,
    },
    subtitle: {
        color: 'white',
        fontSize: 12.5,
        marginTop: 4.5,
    },
    sectionLine: {
        borderTopWidth: 0.8,
        borderTopColor: 'white',
        marginTop: 29,
    },
    sectionLine2: {
        borderTopWidth: 0.8,
        borderTopColor: 'white',
        marginTop: 22,
    },
})