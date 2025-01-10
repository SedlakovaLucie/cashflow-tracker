import "./HomePage.css"
import Incomes from "../components/Services/Expenses";
import Expenses from "../components/Services/Incomes";

const HomePage = () => {
  return (
    <div className="transactions-wrapper">
      <Incomes />
      <Expenses />
    </div>
  );
};

export default HomePage;
