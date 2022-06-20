import React from 'react'
import {TextInput, StyleSheet, View,} from 'react-native';

type customInputProps = {
    type?: string
    onChangeText: (text:any) => void
    onBlur: (text:any) => void
    value?: string
    placeholder?: string
    width?: number
}

export default function CustomInput(props:customInputProps){
    return (
        <TextInput 
                onChangeText={(text) => props.onChangeText(text)} 
                onBlur={() => props.onBlur} 
                style={styles.input} 
                value={props.value} 
                placeholder={props.placeholder}
                keyboardType = {(props.type == 'numeric') ? 'numeric' : (props.type == 'date') ? 'numbers-and-punctuation' : 'default'}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        width: 195,
        height: 30,
        paddingVertical: 0,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginVertical: 8,
        borderRadius: 3,
        paddingLeft: 5,
    }
})