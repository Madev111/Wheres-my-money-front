import React, {useEffect, useState} from "react";
import { ExpensesEntity } from "types";
import {ExpensesTable} from "./ExpensesTable";
import {useParams} from "react-router-dom";
import {Btn} from "../../common/Btn";
import {Calc} from "../../common/Calc";


export const ExpensesListByDate = ()=> {

    const [expensesList, setExpensesList] = useState<ExpensesEntity[] | null>(null);
    const [expensesValue, setExpensesValue] = useState<number[] | null>(null);

    const {startDate, endDate} = useParams();

    useEffect(() => {
        (async()=> {
            setExpensesList(null);
            const res = await fetch(`http://localhost:3001/expenses/search/${startDate}/${endDate}`);
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
        <h2>Expenses from {startDate} to {endDate}</h2>
        <ExpensesTable expenses={expensesList}/>
        <div>
            <Btn text="Change dates" to="/dates/expenses"/>
            <Btn text="Back to home" to="/"/>
            {expensesValue === null? <p>Loading...</p> : <Calc values={expensesValue}/>}
        </div>
    </>
}