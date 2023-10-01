import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Input from './Input'
import { Text } from 'react-native'
import { getFormattedDate } from '../../util/date';
import Button from '../UI/Button';
import { Alert } from 'react-native';

export default function ExpenseForm({ onCancel, onSubmit, isEditing, defaultValues }) {

    const [inputValues, setinputValues] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : '',
        date: defaultValues ? getFormattedDate(defaultValues.date) : getFormattedDate(new Date()),
        description: defaultValues ? defaultValues.description : ''
    });

    function inputChangeHandler(inputIdentifier, val) {
        setinputValues((currentValues) => {
            return {
                ...currentValues,
                [inputIdentifier]: val
            }
        })
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description.trim()
        };

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid) {
            Alert.alert('Invalid Amount', 'Amount should be a number greater than 0');
        } else if (!dateIsValid) {
            Alert.alert('Invalid Date', 'Date should a valid date in format YYYY-MM-DD');
        } else if (!descriptionIsValid) {
            Alert.alert('Invalid Description', 'Enter some description of expense');
        } else {
            onSubmit(expenseData);
        }

    }

    return (
        <View style={styles.form}>
            
            <View style={styles.innerContainer} >
                <Input style={styles.rowInput} label={'Amount'} textInputConfig={{
                    keyboardType: 'decimal-pad',
                    placeholder: 'In Rupees',
                    onChangeText: inputChangeHandler.bind(this, 'amount'),
                    value: inputValues['amount']
                }} />
                <Input style={styles.rowInput} label={'Date'} textInputConfig={{
                    keyboardType: 'decimal-pad',
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: inputChangeHandler.bind(this, 'date'),
                    value: inputValues['date']
                }} />
            </View>
            <Input label={'Description'} textInputConfig={{
                multiline: true,
                autoCorrect: false,
                autoCapitalize: 'words',
                onChangeText: inputChangeHandler.bind(this, 'description'),
                value: inputValues['description']
            }} />
            <View style={styles.buttonContainer}>
                <Button style={styles.button} mode={'flat'} onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} onPress={submitHandler}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        marginTop: 23
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rowInput: {
        flex: 1
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    }
})