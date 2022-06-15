import React from 'react';
import {SafeAreaView, ScrollView, TextInput, StyleSheet, Text, useColorScheme, View, TouchableOpacity, Button} from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList} from '../types';
import { Formik } from 'formik';
import CustomInput from '../components/customInput'

type AddIncomeProps = NativeStackScreenProps<RootStackParamList, 'AddIncome'>



export default function AddIncome({navigation, route}: AddIncomeProps){

    type formValues = {
        amount: undefined|number, 
        date: undefined|string,
        category: undefined|string,
        comment: undefined|string,
    }
    return(
        <SafeAreaView style={styles.container}>
            <FaIcon onPress={() => navigation.goBack()} name='chevron-left' color='white' size={18} style={styles.icon}/>
            <View style={styles.titleView}>
                <Text style={styles.title}>Revenus</Text>
                <Text style={styles.subtitle}>Entrez vos recettes ici</Text>
            </View>

            <Formik
                initialValues={{ 
                    amount: undefined, 
                    date: undefined,
                    category: undefined,
                    comment: undefined,
                }}
                onSubmit={
                    (values):void => {
                        let checkValue:boolean = true
                        Object.entries(values).forEach(e => {
                            if (e == undefined || e == null){
                                checkValue = false
                            }
                        })
                        if (checkValue === true){
                            console.warn(values)
                        }
                    }
                }
            >

                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <View style={styles.form}>
                            <View>
                                <CustomInput type='numeric' onChangeText={handleChange('amount')} onBlur={handleBlur('amount')} value={values.amount} placeholder='Entrez le montant'/>
                            </View>
                            <View>
                                <CustomInput type='date' onChangeText={handleChange('date')} onBlur={handleBlur('date')} value={values.date} placeholder='Entrez la date'/>
                            </View>
                            <View>
                                <CustomInput onChangeText={handleChange('category')} onBlur={handleBlur('category')} value={values.category} placeholder='Entrez la catégorie de revenu'/>
                            </View>
                            <View>
                                <CustomInput onChangeText={handleChange('comment')} onBlur={handleBlur('comment')} value={values.comment} placeholder='Entrez un commentaire'/>
                            </View>
                        </View>
                        <Button onPress={handleSubmit} title="Valider" />
                    </View>
                )}

            </Formik>

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
        fontSize: 15,
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
    form: {
        marginTop: 22,
        marginBottom: 26,
    }

})