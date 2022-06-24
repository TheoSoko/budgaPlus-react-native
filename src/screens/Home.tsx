import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, BottomTabsParamList } from '../types';
import {getAll} from '../../database'


type HomeProps = NativeStackScreenProps<RootStackParamList>

export default function Home({navigation, route}: HomeProps){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>BudgaPlus</Text>
                <Text style={styles.subtitle}>Une meilleure gestion pour plus d'argent</Text>
            </View>

            <View style={styles.sectionLine}></View>

            <Text style={styles.soldText}>Votre solde de compte : </Text>
            <Text style={styles.soldNumber}>3255.12 €</Text>
            <View style={styles.sectionLine2}></View>
            <View style={styles.buttonsView}>
                <TouchableOpacity onPress={() => navigation.navigate('AddIncome')} style={styles.button}>
                    <Text style={styles.buttonText}>Ajouter un revenu</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AddExpense')} style={styles.button}>
                    <Text style={styles.buttonText}>Ajout une dépense</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.transactionsView}>
                <Text style={styles.transactionTitle}>Dernières transactions : </Text>

                <Text style={styles.transactionDate}>Le 12 juin 2022</Text>
                <View style={styles.transactionDesc}>
                    <Text style={styles.transactionComment}>Remboursement resto</Text>
                    <Text style={styles.transactionAmmount}>+ 31€</Text>
                </View>
                <Text style={styles.transactionDate}>Le 05 juin 2022</Text>
                <View style={styles.transactionDesc}>
                    <Text style={styles.transactionComment}>Achat darty Aspi2000</Text>
                    <Text style={styles.transactionAmmount}>- 122.99€</Text>
                </View>
                <Text style={styles.transactionDate}>Le 28 mai 2022</Text>
                <View style={styles.transactionDesc}>
                    <Text style={styles.transactionComment}>Courses Franprix</Text>
                    <Text style={styles.transactionAmmount}>- 83.57€</Text>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'mediumturquoise'
    },
    titleView: {
        alignItems: 'center',
        marginTop: 30,
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
    soldText: {
        color: 'white',
        fontSize: 18,
        marginTop: 14,
        marginLeft: 15,
    },
    soldNumber: {
        color: 'mediumturquoise',
        fontSize: 22,
        marginTop: 18,
        fontWeight: '600',
        alignSelf: 'center',
        backgroundColor: 'white',
        paddingVertical: 5.5,
        paddingHorizontal: 14.5,
        borderRadius: 18,
    },
    sectionLine2: {
        borderTopWidth: 0.8,
        borderTopColor: 'white',
        marginTop: 22,
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 28.5,
    },
    button: {
        backgroundColor: 'white',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 17,
    },
    buttonText: {
        color: 'mediumturquoise',
        fontWeight: '600',
        fontSize: 14.5,
    },
    transactionsView: {
        marginTop: 21.5,
    },
    transactionTitle: {
        color: 'white',
        fontSize: 16.5,
        marginLeft: 15,
        marginBottom: 9,
    },
    transactionDate: {
        textAlign: 'left',
        fontSize: 12,
        marginBottom: 3,
        marginLeft: 11,
    },
    transactionDesc: {
        marginBottom: 7.5,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginHorizontal: 18,
        paddingVertical: 3.5,
        borderRadius: 4
        //borderBottomColor: 'black',
        //borderBottomWidth: 0.9,
    },
    transactionComment: {
        width: '70%',
        textAlign: 'left',
        marginLeft: 10,
        fontSize: 13,
        fontWeight: '600'
    },
    transactionAmmount: {
        width: '30%',
        textAlign: 'center',
        paddingRight: 20,
        fontSize: 13,
        fontWeight: '700'
    },
})