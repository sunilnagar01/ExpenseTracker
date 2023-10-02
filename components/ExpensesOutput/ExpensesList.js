import React from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native'
import ExpenseItem from './ExpenseItem';

function renderExpenseItem(itemData) {
    return (
        <ExpenseItem {...itemData.item} />
    )
}

function ListFooter() {
    return <View style={{height: 100}}></View>
}

export default function ExpensesList({ expenses }) {
    return (
        <View>
            <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id} ListFooterComponent={ListFooter} />
        </View>
    )
}
