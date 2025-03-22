"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./Balance.css");
const Balance = ({ balance, totalExpenses, totalIncomes }) => {
    const isNegative = balance < 0;
    return ((0, jsx_runtime_1.jsxs)("div", { className: `balance-container ${isNegative ? "negative-border negative" : "positive-border"}`, children: [(0, jsx_runtime_1.jsxs)("p", { children: ["Aktu\u00E1ln\u00ED stav konta: ", balance, " K\u010D"] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Celkov\u00FD p\u0159\u00EDjem: ", totalIncomes, " K\u010D"] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Celkov\u00FD v\u00FDdej: ", totalExpenses, " K\u010D"] })] }));
};
exports.default = Balance;
