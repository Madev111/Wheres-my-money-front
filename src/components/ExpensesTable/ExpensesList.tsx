import React, {useEffect, useState} from "react";
import { ExpensesEntity } from "types";
import {ExpensesTable} from "./ExpensesTable";


export const ExpensesList = () => {

    const [expensesList, setExpensesList] = useState<ExpensesEntity[] | null>(null);



    useEffect(() => {
        (async()=> {
            setExpensesList(null);
            const res = await fetch('http://localhost:3001/expenses/search');
            const {expensesList} = await res.json();
            setExpensesList(expensesList);
        })();
    }, []);



    if(expensesList === null) {
        return <h1>wait...</h1>
    }

    return <>
        <h2>Expenses</h2>
        <ExpensesTable expenses={expensesList}/>
    </>
}