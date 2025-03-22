"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./Filter.css");
const react_1 = require("react");
const fa_1 = require("react-icons/fa");
const Filter = ({ onFilter }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [startDate, setStartDate] = (0, react_1.useState)("");
    const [endDate, setEndDate] = (0, react_1.useState)("");
    const filterRef = (0, react_1.useRef)(null);
    const handleClickOutside = (event) => {
        if (filterRef.current && event.target instanceof Node && !filterRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    (0, react_1.useEffect)(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "filter-block", ref: filterRef, children: [(0, jsx_runtime_1.jsx)("div", { className: "filter-header", children: (0, jsx_runtime_1.jsx)(fa_1.FaFilter, { className: "filter-icon", onClick: () => setIsOpen((prev) => !prev) }) }), isOpen && ((0, jsx_runtime_1.jsxs)("div", { className: "filter-container", children: [(0, jsx_runtime_1.jsx)("h3", { children: "Filtr podle obdob\u00ED" }), (0, jsx_runtime_1.jsxs)("div", { className: "filter-fields", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { children: "Od:" }), (0, jsx_runtime_1.jsx)("input", { type: "date", value: startDate, onChange: (e) => setStartDate(e.target.value) })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { children: "Do:" }), (0, jsx_runtime_1.jsx)("input", { type: "date", value: endDate, onChange: (e) => setEndDate(e.target.value) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "filter-buttons", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => { setStartDate(""); setEndDate(""); onFilter("", ""); setIsOpen(false); }, className: "reset-button", children: "Zru\u0161it" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => { onFilter(startDate, endDate); setIsOpen(false); }, children: "Filtruj" })] })] }))] }));
};
exports.default = Filter;
