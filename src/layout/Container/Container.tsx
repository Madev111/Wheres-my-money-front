import React from "react";
import {ExpensesForm} from "../../components/ExpensesForm/ExpensesForm";
import {ExpensesList} from "../../components/ExpensesTable/ExpensesList";
import {ExpensesListByCategory} from "../../components/ExpensesTable/ExpensesListByCategory";
import {ExpensesListByDate} from "../../components/ExpensesTable/ExpensesListByDate";
import {Route, Routes} from "react-router-dom";
import {EarningsList} from "../../components/EarningsTable/EarningsList";
import {EarningsListByDate} from "../../components/EarningsTable/EarningsListByDate";
import {EarningsForm} from "../../components/EarningsForm/EarningsForm";
import {FilterExpensesByCategory} from "../../components/MoneyHistory/FilterExpensesByCategory";

import './Container.css';
import {HomeView} from "../HomeView/HomeView";
import {FilterByDate} from "../../components/MoneyHistory/FilterByDate";
import {NotFound} from "../NotFound/NotFound";

export const Container = ()=> {
    return <section className="main_container">
        <Routes>
            <Route path="/" element={<HomeView/>}/>
            <Route path="/expenses/search" element={ <ExpensesList/> }/>
            <Route path="/expenses/search/:category" element={ <ExpensesListByCategory/> }/>
            <Route path="/expenses/search/:startDate/:endDate" element={ <ExpensesListByDate/> }/>
            <Route path="/expenses" element={ <ExpensesForm/> }/>
            <Route path="/earnings/search" element={ <EarningsList/> }/>
            <Route path="/earnings/search/:startDate/:endDate" element={ <EarningsListByDate/> }/>
            <Route path="/earnings" element={ <EarningsForm/> }/>
            <Route path="/categories/search" element={ <FilterExpensesByCategory/> }/>
            <Route path="/dates/earnings" element={<FilterByDate filter="earnings"/>}/>
            <Route path="/dates/expenses" element={<FilterByDate filter="expenses"/>}/>
            <Route path="*" element={ <NotFound/>}/>
        </Routes>
    </section>
}