import React, {useEffect, useState} from "react";
import { ExpensesEntity } from "types";
import {ExpensesTable} from "./ExpensesTable";
import {useParams} from "react-router-dom";


export const ExpensesListByDate = ()=> {

    const [expensesList, setExpensesList] = useState<ExpensesEntity[] | null>(null);

    const {startDate, endDate} = useParams();

    useEffect(() => {
        (async()=> {
            setExpensesList(null);
            const res = await fetch(`http://localhost:3001/expenses/search/${startDate}/${endDate}`);
            const {expensesList} = await res.json();
            setExpensesList(expensesList);
        })();
    }, []);

    if(expensesList === null) {
        return <h1>wait...</h1>
    }

    return <>
        <h2>Expenses from {startDate} to {endDate}</h2>
        <ExpensesTable expenses={expensesList}/>
    </>
}