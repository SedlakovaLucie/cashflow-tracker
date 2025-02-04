import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const expenses = await getExpenses();
      const incomes = await getIncomes();
      const allTransactions = [
        ...expenses.map((expense) => ({ ...expense, type: "expense" })),
        ...incomes.map((income) => ({ ...income, type: "income" })),
      ]
        .sort((a, b) => new Date(b.create_date) - new Date(a.create_date)); // Řazení od nejnovějších po nejstarší
      setTransactions(allTransactions);
      setFilteredTransactions(allTransactions);
    } catch (error) {
      console.error("Chyba při načítání transakcí:", error);
    }
  };

  const handleAdd = async (type, newItem) => {
    try {
      if (type === "expense") {
        await addData("expense", newItem);
      } else {
        await addData("income", newItem);
      }
      fetchTransactions();
    } catch (error) {
      console.error("Chyba při přidávání transakce:", error);
    }
  };

  const handleUpdate = async (type, id, updatedItem) => {
    try {
      if (type === "expense") {
        await updateData("expense", id, updatedItem);
      } else {
        await updateData("income", id, updatedItem);
      }
      fetchTransactions();
    } catch (error) {
      console.error("Chyba při aktualizaci transakce:", error);
    }
  };

  const handleDelete = async (type, id) => {
    try {
      if (type === "expense") {
        await deleteData("expense", id);
      } else if (type === "income") {
        await deleteData("income", id);
      }
      fetchTransactions();
    } catch (error) {
      console.error("Chyba při mazání transakce:", error);
    }
  };

  const calculateBalance = () => {
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
  };

  const handleFilter = (startDate, endDate) => {
    const filtered = transactions.filter((t) => {
      const date = new Date(t.create_date);
      return (
        (!startDate || date >= new Date(startDate)) &&
        (!endDate || date <= new Date(endDate))
      );
    });
    setFilteredTransactions(filtered);
  };

  const { totalExpenses, totalIncomes, balance } = calculateBalance();

  return (
    <div className="expenses-incomes-container">
      <h1>Transakce</h1>
      <Balance
        balance={balance}
        totalExpenses={totalExpenses}
        totalIncomes={totalIncomes}
      />

      <Form onAdd={handleAdd} />

      <Filter onFilter={handleFilter} />

      <List
        items={filteredTransactions}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ExpensesAndIncomes;
