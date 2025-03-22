import "./HomePage.css"
import ExpensesAndIncomes from "../components/Services/ExpensesAndIncomes";

const HomePage: React.FC = () => {
  return (
    <div className="transactions-wrapper">
      <ExpensesAndIncomes/>
    </div>
  );
};

export default HomePage;
