import React from 'react'
import { View, StyleSheet } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constants/styles'
import { Text } from 'react-native'

export default function ExpensesOutput({ expenses, expensePeriod, fallbackText }) {

    let content = <Text style={styles.infoText}>{fallbackText}</Text>

    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses} />
    }

    return (
        <View style={styles.container}>
            <View style={styles.summaryContainer}>
                <ExpensesSummary expenses={expenses} periodTime={expensePeriod} />
            </View>
            <View style={styles.listContainer}>
                {content}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 16,
        backgroundColor: '#ffffff',
        overflow: 'hidden'
    },
    infoText: {
        // color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32
    },
    summaryContainer: {
        paddingHorizontal: 14,
    },
    listContainer:{
        marginVertical: 23
    }
})