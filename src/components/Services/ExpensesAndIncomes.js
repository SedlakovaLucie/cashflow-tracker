import React, { useState, useEffect } from "react";
import Balance from "./Balance";
import Form from "./Form";
import List from "./List";
import { getExpenses, getIncomes, addData, updateData, deleteData } from "../data/Repository";
import "./ExpensesAndIncomes.css";

const ExpensesAndIncomes = () => {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    fetchExpenses();
    fetchIncomes();
  }, []);

  const fetchExpenses = async () => {
    try {
      const data = await getExpenses();
      setExpenses(data);
    } catch (error) {
      console.error("Chyba při načítání výdajů:", error);
    }
  };

  const fetchIncomes = async () => {
    try {
      const data = await getIncomes();
      setIncomes(data);
    } catch (error) {
      console.error("Chyba při načítání příjmů:", error);
    }
  };

  const handleAdd = async (type, newItem) => {
    try {
      if (type === "expense") {
        await addData("expense", newItem);
        fetchExpenses();
      } else {
        await addData("income", newItem);
        fetchIncomes();
      }
    } catch (error) {
      console.error("Chyba při přidávání položky:", error);
    }
  };

  const handleUpdate = async (type, id, updatedItem) => {
    try {
      if (type === "expense") {
        await updateData("expense", id, updatedItem);
        fetchExpenses();
      } else {
        await updateData("income", id, updatedItem);
        fetchIncomes();
      }
    } catch (error) {
      console.error("Chyba při aktualizaci položky:", error);
    }
  };

  const handleDelete = async (type, id) => {
    try {
      if (type === "expense") {
        await deleteData("expense", id);
        fetchExpenses();
      } else if (type === "income") {
        await deleteData("income", id);
        fetchIncomes();
      }
    } catch (error) {
      console.error("Chyba při mazání položky:", error);
    }
  };

  const calculateBalance = () => {
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const totalIncomes = incomes.reduce((sum, income) => sum + income.amount, 0);
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

      {/* Formulář */}
      <Form onAdd={handleAdd} />

      {/* Seznam příjmů a výdajů */}
      <div className="list-container">
        <List
          title="Příjmy"
          items={incomes}
          type="income"
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
        <List
          title="Výdaje"
          items={expenses}
          type="expense"
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default ExpensesAndIncomes;
