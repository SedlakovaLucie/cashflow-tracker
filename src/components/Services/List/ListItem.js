import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import "./ListItem.css";

const ListItem = ({ item, type, onUpdate, onDelete }) => {
  const { amount, description, create_date, id } = item;
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedAmount, setEditedAmount] = useState(amount);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedDate, setEditedDate] = useState(
    new Date(create_date).toISOString().split("T")[0]
  );

  const handleSave = () => {
    const updatedItem = {
      amount: parseFloat(editedAmount),
      description: editedDescription,
      create_date: new Date(editedDate).toISOString(),
    };
    onUpdate(type, id, updatedItem);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(type, id);
    setIsModalOpen(false);
  };

  return (
    <div className={`list-item ${isEditing ? "editing" : ""}`}>
      {isEditing ? (
        <>
          <div className="edit-fields">
            <input
              type="number"
              value={editedAmount}
              onChange={(e) => setEditedAmount(e.target.value)}
              className="form-input"
              placeholder="Částka"
            />
            <input
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              className="form-input"
              placeholder="Popis"
            />
            <input
              type="date"
              value={editedDate}
              onChange={(e) => setEditedDate(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="button-container">
            <button
              onClick={() => setIsEditing(false)}
              className="cancel-button"
            >
              Zrušit
            </button>
            <button onClick={handleSave} className="save-button">
              Uložit
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <p>
              Částka:{" "}
              <span
                className={`amount ${
                  type === "expense" ? "expense" : "income"
                }`}
              >
                {type === "expense" ? `-` : ""}
                {amount} Kč
              </span>
            </p>
            <p>Popis: {description}</p>
            <p>Datum: {new Date(create_date).toLocaleDateString()}</p>
          </div>
          <div className="button-container">
            <button onClick={() => setIsEditing(true)} className="edit-button">
              <FaPen className="edit-icon" />
            </button>
            <button
              onClick={() => setIsModalOpen((prev) => !prev)}
              className="delete-button"
            >
              <MdDelete className="delete-icon" />
            </button>
            {isModalOpen && (
              <div className="modal-small">
                <p>Opravdu chcete smazat tuto položku?</p>
                <div className="modal-buttons">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="modal-cancel"
                  >
                    Zrušit
                  </button>
                  <button onClick={handleDelete} className="modal-confirm">
                    Ano
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
