import React from "react";
import { Header } from './components/header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransactions } from './components/AddTransactions';

import { GlobalProvider } from "./context/GlobalState";

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div class="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransactions />
      </div>
    </GlobalProvider>
  );
}

export default App;
