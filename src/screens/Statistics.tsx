import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity} from 'react-native';
import { VictoryBar, VictoryAxis, VictoryPolarAxis, VictoryArea, VictoryChart, VictoryTheme, VictoryLine, } from 'victory-native';
import {Dimensions} from 'react-native'
import CustomSelect from '../components/CustomSelect'
import moment from 'moment';
import { array } from 'yup';


const allAccountsData = require('../../assets/data/data.json') 
const userList = () => {
    let userArray: string[] = []
    allAccountsData.map((e:any) => userArray.push(e.user))
    return userArray
}


export default function Statistics(){

    // State pour choix utilisateur
    const [user, setUser] = useState<number>(0)

    // Récupération des tableaux de transactions
    const incomes = allAccountsData[user].incomes
    const expenses = allAccountsData[user].expenses
    const allData = incomes.concat(expenses)

    //Classement des transactions par date
    const sortedIncomes = incomes.sort((incomeA:{date: string}, incomeB:{date: string}) =>
        (new Date(incomeA.date).getTime() - new Date(incomeB.date).getTime())
    )
    const sortedExpenses = expenses.sort((incomeA:any, incomeB:any) =>
        (new Date(incomeA.date).getTime() - new Date(incomeB.date).getTime())
    )
    const sortedTransactions = allData.sort((incomeA:any, incomeB:any) =>
        (new Date(incomeA.date).getTime() - new Date(incomeB.date).getTime())
    )

    // Retourne tableau pour graphique (revenus, dépenses)
    const getGraphData = (transactionsArray:Array<Object>) => {
        let graphData:object[] = []
        transactionsArray.map((transaction:any) => {
            let formatedDate =  moment(transaction.date).format('DD/MM')
            graphData.push(
                {
                    y: parseInt(transaction.amount.replace('€', '').replace(',', '')),
                    x: formatedDate,
                }
            )
        })
        return graphData
    }   

    /*
        Pour chaque objet, j'utilise la date pour déterminer dans quel attribut va la transaction
        {
            'Avril': {
                incomes: [
                    
                ],
                expenses: [
                    
                ],
            }
            'Mai': {
                incomes: [
                    
                ],
                expenses: [
                    
                ],
            }
            'Juin': {
                incomes: [
                    
                ],
                expenses: [
                    
                ],
            }
        }
    */
    const getBalanceGraphData = () => {
        let balanceArray = {
            april: {
                incomes: new Array(),
                expenses: new Array(),
            },
            may: {
                incomes: new Array(),
                expenses: new Array(),
            },
            june: {
                incomes: new Array(),
                expenses: new Array(),
            },
        }
        sortedIncomes.map((transaction:any) => {
            if (moment(transaction.date).format('MM') == '04'){
                balanceArray.april.incomes.push(parseInt(transaction.amount.replace('€', '').replace(',', '')))
            } else if (moment(transaction.date).format('MM') == '05'){
                balanceArray.may.incomes.push(parseInt(transaction.amount.replace('€', '').replace(',', '')))
            } else if (moment(transaction.date).format('MM') == '06'){
                balanceArray.june.incomes.push(parseInt(transaction.amount.replace('€', '').replace(',', '')))
            }
        })
        sortedExpenses.map((transaction:any) => {
            if (moment(transaction.date).format('MM') == '04'){
                balanceArray.april.expenses.push(parseInt(transaction.amount.replace('€', '').replace(',', '')))
            } else if (moment(transaction.date).format('MM') == '05'){
                balanceArray.may.expenses.push(parseInt(transaction.amount.replace('€', '').replace(',', '')))
            } else if (moment(transaction.date).format('MM') == '06'){
                balanceArray.june.expenses.push(parseInt(transaction.amount.replace('€', '').replace(',', '')))
            }
        }) 

        return balanceArray
    }

    function getSum(array:Array<number>){
        let sum = 0
        array.map(e => sum = sum + e)
        return sum
    }


    //console.warn()



    // console.warn(moment(sortedIncomes[0].date).format('MM'))
    // x: moment(transaction.date).format('MM')

/*
    [
        {y: 5, x: 'Mars'},
        {y: 6, x: 'Avril'},
        {y: 5, x: 'Mai'},
        {y: 8, x: 'Juin'},
        {y: 8.5, x: 'Juillet'},
        {y: 6, x: 'Août'},
    ]
*/

    return(
        <ScrollView style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Statistiques</Text>
                <Text style={styles.subtitle}>Voici vos statistiques financières</Text>

                <CustomSelect onSelect={(value, key) => setUser(key)} data={userList()} defaultText='Utilisateur'/>

                <Text style={styles.sectionTitle}>Revenus mensuels</Text>
                <VictoryChart theme={VictoryTheme.material}>
                    <VictoryArea data={getGraphData(sortedIncomes)} />
                </VictoryChart>

                <Text style={styles.sectionTitle}>Dépenses mensuelles</Text>
                <VictoryChart theme={VictoryTheme.material}>
                    <VictoryArea data={getGraphData(sortedExpenses)} />
                </VictoryChart>

                <Text style={styles.sectionTitle}>Solde Mensuel</Text>
                <VictoryChart theme={VictoryTheme.material}>
                    <VictoryArea data={getGraphData(sortedTransactions)} />
                </VictoryChart>

  
            </View>
        </ScrollView>
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
        marginBottom: 18,
    },
    sectionTitle: {
        fontSize: 25,
        marginTop: 22,
        fontWeight: '400',
    },
    graphView: {
        marginHorizontal: 2,
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