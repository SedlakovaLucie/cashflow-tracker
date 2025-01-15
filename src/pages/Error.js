import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <h1>Stránka nenalezena</h1>
      <p>Omlouváme se, ale stránka, kterou hledáte, neexistuje.</p>
      <Link to="/" className="error-button">
        Zpět na hlavní stránku
      </Link>
    </div>
  );
};

export default Error;
