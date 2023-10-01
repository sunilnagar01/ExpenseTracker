import { useContext, useLayoutEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';
import { ExpensesContext } from '../store/expenses-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import { Pressable } from 'react-native';
import { Keyboard } from 'react-native';
import { Alert } from 'react-native';
import { ScrollView } from 'react-native';

export default function ManageExpense({ route, navigation }) {

    const expensesCtx = useContext(ExpensesContext);
    const editedExpenseId = route.params?.id;
    const isEditing = !!editedExpenseId;

    const selectedExpense = expensesCtx.expenses.find(expense => expense.id === editedExpenseId)

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         title: isEditing ? 'Edit Expense' : 'Add Expense'
    //     })
    // }, [isEditing, navigation]);

    function deleteExpenseHandler() {
        Alert.alert('Delete', 'Do you really want to delete this expense?', [
            {
                text: 'Cancel',
                style: 'cancel'
            },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: () => {
                    expensesCtx.deleteExpense(editedExpenseId);
                    navigation.goBack();
                }
            }
        ], { cancelable: true })
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler(expenseData) {
        if (isEditing) {
            expensesCtx.updateExpense(editedExpenseId, expenseData);
        } else {
            expensesCtx.addExpense(expenseData);
        }
        navigation.goBack();

    }

    return (
        <Pressable onPress={() => Keyboard.dismiss()} style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <View style={styles.deleteContainer}>
                    <Text style={styles.title}>{isEditing ? 'Edit' : 'Add'} Expense</Text>
                    {isEditing && (
                        <IconButton icon={'trash'} color={GlobalStyles.colors.error} size={30} onPress={deleteExpenseHandler} />)
                    }
                </View>

                <ExpenseForm isEditing={isEditing} onCancel={cancelHandler} onSubmit={confirmHandler} defaultValues={selectedExpense} />


            </ScrollView>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    deleteContainer: {
        // flex: 1,
        // marginTop: 16,
        // paddingTop: 8,
        // borderTopColor: '#ddd',
        // borderTopWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 50,
        backgroundColor: 'white',
        // marginTop: 24
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        // color: 'white',
        // marginBottom: 23,
        textAlign: 'center'
    }
})