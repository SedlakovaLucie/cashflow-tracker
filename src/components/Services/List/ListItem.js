import { useReducer } from "react";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import "./ListItem.css";

const actionTypes = {
  TOGGLE_EDIT: "TOGGLE_EDIT",
  TOGGLE_MODAL: "TOGGLE_MODAL",
  UPDATE_FIELD: "UPDATE_FIELD",
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_EDIT:
      return { ...state, isEditing: !state.isEditing };
    case actionTypes.TOGGLE_MODAL:
      return { ...state, isModalOpen: !state.isModalOpen };
    case actionTypes.UPDATE_FIELD:
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const ListItem = ({ item, type, onUpdate, onDelete }) => {
  const { amount, description, create_date, id } = item;

  // Reducer default
  const [state, dispatch] = useReducer(reducer, {
    isEditing: false,
    isModalOpen: false,
    editedAmount: amount,
    editedDescription: description,
    editedDate: new Date(create_date).toISOString().split("T")[0],
  });

  const handleSave = () => {
    const updatedItem = {
      amount: parseFloat(state.editedAmount),
      description: state.editedDescription,
      create_date: new Date(state.editedDate).toISOString(),
    };
    onUpdate(type, id, updatedItem);
    dispatch({ type: actionTypes.TOGGLE_EDIT });
  };

  const handleDelete = () => {
    onDelete(type, id);
    dispatch({ type: actionTypes.TOGGLE_MODAL });
  };

  return (
    <div className={`list-item ${state.isEditing ? "editing" : ""}`}>
      {state.isEditing ? (
        <>
          <div className="edit-fields">
            <input
              type="number"
              value={state.editedAmount}
              onChange={(e) =>
                dispatch({
                  type: actionTypes.UPDATE_FIELD,
                  field: "editedAmount",
                  value: e.target.value,
                })
              }
              className="form-input"
              placeholder="Částka"
            />
            <input
              type="text"
              value={state.editedDescription}
              onChange={(e) =>
                dispatch({
                  type: actionTypes.UPDATE_FIELD,
                  field: "editedDescription",
                  value: e.target.value,
                })
              }
              className="form-input"
              placeholder="Popis"
            />
            <input
              type="date"
              value={state.editedDate}
              onChange={(e) =>
                dispatch({
                  type: actionTypes.UPDATE_FIELD,
                  field: "editedDate",
                  value: e.target.value,
                })
              }
              className="form-input"
            />
          </div>
          <div className="button-container">
            <button
              onClick={() => dispatch({ type: actionTypes.TOGGLE_EDIT })}
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
            <button
              onClick={() => dispatch({ type: actionTypes.TOGGLE_EDIT })}
              className="edit-button"
            >
              <FaPen className="edit-icon" />
            </button>
            <button
              onClick={() => dispatch({ type: actionTypes.TOGGLE_MODAL })}
              className="delete-button"
            >
              <MdDelete className="delete-icon" />
            </button>
            {state.isModalOpen && (
              <div className="modal-small">
                <p>Opravdu chcete smazat tuto položku?</p>
                <div className="modal-buttons">
                  <button
                    onClick={() => dispatch({ type: actionTypes.TOGGLE_MODAL })}
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
