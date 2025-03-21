import "./Form.css";
import { useReducer, ChangeEvent } from "react";
import {FormProps, TransactionItem, FormState, FormAction} from "../../../types"

const actionTypes = {
  UPDATE_FIELD: "UPDATE_FIELD",
  SET_ERRORS: "SET_ERRORS",
  RESET_FORM: "RESET_FORM",
} as const;

// Reducer
const reducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };

    case "SET_ERRORS":
      return { ...state, errors: action.errors };

    case "RESET_FORM":
      return {
        newAmount: "",
        newDescription: "",
        newDate: "",
        selectedType: "expense",
        errors: { amount: "", description: "", date: "" },
      };

    default:
      return state;
  }
};

const Form: React.FC<FormProps> = ({ onAdd }) => {
  const [state, dispatch] = useReducer(reducer, {
    newAmount: "",
    newDescription: "",
    newDate: "",
    selectedType: "expense",
    errors: { amount: "", description: "", date: "" },
  });

  const handleSubmit = () => {
    let hasError = false;
    const newErrors = { amount: "", description: "", date: "" };

    if (!state.newAmount) {
      newErrors.amount = "Částka je povinná";
      hasError = true;
    } else if (isNaN(Number(state.newAmount))) {
      newErrors.amount = "Částka musí být číslo";
      hasError = true;
    }

    if (!state.newDescription) {
      newErrors.description = "Popis je povinný";
      hasError = true;
    }

    if (!state.newDate) {
      newErrors.date = "Datum je povinné";
      hasError = true;
    }

    if (hasError) {
      dispatch({ type: actionTypes.SET_ERRORS, errors: newErrors });
      return;
    }

    const newItem: TransactionItem = {
      amount: parseFloat(state.newAmount),
      description: state.newDescription,
      create_date: new Date(state.newDate).toISOString(),
    };

    onAdd(state.selectedType, newItem);
    dispatch({ type: actionTypes.RESET_FORM });
  };

  return (
    <div className="form-container">
      <select
        value={state.selectedType}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          dispatch({
            type: actionTypes.UPDATE_FIELD,
            field: "selectedType",
            value: e.target.value,
          })
        }
        className="form-select"
      >
        <option value="expense">Výdej</option>
        <option value="income">Příjem</option>
      </select>

      <div className="form-field">
        <input
          type="number"
          placeholder="Zadejte částku"
          value={state.newAmount}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: actionTypes.UPDATE_FIELD,
              field: "newAmount",
              value: e.target.value,
            })
          }
          className={`form-input ${state.errors.amount ? "error-border" : ""}`}
        />
        {state.errors.amount && (
          <p className="error-message">{state.errors.amount}</p>
        )}
      </div>

      <div className="form-field">
        <input
          type="text"
          placeholder="Zadejte popis"
          value={state.newDescription}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: actionTypes.UPDATE_FIELD,
              field: "newDescription",
              value: e.target.value,
            })
          }
          className={`form-input ${state.errors.description ? "error-border" : ""}`}
        />
        {state.errors.description && (
          <p className="error-message">{state.errors.description}</p>
        )}
      </div>

      <div className="form-field">
        <input
          type="date"
          value={state.newDate}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: actionTypes.UPDATE_FIELD,
              field: "newDate",
              value: e.target.value,
            })
          }
          className={`form-input ${state.errors.date ? "error-border" : ""}`}
        />
        {state.errors.date && (
          <p className="error-message">{state.errors.date}</p>
        )}
      </div>

      <button onClick={handleSubmit} className="form-button">
        Přidat
      </button>
    </div>
  );
};

export default Form;
