import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

export default function RecentExpenses() {
    const [error, setError] = useState();
    const [isFathing, setIsFatching] = useState(true);
    const expensesCtx = useContext(ExpensesContext);

    useEffect(() => {
        async function fetchExpenses() {
            setIsFatching(true);
            try {
                const expenses = await getExpenses();
                expensesCtx.setExpenses(expenses);
            } catch (error) {
                setError('Could not fetch expenses');
            }
            setIsFatching(false);
        }

        fetchExpenses();
    }, []);

    const recentCtx = expensesCtx.expenses.filter(expense => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return expense.date > date7DaysAgo;
    })

    function errorHandler() {
        setError(null);
    }

    if (error && !isFathing) {
        return <ErrorOverlay message={error} onConfirm={errorHandler} />
    }

    if (isFathing) {
        return <LoadingOverlay />
    }

    return (
        <ExpensesOutput fallbackText={'No expenses in last 7 days!'} expenses={recentCtx} expensePeriod={'Last 7 Days'} />
    )
}

const styles = StyleSheet.create({

})