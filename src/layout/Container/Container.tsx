import React from "react";

import './Container.css';
import {Header} from "../Header/Header";
import {ExpensesForm} from "../../components/ExpensesForm/ExpensesForm";
import {ExpensesList} from "../../components/ExpensesTable/ExpensesList";

export const Container = ()=> {
    return <section className="main-container">
        {/*<Header/>*/}
        {/*<ExpensesForm/>*/}
        <ExpensesList/>
    </section>
}