import React from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {useState} from 'react'
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native'

type DatePickerProps = {
  onDatePick(date:string):void
  text: string
}  

export default function CustomDatePicker(props:DatePickerProps) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [pickedDate, setPickedDate] = useState<string|undefined>()

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date:Date) => {
    let dateString = date.toLocaleDateString()
    props.onDatePick(dateString)
    setPickedDate(dateString)
    hideDatePicker()
  }

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker} style={styles.button}><Text style={[styles.buttonText, {color: pickedDate ? 'black' : 'darkgrey'}]}>{pickedDate ? pickedDate : props.text}</Text></TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  )
}


const styles = StyleSheet.create(
    {
        button: {
            width: 195,
            height: 30,
            paddingVertical: 0,
            backgroundColor: 'white',
            alignSelf: 'center',
            marginVertical: 9,
            borderRadius: 3,
            paddingLeft: 5,
            justifyContent: 'center'
        },
        buttonText: {
            paddingLeft: 2,
            fontSize: 14,
        }
    }
)