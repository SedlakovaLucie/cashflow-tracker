"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./Form.css");
const react_1 = require("react");
const actionTypes = {
    UPDATE_FIELD: "UPDATE_FIELD",
    SET_ERRORS: "SET_ERRORS",
    RESET_FORM: "RESET_FORM",
};
// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_FIELD":
            return Object.assign(Object.assign({}, state), { [action.field]: action.value });
        case "SET_ERRORS":
            return Object.assign(Object.assign({}, state), { errors: action.errors });
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
const Form = ({ onAdd }) => {
    const [state, dispatch] = (0, react_1.useReducer)(reducer, {
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
        }
        else if (isNaN(Number(state.newAmount))) {
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
        const newItem = {
            amount: parseFloat(state.newAmount),
            description: state.newDescription,
            create_date: new Date(state.newDate).toISOString(),
        };
        onAdd(state.selectedType, newItem);
        dispatch({ type: actionTypes.RESET_FORM });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "form-container", children: [(0, jsx_runtime_1.jsxs)("select", { value: state.selectedType, onChange: (e) => dispatch({
                    type: actionTypes.UPDATE_FIELD,
                    field: "selectedType",
                    value: e.target.value,
                }), className: "form-select", children: [(0, jsx_runtime_1.jsx)("option", { value: "expense", children: "V\u00FDdej" }), (0, jsx_runtime_1.jsx)("option", { value: "income", children: "P\u0159\u00EDjem" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "form-field", children: [(0, jsx_runtime_1.jsx)("input", { type: "number", placeholder: "Zadejte \u010D\u00E1stku", value: state.newAmount, onChange: (e) => dispatch({
                            type: actionTypes.UPDATE_FIELD,
                            field: "newAmount",
                            value: e.target.value,
                        }), className: `form-input ${state.errors.amount ? "error-border" : ""}` }), state.errors.amount && ((0, jsx_runtime_1.jsx)("p", { className: "error-message", children: state.errors.amount }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "form-field", children: [(0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Zadejte popis", value: state.newDescription, onChange: (e) => dispatch({
                            type: actionTypes.UPDATE_FIELD,
                            field: "newDescription",
                            value: e.target.value,
                        }), className: `form-input ${state.errors.description ? "error-border" : ""}` }), state.errors.description && ((0, jsx_runtime_1.jsx)("p", { className: "error-message", children: state.errors.description }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "form-field", children: [(0, jsx_runtime_1.jsx)("input", { type: "date", value: state.newDate, onChange: (e) => dispatch({
                            type: actionTypes.UPDATE_FIELD,
                            field: "newDate",
                            value: e.target.value,
                        }), className: `form-input ${state.errors.date ? "error-border" : ""}` }), state.errors.date && ((0, jsx_runtime_1.jsx)("p", { className: "error-message", children: state.errors.date }))] }), (0, jsx_runtime_1.jsx)("button", { onClick: handleSubmit, className: "form-button", children: "P\u0159idat" })] }));
};
exports.default = Form;
