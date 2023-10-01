import { createContext, useReducer } from "react";

// const DUMMY_EXPANSES = [
//     {
//         id: 'e1',
//         description: 'Pair of shoe',
//         amount: 90.99,
//         date: new Date('2023-08-28')
//     },
//     {
//         id: 'e2',
//         description: 'Pair of shirts',
//         amount: 500,
//         date: new Date('2023-09-28')
//     },
//     {
//         id: 'e3',
//         description: 'Some bananas',
//         amount: 120,
//         date: new Date('2023-09-28')
//     },
//     {
//         id: 'e4',
//         description: 'Apples',
//         amount: 50,
//         date: new Date('2023-01-28')
//     },
//     {
//         id: 'e5',
//         description: 'Pair of shoe',
//         amount: 90.99,
//         date: new Date('2023-08-28')
//     },
//     {
//         id: 'e6',
//         description: 'Pair of shirts',
//         amount: 500,
//         date: new Date('2023-09-28')
//     },
//     {
//         id: 'e7',
//         description: 'Some bananas',
//         amount: 120,
//         date: new Date('2023-09-28')
//     },
//     {
//         id: 'e8',
//         description: 'Apples',
//         amount: 50,
//         date: new Date('2023-01-28')
//     },
//     {
//         id: 'e9',
//         description: 'Apples',
//         amount: 50,
//         date: new Date('2023-01-28')
//     },
//     {
//         id: 'e10',
//         description: 'Apples',
//         amount: 50,
//         date: new Date('2023-01-28')
//     },
//     {
//         id: 'e11',
//         description: 'Apples',
//         amount: 50,
//         date: new Date('2023-01-28')
//     },
// ]

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { }
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state]
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter(expense => expense.id != action.payload)
        default:
            return state;
    }
}

export default function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expensesReducer, []);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData })
    }
    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id })
    }
    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } })
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    }

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}