const Balance = ({ balance, totalExpenses, totalIncomes }) => {
  return (
    <div className={`balance-container ${balance >= 0 ? "positive-border" : "negative-border"}`}>
      <p>Aktuální stav konta: {balance} Kč</p>
      <p>Celkový příjem: {totalIncomes} Kč</p>
      <p>Celkový výdej: {totalExpenses} Kč</p>
    </div>
  );
};

export default Balance;
