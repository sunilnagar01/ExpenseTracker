import React from 'react'
import { StyleSheet } from 'react-native';
import { Text } from 'react-native'
import { View } from 'react-native'
import { GlobalStyles } from '../../constants/styles';

export default function ExpensesSummary({ expenses, periodTime }) {

    const expensesSum = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodTime}</Text>
            <Text style={styles.sum}>Rs. {expensesSum.toFixed(2)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    period: {
        fontSize: 14,
        color: GlobalStyles.colors.primary500,
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.error500
    }
})