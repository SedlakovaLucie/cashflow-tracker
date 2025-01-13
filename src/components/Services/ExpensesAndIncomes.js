import React, { useState, useEffect } from "react";
import Balance from "./Balance";
import Form from "./Form";
import List from "./List";
import { getExpenses, getIncomes, addData, updateData, deleteData } from "../data/Repository";
import "./ExpensesAndIncomes.css";

const ExpensesAndIncomes = () => {
  const [transactions, setTransactions] = useState([]);

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

  const { totalExpenses, totalIncomes, balance } = calculateBalance();

  return (
    <div className="expenses-incomes-container">
      <h1>Transakce</h1>
      <Balance balance={balance} totalExpenses={totalExpenses} totalIncomes={totalIncomes} />

      <Form onAdd={handleAdd} />

      <List items={transactions} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
};

export default ExpensesAndIncomes;
