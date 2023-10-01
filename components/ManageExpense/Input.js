import React from 'react'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'
import { GlobalStyles } from '../../constants/styles'

export default function Input({ label, style, textInputConfig }) {

    let inputStyles = [styles.input];
    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.multilineInput);
    }

    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} placeholderTextColor={ 'rgb(167, 166, 166)' } />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 16,
        // color: 'white',
        marginBottom: 4,
    },
    input: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
        fontSize: 18,
        // color: 'white',
        borderWidth: 1,
        borderColor: 'rgb(167, 166, 166)'
    },
    multilineInput: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
})