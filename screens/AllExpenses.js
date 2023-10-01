import { StyleSheet } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useContext } from 'react';
import { ExpensesContext } from '../store/expenses-context';

export default function AllExpenses() {
    const expensesCtx = useContext(ExpensesContext);
    return (
        <ExpensesOutput fallbackText={'No expenses added yet!'} expensePeriod={'Total'} expenses={expensesCtx.expenses} />
    )
}

const styles = StyleSheet.create({

});