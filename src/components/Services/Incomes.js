import { useState, useEffect } from "react";
import { getIncomes, addData, updateData, deleteData } from "../data/Repository";

const Incomes = () => {
  const [incomes, setIncomes] = useState([]);
  const [newAmount, setNewAmount] = useState("");

  // Načtení příjmů
  const fetchIncomes = async () => {
    try {
      const data = await getIncomes();
      setIncomes(data);
    } catch (error) {
      console.error("Chyba při načítání příjmů:", error);
    }
  };

  // Přidání příjmu
  const handleAddIncome = async () => {
    if (!newAmount) return;
    try {
      await addData("income", { amount: parseFloat(newAmount) });
      setNewAmount(""); // Vymaže vstupní pole
      fetchIncomes();
    } catch (error) {
      console.error("Chyba při přidávání příjmu:", error);
    }
  };

  // Aktualizace příjmu
  const handleUpdateIncome = async (id, updatedAmount) => {
    try {
      await updateData("income", id, { amount: parseFloat(updatedAmount) });
      fetchIncomes();
    } catch (error) {
      console.error("Chyba při aktualizaci příjmu:", error);
    }
  };

  // Mazání příjmu
  const handleDeleteIncome = async (id) => {
    try {
      await deleteData("income", id);
      fetchIncomes();
    } catch (error) {
      console.error("Chyba při mazání příjmu:", error);
    }
  };

  useEffect(() => {
    fetchIncomes();
  }, []);

  return (
    <div>
      <h1>Příjmy</h1>

      {/* Přidání příjmu */}
      <div>
        <input
          type="number"
          placeholder="Zadejte částku"
          value={newAmount}
          onChange={(e) => setNewAmount(e.target.value)}
        />
        <button onClick={handleAddIncome}>Přidat</button>
      </div>

      {/* Seznam příjmů */}
      <div>
        {incomes.length > 0 ? (
          incomes.map((income) => (
            <div key={income.id} style={{ marginBottom: "20px" }}>
              <p>Amount: {income.amount}</p>
              <input
                type="number"
                placeholder="Nová částka"
                onBlur={(e) => handleUpdateIncome(income.id, e.target.value)}
              />
              <button onClick={() => handleDeleteIncome(income.id)}>
                Smazat
              </button>
            </div>
          ))
        ) : (
          <p>Načítání příjmů...</p>
        )}
      </div>
    </div>
  );
};

export default Incomes;
