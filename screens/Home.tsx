import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';


export default function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>BudgaPlus</Text>
                <Text style={styles.subtitle}>Une meilleure gestion pour plus d'argent</Text>
            </View>
            <View style={styles.sectionLine}></View>
            <Text style={styles.soldText}>Votre solde de compte : </Text>
            <Text style={styles.soldNumber}>3255.12 €</Text>
            <View style={styles.transactionsView}>
                <Text style={styles.transactionTitle}>Dernières transactions : </Text>
                <View style={styles.transaction}>
                    <Text style={styles.transactionComment}>Rembours. resto</Text>
                    <Text style={styles.transactionDate}>11/06/22</Text>
                    <Text style={styles.transactionAmmount}>+ 31€</Text>
                </View>
                <View style={styles.transaction}>
                    <Text style={styles.transactionComment}>Achat aspirateur</Text>
                    <Text style={styles.transactionDate}>11/06/22</Text>
                    <Text style={styles.transactionAmmount}>- 122.99€</Text>
                </View>
                <View style={styles.transaction}>
                    <Text style={styles.transactionComment}>Courses</Text>
                    <Text style={styles.transactionDate}>11/06/22</Text>
                    <Text style={styles.transactionAmmount}>- 83.57€</Text>
                </View>
                <View style={styles.transaction}>
                    <Text style={styles.transactionComment}>prelev. frais banc.</Text>
                    <Text style={styles.transactionDate}>11/06/22</Text>
                    <Text style={styles.transactionAmmount}>- 83.57€</Text>
                </View>
            </View>
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
        marginTop: 42,
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
        marginTop: 25,
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
    transactionsView: {
        marginTop: 34,
    },
    transactionTitle: {
        color: 'white',
        fontSize: 16,
        marginLeft: 15,
        marginBottom: 9,
    },
    transaction: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        //borderBottomColor: 'black',
        //borderBottomWidth: 0.9,
    },
    transactionComment: {
        width: '45%',
        textAlign: 'center',
    },
    transactionDate: {
        width: '29%',
        textAlign: 'center',
        borderLeftColor: 'black',
        borderLeftWidth: 0.9,
        borderRightColor: 'black',
        borderRightWidth: 1,
    },
    transactionAmmount: {
        width: '26%',
        textAlign: 'center',
    },
})