import { useState, useEffect } from "react";
import { getIncomes, addData, updateData, deleteData } from "../data/Repository";

const Incomes = () => {
  const [incomes, setIncomes] = useState([]);
  const [newAmount, setNewAmount] = useState("");
  const [editing, setEditing] = useState(null); // ID příjmu, který se právě upravuje
  const [updatedAmount, setUpdatedAmount] = useState(""); // Nová částka při úpravě

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
      setNewAmount("");
      fetchIncomes();
    } catch (error) {
      console.error("Chyba při přidávání příjmu:", error);
    }
  };

  // Aktualizace příjmu
  const handleUpdateIncome = async () => {
    if (!updatedAmount || !editing) return;
    try {
      await updateData("income", editing, { amount: parseFloat(updatedAmount) });
      setEditing(null);
      setUpdatedAmount("");
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
              <p>
                Amount:{" "}
                {editing === income.id ? (
                  <>
                    <input
                      type="number"
                      placeholder="Nová částka"
                      value={updatedAmount}
                      onChange={(e) => setUpdatedAmount(e.target.value)}
                    />
                    <button onClick={handleUpdateIncome}>Potvrdit</button>
                    <button onClick={() => setEditing(null)}>Zrušit</button>
                  </>
                ) : (
                  <>
                    {income.amount}{" "}
                    <button onClick={() => setEditing(income.id)}>
                      Upravit
                    </button>
                  </>
                )}
              </p>
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
