import { StyleSheet, View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

export default function RecentExpenses() {
    const expensesCtx = useContext(ExpensesContext);

    const recentCtx = expensesCtx.expenses.filter(expense => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return expense.date > date7DaysAgo;
    })

    return (
        <ExpensesOutput fallbackText={'No expenses in last 7 days!'} expenses={recentCtx} expensePeriod={'Last 7 Days'} />
    )
}

const styles = StyleSheet.create({

})