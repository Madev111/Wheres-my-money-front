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

export const App = ()=> {
  return (
      <>
      {/*<Header/>*/}
      <Routes>
          <Route path="/expenses/search" element={ <ExpensesList/> }/>
          <Route path="/expenses/search/:category" element={ <ExpensesListByCategory/> }/>
          <Route path="/expenses/search/:startDate/:endDate" element={ <ExpensesListByDate/> }/>

      </Routes>
      </>
  )
}
