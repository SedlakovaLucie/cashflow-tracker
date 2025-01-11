import "./ExpensesAndIncomes.css";
import { useState, useEffect } from "react";
import { getExpenses, getIncomes, addData, updateData, deleteData } from "../data/Repository";
import Balance from "./Balance";
import Form from "./Form";
import List from "./List";

const ExpensesAndIncomes = () => {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    fetchExpenses();
    fetchIncomes();
  }, []);

  const fetchExpenses = async () => {
    const data = await getExpenses();
    setExpenses(data);
  };

  const fetchIncomes = async () => {
    const data = await getIncomes();
    setIncomes(data);
  };

  const handleAdd = async (type, item) => {
    try {
      if (type === "expense") {
        await addData("expense", item);
        fetchExpenses();
      } else {
        await addData("income", item);
        fetchIncomes();
      }
    } catch (error) {
      console.error("Error adding item:", error);
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
      console.error("Error updating item:", error);
    }
  };

  const handleDelete = async (type, id) => {
    try {
      if (type === "expense") {
        await deleteData("expense", id);
        fetchExpenses();
      } else {
        await deleteData("income", id);
        fetchIncomes();
      }
    } catch (error) {
      console.error("Error deleting item:", error);
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
      <Form onAdd={handleAdd} />
      <List
        incomes={incomes}
        expenses={expenses}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ExpensesAndIncomes;
