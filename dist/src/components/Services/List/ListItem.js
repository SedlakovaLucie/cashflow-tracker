"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const md_1 = require("react-icons/md");
const fa_1 = require("react-icons/fa");
require("./ListItem.css");
const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_EDIT":
            return Object.assign(Object.assign({}, state), { isEditing: !state.isEditing });
        case "TOGGLE_MODAL":
            return Object.assign(Object.assign({}, state), { isModalOpen: !state.isModalOpen });
        case "UPDATE_FIELD":
            return Object.assign(Object.assign({}, state), { [action.field]: action.value });
        default:
            return state;
    }
};
const ListItem = ({ item, type, onUpdate, onDelete, }) => {
    const { amount, description, create_date, id } = item;
    const [state, dispatch] = (0, react_1.useReducer)(reducer, {
        isEditing: false,
        isModalOpen: false,
        editedAmount: amount.toString(),
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
        dispatch({ type: "TOGGLE_EDIT" });
    };
    const handleDelete = () => {
        onDelete(type, id);
        dispatch({ type: "TOGGLE_MODAL" });
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: `list-item ${state.isEditing ? "editing" : ""}`, children: state.isEditing ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "edit-fields", children: [(0, jsx_runtime_1.jsx)("input", { type: "number", value: state.editedAmount, onChange: (e) => dispatch({
                                type: "UPDATE_FIELD",
                                field: "editedAmount",
                                value: e.target.value,
                            }), className: "form-input", placeholder: "\u010C\u00E1stka" }), (0, jsx_runtime_1.jsx)("input", { type: "text", value: state.editedDescription, onChange: (e) => dispatch({
                                type: "UPDATE_FIELD",
                                field: "editedDescription",
                                value: e.target.value,
                            }), className: "form-input", placeholder: "Popis" }), (0, jsx_runtime_1.jsx)("input", { type: "date", value: state.editedDate, onChange: (e) => dispatch({
                                type: "UPDATE_FIELD",
                                field: "editedDate",
                                value: e.target.value,
                            }), className: "form-input" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "button-container", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => dispatch({ type: "TOGGLE_EDIT" }), className: "cancel-button", children: "Zru\u0161it" }), (0, jsx_runtime_1.jsx)("button", { onClick: handleSave, className: "save-button", children: "Ulo\u017Eit" })] })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["\u010C\u00E1stka:", " ", (0, jsx_runtime_1.jsxs)("span", { className: `amount ${type === "expense" ? "expense" : "income"}`, children: [type === "expense" ? `-` : "", amount, " K\u010D"] })] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Popis: ", description] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Datum: ", new Date(create_date).toLocaleDateString()] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "button-container", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => dispatch({ type: "TOGGLE_EDIT" }), className: "edit-button", children: (0, jsx_runtime_1.jsx)(fa_1.FaPen, { className: "edit-icon" }) }), (0, jsx_runtime_1.jsx)("button", { onClick: () => dispatch({ type: "TOGGLE_MODAL" }), className: "delete-button", children: (0, jsx_runtime_1.jsx)(md_1.MdDelete, { className: "delete-icon" }) }), state.isModalOpen && ((0, jsx_runtime_1.jsxs)("div", { className: "modal-small", children: [(0, jsx_runtime_1.jsx)("p", { children: "Opravdu chcete smazat tuto polo\u017Eku?" }), (0, jsx_runtime_1.jsxs)("div", { className: "modal-buttons", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => dispatch({ type: "TOGGLE_MODAL" }), className: "modal-cancel", children: "Zru\u0161it" }), (0, jsx_runtime_1.jsx)("button", { onClick: handleDelete, className: "modal-confirm", children: "Ano" })] })] }))] })] })) }));
};
exports.default = ListItem;
