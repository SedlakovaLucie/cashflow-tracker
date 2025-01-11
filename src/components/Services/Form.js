import { useState } from "react";

const Form = ({ onAdd }) => {
  const [newAmount, setNewAmount] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDate, setNewDate] = useState("");
  const [selectedType, setSelectedType] = useState("expense");

  const handleSubmit = () => {
    if (!newAmount || !newDescription || !newDate) return;

    const newItem = {
      amount: parseFloat(newAmount),
      description: newDescription,
      create_date: new Date(newDate).toISOString(),
    };

    onAdd(selectedType, newItem);

    setNewAmount("");
    setNewDescription("");
    setNewDate("");
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
      <input
        type="number"
        placeholder="Zadejte částku"
        value={newAmount}
        onChange={(e) => setNewAmount(e.target.value)}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Zadejte popis"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        className="form-input"
      />
      <input
        type="date"
        value={newDate}
        onChange={(e) => setNewDate(e.target.value)}
        className="form-input"
      />
      <button onClick={handleSubmit} className="form-button">
        Přidat
      </button>
    </div>
  );
};

export default Form;
