import React from 'react';
import logo from './logo.svg';
import './App.css';

import {ExpensesForm} from "./components/ExpensesForm/ExpensesForm";
import {Header} from "./layout/Header/Header";
import {Container} from "./layout/Container/Container";
import {Route, Routes} from "react-router-dom";
import {ExpensesList} from "./components/ExpensesTable/ExpensesList";
import {ExpensesListByCategory} from "./components/ExpensesTable/ExpensesListByCategory";
import {ExpensesListByDate} from "./components/ExpensesTable/ExpensesListByDate";
import {EarningsList} from "./components/EarningsTable/EarningsList";
import {EarningsListByDate} from "./components/EarningsTable/EarningsListByDate";
import {EarningsForm} from "./components/EarningsForm/EarningsForm";

export const App = ()=> {
  return (
      <>
      {/*<Header/>*/}
      <Routes>
          <Route path="/expenses/search" element={ <ExpensesList/> }/>
          <Route path="/expenses/search/:category" element={ <ExpensesListByCategory/> }/>
          <Route path="/expenses/search/:startDate/:endDate" element={ <ExpensesListByDate/> }/>
          <Route path="/expenses" element={ <ExpensesForm/> }/>
          <Route path="/earnings/search" element={ <EarningsList/> }/>
          <Route path="/earnings/search/:startDate/:endDate" element={ <EarningsListByDate/> }/>
          <Route path="/earnings" element={ <EarningsForm/> }/>

      </Routes>
      </>
  )
}
