"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./HomePage.css");
const ExpensesAndIncomes_1 = __importDefault(require("../components/Services/ExpensesAndIncomes"));
const HomePage = () => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "transactions-wrapper", children: (0, jsx_runtime_1.jsx)(ExpensesAndIncomes_1.default, {}) }));
};
exports.default = HomePage;
