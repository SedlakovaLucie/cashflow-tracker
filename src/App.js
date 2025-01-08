import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import { useState, useEffect } from "react";

const App = () => {
  const [allIncomes, setAllIncomes] = useState([]);
  const [allExpenses, setAllExpenses] = useState([]);
  const incomeCollectionRef = collection(db, "income");
  const expenseCollectionRef = collection(db, "expense");

  // Funkce pro načtení příjmů
  const getIncomes = async () => {
    try {
      const data = await getDocs(incomeCollectionRef);
      const incomes = data.docs.map((oneDoc) => {
        return {
          ...oneDoc.data(),
          id: oneDoc.id,
        };
      });
      setAllIncomes(incomes);
    } catch (error) {
      console.error("Chyba při načítání příjmů:", error);
    }
  };

  // Funkce pro načtení výdajů
  const getExpenses = async () => {
    try {
      const data = await getDocs(expenseCollectionRef);
      const expenses = data.docs.map((oneDoc) => {
        return {
          ...oneDoc.data(),
          id: oneDoc.id,
        };
      });
      setAllExpenses(expenses);
    } catch (error) {
      console.error("Chyba při načítání výdajů:", error);
    }
  };

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <section>
      <div>
        <h2>Příjmy</h2>
        {allIncomes.length > 0 ? (
          allIncomes.map((oneIncome) => {
            const { id, amount } = oneIncome;
            return (
              <div key={id}>
                <p>Amount: {amount}</p>
              </div>
            );
          })
        ) : (
          <p>Načítání příjmů...</p>
        )}
      </div>
      <div>
        <h2>Výdaje</h2>
        {allExpenses.length > 0 ? (
          allExpenses.map((oneExpense) => {
            const { id, amount } = oneExpense;
            return (
              <div key={id}>
                <p>Amount: {amount}</p>
              </div>
            );
          })
        ) : (
          <p>Načítání výdajů...</p>
        )}
      </div>
    </section>
  );
};

export default App;
