import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import {StyleSheet, View} from 'react-native' 
import Entypo from 'react-native-vector-icons/Entypo'; 


type selectProps = {
    onSelect(item:string, key:number):void,
    data:Array<any>, 
    defaultText:string
}

export default function CustomSelect(props:selectProps){

    let data = props.data
    let defaultText = props.defaultText

    return (
        <SelectDropdown
            data={data}
            onSelect={(item, key) => {
                props.onSelect(item, key)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                return item
            }}
            buttonStyle = {styles.select}
            buttonTextStyle = {styles.selectTextStyle}
            dropdownStyle= {styles.dropDown}
            rowStyle= {styles.row}
            rowTextStyle= {styles.rowText}
            defaultButtonText = {defaultText}
            renderDropdownIcon={isOpened => {
                return <Entypo name={isOpened ? 'chevron-up' : 'chevron-down'} size={24} color="black" style={styles.icon}/>
            }}
            dropdownIconPosition={'right'}
        />
    )
}

const styles = StyleSheet.create({
    select:{
      width: 195,
      height: 30,
      borderRadius: 3,
      marginVertical: 11,
      alignSelf: 'center',
    },
    selectTextStyle:{
      fontSize: 14,
      color: '#3d3d3d',
    },
    icon: {
        marginRight: 7
    },
    dropDown: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        marginTop: -3,
        height: 200,
    },
    row: {
        height: 40,
    },
    rowText: {
        fontSize: 16.5,
    }
})
