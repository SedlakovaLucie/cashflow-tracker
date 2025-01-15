import "./Form.css";
import { useState } from "react";

const Form = ({ onAdd }) => {
  const [newAmount, setNewAmount] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDate, setNewDate] = useState("");
  const [selectedType, setSelectedType] = useState("expense");

  const [errors, setErrors] = useState({
    amount: "",
    description: "",
    date: "",
  });

  const handleSubmit = () => {
    let hasError = false;
    const newErrors = {
      amount: "",
      description: "",
      date: "",
    };

    if (!newAmount) {
      newErrors.amount = "Částka je povinná";
      hasError = true;
    } else if (isNaN(newAmount)) {
      newErrors.amount = "Částka musí být číslo";
      hasError = true;
    }

    if (!newDescription) {
      newErrors.description = "Popis je povinný";
      hasError = true;
    }

    if (!newDate) {
      newErrors.date = "Datum je povinné";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    const newItem = {
      amount: parseFloat(newAmount),
      description: newDescription,
      create_date: new Date(newDate).toISOString(),
    };

    onAdd(selectedType, newItem);

    setNewAmount("");
    setNewDescription("");
    setNewDate("");
    setErrors({
      amount: "",
      description: "",
      date: "",
    });
  };

  return (
    <div className="form-container">
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="form-select"
      >
        <option value="expense">Výdej</option>
        <option value="income">Příjem</option>
      </select>

      <div className="form-field">
        <input
          type="number"
          placeholder="Zadejte částku"
          value={newAmount}
          onChange={(e) => setNewAmount(e.target.value)}
          className={`form-input ${errors.amount ? "error-border" : ""}`}
        />
        {errors.amount && <p className="error-message">{errors.amount}</p>}
      </div>

      <div className="form-field">
        <input
          type="text"
          placeholder="Zadejte popis"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className={`form-input ${errors.description ? "error-border" : ""}`}
        />
        {errors.description && <p className="error-message">{errors.description}</p>}
      </div>

      <div className="form-field">
        <input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          className={`form-input ${errors.date ? "error-border" : ""}`}
        />
        {errors.date && <p className="error-message">{errors.date}</p>}
      </div>

      <button onClick={handleSubmit} className="form-button">
        Přidat
      </button>
    </div>
  );
};

export default Form;
