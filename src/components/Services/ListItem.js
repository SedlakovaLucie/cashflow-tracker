import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";

const ListItem = ({ item, type, onUpdate, onDelete }) => {
  const { amount, description, create_date, id } = item;
  const [isEditing, setIsEditing] = useState(false);
  const [editedAmount, setEditedAmount] = useState(amount);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedDate, setEditedDate] = useState(new Date(create_date).toISOString().split("T")[0]);

  const handleSave = () => {
    const updatedItem = {
      amount: parseFloat(editedAmount),
      description: editedDescription,
      create_date: new Date(editedDate).toISOString(),
    };
    onUpdate(type, id, updatedItem);
    setIsEditing(false);
  };

  return (
    <div className="list-item">
      {isEditing ? (
        <>
          <div>
            <input
              type="number"
              value={editedAmount}
              onChange={(e) => setEditedAmount(e.target.value)}
              className="form-input"
            />
            <input
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              className="form-input"
            />
            <input
              type="date"
              value={editedDate}
              onChange={(e) => setEditedDate(e.target.value)}
              className="form-input"
            />
          </div>
          <div>
            <button onClick={handleSave} className="save-button">
              Uložit
            </button>
            <button onClick={() => setIsEditing(false)} className="cancel-button">
              Zrušit
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <p>Částka: {amount} Kč</p>
            <p>Popis: {description}</p>
            <p>Datum: {new Date(create_date).toLocaleDateString()}</p>
          </div>
          <div>
            <button onClick={() => setIsEditing(true)} className="edit-button">
              <FaPen />
            </button>
            <button onClick={() => onDelete(type, id)} className="delete-button">
              <MdDelete />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
