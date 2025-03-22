import "./Balance.css";
import { BalanceProps } from "../../../types";

const Balance: React.FC<BalanceProps> = ({ balance, totalExpenses, totalIncomes }) => {
  const isNegative = balance < 0;

  return (
    <div
      className={`balance-container ${
        isNegative ? "negative-border negative" : "positive-border"
      }`}
    >
      <p>Aktuální stav konta: {balance} Kč</p>
      <p>Celkový příjem: {totalIncomes} Kč</p>
      <p>Celkový výdej: {totalExpenses} Kč</p>
    </div>
  );
};

export default Balance;
