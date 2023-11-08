import React, {useEffect, useState} from "react";
import { ExpensesEntity } from "types";
import {ExpensesTable} from "./ExpensesTable";
import {Btn} from "../../common/Btn";
import {Calc} from "../../common/Calc";


export const ExpensesList = () => {

    const [expensesList, setExpensesList] = useState<ExpensesEntity[] | null>(null);
    const [expensesValue, setExpensesValue] = useState<number[] | null>(null);



    useEffect(() => {
        (async()=> {
            const res = await fetch('http://localhost:3001/expenses');
            const {expensesList} = await res.json();
            setExpensesList(expensesList);
        })();
    }, []);

    useEffect(() => {
        (async()=> {
            if(expensesList !== null) {
                const prices = expensesList.map(expense => expense.price);
                if(prices.length > 0) {
                    setExpensesValue(prices);
                }
            }
        })();
    }, [expensesList]);



    if(expensesList === null) {
        return <h1>wait...</h1>
    }

    return <>

        <div className="table_container">
            <h2 className="table_title">Your expenses</h2>
            <ExpensesTable expenses={expensesList}/>
            <div className="btn_div">
                <Btn text="Filter by category" to="/categories/search"/>
                <Btn text="Filter by date" to="/dates/expenses"/>
                <Btn text="Back to home" to="/"/>
            </div>
            {expensesValue === null? <p>Expenses not found.</p> : <Calc values={expensesValue}/>}
        </div>

    </>
}