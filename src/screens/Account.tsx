import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity} from 'react-native';

export default function Account(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Mon compte</Text>
                <Text style={styles.subtitle}>Vous avez ici accès à toutes les transactions de votre compte</Text>
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
    sectionLine2: {
        borderTopWidth: 0.8,
        borderTopColor: 'white',
        marginTop: 22,
    },
    transactionsView: {
        marginTop: 20,
    },
    transactionTitle: {
        color: 'white',
        fontSize: 16,
        marginLeft: 15,
        marginBottom: 9,
    },
    transactionDate: {
        textAlign: 'left',
        fontSize: 12,
        marginBottom: 3,
        marginLeft: 9,
    },
    transactionDesc: {
        marginBottom: 7.5,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginHorizontal: 18,
        paddingVertical: 2.5,
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