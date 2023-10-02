import React from 'react'
import { Pressable } from 'react-native'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import { GlobalStyles } from '../../constants/styles'
import { Text } from 'react-native'
import { getFormattedDate } from '../../util/date'
import { useNavigation } from '@react-navigation/native'

export default function ExpenseItem({ id, description, date, amount }) {

    const navigation = useNavigation();

    function onPress() {
        navigation.navigate('ManageExpense', { id: id })
    }

    return (
        <Pressable onPress={onPress} android_ripple={{ color: '#e0e0e0' }}>
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description.length > 20 ? description.slice(0, 15) + "..." : description}</Text>
                    <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    expenseItem: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        // marginVertical: 8,
        // backgroundColor: GlobalStyles.colors.primary400,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        // elevation: 10
    },
    textBase: {
        // color: GlobalStyles.colors.primary50
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    amountContainer: {
        paddingHorizontal: 18,
        paddingVertical: 4,
        backgroundColor: '#f3f2f2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        minWidth: 90
    },
    amount: {
        color: GlobalStyles.colors.error500,
        fontWeight: 'bold'
    }
})