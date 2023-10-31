import React from "react";

import './Container.css';
import {Header} from "../Header/Header";
import {ExpensesForm} from "../../components/ExpensesForm/ExpensesForm";
import {ExpensesList} from "../../components/ExpensesTable/ExpensesList";
import {ExpensesListByCategory} from "../../components/ExpensesTable/ExpensesListByCategory";
import {ExpensesListByDate} from "../../components/ExpensesTable/ExpensesListByDate";

export const Container = ()=> {
    return <section className="main-container">
        {/*<Header/>*/}
        {/*<ExpensesForm/>*/}
        {/*<ExpensesList/>*/}
        {/*<ExpensesListByCategory/>*/}
        {/*<ExpensesListByDate/>*/}
    </section>
}