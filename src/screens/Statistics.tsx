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


    //Retourne tableau solde pour graphique
    function  getBalanceGraphData(){
        let balanceList = {
            april: {
                incomes: new Array(),
                expenses: new Array(),
                balance: 0
            },
            may: {
                incomes: new Array(),
                expenses: new Array(),
                balance: 0
            },
            june: {
                incomes: new Array(),
                expenses: new Array(),
                balance: 0
            },
        }
        //push les revenus dans les tableaux de balanceList
        sortedIncomes.map((transaction:any) => {
            if (moment(transaction.date).format('MM') == '04'){
                balanceList.april.incomes.push(parseInt(transaction.amount.replace('€', '').replace(',', '')))
            } else if (moment(transaction.date).format('MM') == '05'){
                balanceList.may.incomes.push(parseInt(transaction.amount.replace('€', '').replace(',', '')))
            } else if (moment(transaction.date).format('MM') == '06'){
                balanceList.june.incomes.push(parseInt(transaction.amount.replace('€', '').replace(',', '')))
            }
        })
        //push les revenus dans les tableaux de balanceList
        sortedExpenses.map((transaction:any) => {
            if (moment(transaction.date).format('MM') == '04'){
                balanceList.april.expenses.push(parseInt(transaction.amount.replace('€', '').replace(',', '')))
            } else if (moment(transaction.date).format('MM') == '05'){
                balanceList.may.expenses.push(parseInt(transaction.amount.replace('€', '').replace(',', '')))
            } else if (moment(transaction.date).format('MM') == '06'){
                balanceList.june.expenses.push(parseInt(transaction.amount.replace('€', '').replace(',', '')))
            }
        }) 

        //Function addition pour tableau
        const getArraySum = (array:Array<number|void>) => {
            let sum = 0
            array.map(e => {(e === undefined) ? (sum = sum + 0) : (sum = sum + e)})
            return sum
        }

        //Définit les soldes par mois dans balanceList
        Object.entries(balanceList).forEach((e:any) => {
            e[1]['balance'] = ( getArraySum(e[1]['incomes']) - getArraySum(e[1]['expenses']) )
        })
        
        //Définit les données pour le graphique
        let graphData:object[] = []
        Object.entries(balanceList).forEach((e:any) => {
            graphData.push({ y: e[1]['balance'], x: e[0]})
        })
        
        return graphData
    }


/*
    Data pour Victory
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
                    <VictoryAxis fixLabelOverlap={true} orientation="bottom" offsetY={46} />
                    <VictoryAxis dependentAxis/>
                    <VictoryLine data={getBalanceGraphData()} style={{ data: {stroke: '#c43a31', strokeWidth: 7, strokeLinecap: 'round'} }}/>
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