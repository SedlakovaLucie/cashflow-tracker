import { getIncomes, getExpenses } from "../components/FirebaseService";
import { useState, useEffect } from "react";

const GetData = () => {
  const [allIncomes, setAllIncomes] = useState([]);
  const [allExpenses, setAllExpenses] = useState([]);

  // Použití metod z FirebaseService
  const fetchData = async () => {
    try {
      const incomes = await getIncomes();
      setAllIncomes(incomes);

      const expenses = await getExpenses();
      setAllExpenses(expenses);
    } catch (error) {
      console.error("Chyba při načítání dat:", error);
    }
  };

  useEffect(() => {
    fetchData();
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

export default GetData;
