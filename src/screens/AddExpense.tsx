import React from 'react';
import {SafeAreaView, ScrollView, TextInput, StyleSheet, Text, useColorScheme, View, TouchableOpacity, Button} from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList} from '../types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {setLocale} from 'yup'
import CustomInput from '../components/customInput'
import CustomDatePicker from '../components/CustomDatePicker'
import CustomSelect from '../components/CustomSelect'

import {addExpenseData} from '../../database'



type AddExpenseProps = NativeStackScreenProps<RootStackParamList, 'AddExpense'>


export default function AddExpense({navigation, route}: AddExpenseProps){

    //Liste des catégories de dépense
    const categories = [
        'Alimentaires',
        'Factures',
        'Transport',
        'Logement',
        'Santé',
        'Divertissement',
        'Vacances',
        'Shopping',
    ]
      
    // Yup
    const ExpenseSchema = Yup.object().shape({

        amount: Yup.string().matches(/^([0-9]{1,6})([\.\,][0-9][0-9])?$/, 'Veuillez renseigner un montant valide'),

        recipient: Yup.string().matches(/^([\ ]?[A-Za-zÀ-ÖØ-öø-ÿ\-]{1,40}?){0,5}$/, 'Veuillez renseigner un nom valide svp.'),
     
        date: Yup.date().required('Ce champs est requis'),
     
        category: Yup.string().required('Veuillez renseigner une catégorie de dépense'),

        comment: Yup.string().max(20, 'Le commentaire ne peut pas faire plus de 20 caractères')
     
      });

    return(
        <SafeAreaView style={styles.container}>
        <ScrollView>
            <FaIcon onPress={() => navigation.goBack()} name='chevron-left' color='white' size={18} style={styles.icon}/>
            <View style={styles.titleView}>
                <Text style={styles.title}>Dépenses</Text>
                <Text style={styles.subtitle}>Entrez vos dépenses ici</Text>
            </View>

            {/* Balise ouvrante Formik, avec valeurs init, prop validation (avec yup), et onSubmit */}
            <Formik
                initialValues={{ 
                    amount: undefined, 
                    recipient: undefined,
                    date: undefined,
                    category: undefined,
                    comment: undefined,
                }}
                validationSchema={ExpenseSchema}
                onSubmit={
                    (values):void => {
                        let checkValue:boolean = true
                        Object.entries(values).forEach(e => {
                            if (e == undefined || e == null){
                                checkValue = false
                            }
                        })
                        if (checkValue === true){
                            addExpenseData(values)
                        }
                    }
                }
            >

                {/* States Formik en argument, et Formulaire en retour de callback*/}
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View>
                        <View style={styles.form}>
                        <View style={styles.inputView}>
                                <CustomInput type='numeric' onChangeText={handleChange('amount')} onBlur={handleBlur('amount')} value={values.amount} placeholder='Entrez le montant'/>
                                {errors.amount && touched.amount ? <Text style={styles.error}>{errors.amount}</Text> : null}
                            </View>
                            <View style={styles.inputView}>
                                <CustomInput onChangeText={handleChange('recipient')} onBlur={handleBlur('recipient')} value={values.recipient} placeholder='Nom du bénéficiaire'/>
                                {errors.recipient && touched.recipient ? <Text style={styles.error}>{errors.recipient}</Text> : null}
                            </View>
                            <View style={styles.inputView}>
                                <CustomDatePicker text='Entrez la date' onDatePick={handleChange('date')}/>
                                {errors.date && touched.date ? <Text style={styles.error}>{errors.date}</Text> : null}
                            </View>
                            <View style={styles.inputView}>
                                <CustomSelect onSelect={handleChange('category')}  defaultText='Type de dépense' data={categories}/>
                                {errors.category && touched.category ? <Text style={styles.error}>{errors.category}</Text> : null}
                            </View>
                            <View style={styles.inputView}>
                                <CustomInput onChangeText={handleChange('comment')} onBlur={handleBlur('comment')} value={values.comment} placeholder='Entrez un commentaire'/>
                                {errors.comment && touched.comment ? <Text style={styles.error}>{errors.comment}</Text> : null}
                            </View>
                        </View>
                        <Button onPress={handleSubmit} title="Valider" />
                    </View>
                )}

            </Formik>

        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'mediumturquoise',
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
    },
    error: {
        alignSelf: 'center',
        color: 'red',
        marginHorizontal: 5,
    },
    inputView: {
        marginVertical: 0.5,
    }
})