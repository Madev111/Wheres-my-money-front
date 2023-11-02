import React, {useEffect, useState} from "react";
import { ExpensesEntity } from "types";
import {ExpensesTable} from "./ExpensesTable";
import {useParams} from "react-router-dom";
import {Btn} from "../../common/Btn";


export const ExpensesListByCategory = ()=> {

    const [expensesList, setExpensesList] = useState<ExpensesEntity[] | null>(null);

    const {category} = useParams();

    useEffect(() => {
        (async()=> {
            setExpensesList(null);
            const res = await fetch(`http://localhost:3001/expenses/search/${category}`);
            const {expensesList} = await res.json();
            setExpensesList(expensesList);
        })();
    }, []);

    if(expensesList === null) {
        return <h1>wait...</h1>
    }

    return <>
        <h2>{category} expenses</h2>
        <ExpensesTable expenses={expensesList}/>
        <div>
            <Btn text="Change category" to="/categories/search"/>
            <Btn text="Back to home" to="/"/>
        </div>
    </>
}