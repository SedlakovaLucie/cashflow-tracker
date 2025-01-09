import { useState, useEffect } from "react";
import { getExpenses, addData, updateData, deleteData } from "../data/Repository";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [newAmount, setNewAmount] = useState("");
  const [editing, setEditing] = useState(null);
  const [updatedAmount, setUpdatedAmount] = useState("");

  const fetchExpenses = async () => {
    try {
      const data = await getExpenses();
      setExpenses(data);
    } catch (error) {
      console.error("Chyba při načítání výdajů:", error);
    }
  };

  const handleAddExpense = async () => {
    if (!newAmount) return;
    try {
      await addData("expense", { amount: parseFloat(newAmount) });
      setNewAmount("");
      fetchExpenses();
    } catch (error) {
      console.error("Chyba při přidávání výdaje:", error);
    }
  };

  const handleUpdateExpense = async () => {
    if (!updatedAmount || !editing) return;
    try {
      await updateData("expense", editing, { amount: parseFloat(updatedAmount) });
      setEditing(null);
      setUpdatedAmount("");
      fetchExpenses();
    } catch (error) {
      console.error("Chyba při aktualizaci výdaje:", error);
    }
  };

  const handleDeleteExpense = async (id) => {
    try {
      await deleteData("expense", id);
      fetchExpenses();
    } catch (error) {
      console.error("Chyba při mazání výdaje:", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div>
      <h1>Výdaje</h1>

      {/* Přidání výdaje */}
      <div>
        <input
          type="number"
          placeholder="Zadejte částku"
          value={newAmount}
          onChange={(e) => setNewAmount(e.target.value)}
        />
        <button onClick={handleAddExpense}>Přidat</button>
      </div>

      {/* Seznam výdajů */}
      <div>
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <div key={expense.id} style={{ marginBottom: "20px" }}>
              <p>
                Amount:{" "}
                {editing === expense.id ? (
                  <>
                    <input
                      type="number"
                      placeholder="Nová částka"
                      value={updatedAmount}
                      onChange={(e) => setUpdatedAmount(e.target.value)}
                    />
                    <button onClick={handleUpdateExpense}>Potvrdit</button>
                    <button onClick={() => setEditing(null)}>Zrušit</button>
                  </>
                ) : (
                  <>
                    {expense.amount}{" "}
                    <button onClick={() => setEditing(expense.id)}>
                      Upravit
                    </button>
                  </>
                )}
              </p>
              <button onClick={() => handleDeleteExpense(expense.id)}>
                Smazat
              </button>
            </div>
          ))
        ) : (
          <p>Načítání výdajů...</p>
        )}
      </div>
    </div>
  );
};

export default Expenses;
