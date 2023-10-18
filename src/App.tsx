import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./layout/Header";
import {ExpensesForm} from "./components/ExpensesForm/ExpensesForm";

export const App = ()=> {
  return (
      <>
        <Header/>
        <ExpensesForm/>
      </>
  );
}
