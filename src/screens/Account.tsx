import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity} from 'react-native';
import CustomSelect from '../components/CustomSelect'
import moment from 'moment';
import 'moment/locale/fr';

type transactionType = {
    date: string | number | Date
    amount: String
    category: String
    comment: String
    _id_expense?: String
    _id_income?: String
} 




export default function Account(){

    //States
    const [user, setUser] = useState<number>(0)

    //Tableaux des opérations triées par date
    const accountData = require('../../assets/data/data.json')
    const dataIncomes = accountData[user].incomes
    const dataExpenses = accountData[user].expenses
    const transactionsData = dataIncomes.concat(dataExpenses)
    transactionsData.sort((a:transactionType, b:transactionType):number => {
        let dateA = new Date(a.date).getTime()
        let dateB = new Date(b.date).getTime()
        return dateA - dateB
    })

    //Tableau des utilisateurs
    let userArray:string[] = []
    accountData.map((e:any) => userArray.push(e.user))
    
    

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Mon compte</Text>
                <Text style={styles.subtitle}>Vous avez accès ici à toutes les transactions de votre compte</Text>
            </View>

            <View style={styles.selectView}>
                <CustomSelect data={userArray} defaultText='Utilisateur' onSelect={(item, key) => setUser(key)}/>
            </View>

            <View style={styles.sectionLine}></View>
            <ScrollView style={styles.transactionsView}>
            <Text style={styles.transactionTitle}>Dernières transactions : </Text>

                {
                    transactionsData.map( (e:transactionType, key:number) => {
                        let date = moment(e.date)
                        moment.locale('fr')
                        return (
                            <View key={key}>
                                <Text style={styles.transactionDate}>{date.format('Do MMMM YYYY')}</Text>
                                <View style={styles.transactionDesc}>
                                    <Text style={styles.transactionComment}>{e.comment.length > 48 ? e.comment.replace(e.comment.substring(48), '...') : e.comment}</Text>
                                    <Text style={[styles.transactionAmmount, {color: e._id_expense ? 'red' : 'black'}]}>{e._id_income ? e.amount :  `- ${e.amount}`}</Text>
                                </View>
                            </View>
                        )
                    })
                }

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
        marginHorizontal: 33,
        textAlign: 'center'
    },
    selectView: {
        marginTop: 11,
    },
    sectionLine: {
        borderTopWidth: 0.8,
        borderTopColor: 'white',
        marginTop: 20,
    },
    transactionsView: {
        marginTop: 0,
    },
    transactionTitle: {
        color: 'white',
        fontSize: 16,
        marginLeft: 15,
        marginBottom: 13,
        marginTop: 18,
    },
    transactionDate: {
        textAlign: 'left',
        fontSize: 12.5,
        marginBottom: 3,
        marginLeft: 9,
        fontWeight: '500'
    },
    transactionDesc: {
        marginBottom: 7.5,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginHorizontal: 15.5,
        paddingVertical: 3,
        borderRadius: 4,
        //borderBottomColor: 'black',
        //borderBottomWidth: 0.9,
    },
    transactionComment: {
        width: '70%',
        textAlign: 'left',
        marginLeft: 8,
        fontSize: 13,
        fontWeight: '400',
        paddingHorizontal: 6,
    },
    transactionAmmount: {
        width: '30%',
        textAlign: 'center',
        paddingRight: 13,
        fontSize: 12.5,
        fontWeight: '500'
    },
})