import React, { useState, useEffect, useCallback, useMemo } from "react";
import Balance from "./Balance/Balance";
import Form from "./Form/Form";
import List from "./List/List";
import Filter from "./Filter/Filter";
import {
  getExpenses,
  getIncomes,
  addData,
  updateData,
  deleteData,
} from "../data/Repository";
import "./ExpensesAndIncomes.css";

const ExpensesAndIncomes = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const fetchTransactions = useCallback(async () => {
    try {
      const expenses = await getExpenses();
      const incomes = await getIncomes();
      const allTransactions = [
        ...expenses.map((expense) => ({ ...expense, type: "expense" })),
        ...incomes.map((income) => ({ ...income, type: "income" })),
      ].sort((a, b) => new Date(b.create_date) - new Date(a.create_date));

      setTransactions(allTransactions);
      setFilteredTransactions(allTransactions);
    } catch (error) {
      console.error("Chyba při načítání transakcí:", error);
    }
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]); 

  const handleAdd = useCallback(async (type, newItem) => {
    try {
      await addData(type, newItem);
      fetchTransactions();
    } catch (error) {
      console.error("Chyba při přidávání transakce:", error);
    }
  }, [fetchTransactions]);

  const handleUpdate = useCallback(async (type, id, updatedItem) => {
    try {
      await updateData(type, id, updatedItem);
      fetchTransactions();
    } catch (error) {
      console.error("Chyba při aktualizaci transakce:", error);
    }
  }, [fetchTransactions]);

  const handleDelete = useCallback(async (type, id) => {
    try {
      await deleteData(type, id);
      fetchTransactions();
    } catch (error) {
      console.error("Chyba při mazání transakce:", error);
    }
  }, [fetchTransactions]);

  const balanceData = useMemo(() => {
    const totalExpenses = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);
    const totalIncomes = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      totalExpenses,
      totalIncomes,
      balance: totalIncomes - totalExpenses,
    };
  }, [transactions]);

  const handleFilter = useCallback((startDate, endDate) => {
    setFilteredTransactions(
      transactions.filter((t) => {
        const date = new Date(t.create_date);
        return (
          (!startDate || date >= new Date(startDate)) &&
          (!endDate || date <= new Date(endDate))
        );
      })
    );
  }, [transactions]);

  return (
    <div className="expenses-incomes-container">
      <h1>Transakce</h1>
      <Balance {...balanceData} />
      <Form onAdd={handleAdd} />
      <Filter onFilter={handleFilter} />
      <List items={filteredTransactions} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
};

export default ExpensesAndIncomes;
