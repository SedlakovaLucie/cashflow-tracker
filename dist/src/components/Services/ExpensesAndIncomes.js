"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Balance_1 = __importDefault(require("./Balance/Balance"));
const Form_1 = __importDefault(require("./Form/Form"));
const List_1 = __importDefault(require("./List/List"));
const Filter_1 = __importDefault(require("./Filter/Filter"));
const Repository_1 = require("../data/Repository");
require("./ExpensesAndIncomes.css");
const ExpensesAndIncomes = () => {
    const [transactions, setTransactions] = (0, react_1.useState)([]);
    const [filteredTransactions, setFilteredTransactions] = (0, react_1.useState)([]);
    const fetchTransactions = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const expenses = yield (0, Repository_1.getExpenses)();
            const incomes = yield (0, Repository_1.getIncomes)();
            const allTransactions = [
                ...expenses.map((expense) => (Object.assign(Object.assign({}, expense), { type: "expense" }))),
                ...incomes.map((income) => (Object.assign(Object.assign({}, income), { type: "income" }))),
            ].sort((a, b) => new Date(b.create_date).getTime() - new Date(a.create_date).getTime());
            setTransactions(allTransactions);
            setFilteredTransactions(allTransactions);
        }
        catch (error) {
            console.error("Chyba při načítání transakcí:", error);
        }
    }), []);
    (0, react_1.useEffect)(() => {
        fetchTransactions();
    }, [fetchTransactions]);
    const handleAdd = (0, react_1.useCallback)((type, newItem) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield (0, Repository_1.addData)(type, newItem);
            fetchTransactions();
        }
        catch (error) {
            console.error("Chyba při přidávání transakce:", error);
        }
    }), [fetchTransactions]);
    const handleUpdate = (0, react_1.useCallback)((type, id, updatedItem) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield (0, Repository_1.updateData)(type, id, updatedItem);
            fetchTransactions();
        }
        catch (error) {
            console.error("Chyba při aktualizaci transakce:", error);
        }
    }), [fetchTransactions]);
    const handleDelete = (0, react_1.useCallback)((type, id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield (0, Repository_1.deleteData)(type, id);
            fetchTransactions();
        }
        catch (error) {
            console.error("Chyba při mazání transakce:", error);
        }
    }), [fetchTransactions]);
    const balanceData = (0, react_1.useMemo)(() => {
        const totalExpenses = transactions
            .filter((t) => t.type === "expense")
            .reduce((sum, t) => sum + t.amount, 0);
        const totalIncomes = transactions
            .filter((t) => t.type === "income")
            .reduce((sum, t) => sum + t.amount, 0);
        return {
            totalExpenses,
            totalIncomes,
            balance: totalIncomes - totalExpenses,
        };
    }, [transactions]);
    const handleFilter = (0, react_1.useCallback)((startDate, endDate) => {
        setFilteredTransactions(transactions.filter((t) => {
            const date = new Date(t.create_date);
            return ((!startDate || date >= new Date(startDate)) &&
                (!endDate || date <= new Date(endDate)));
        }));
    }, [transactions]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "expenses-incomes-container", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Transakce" }), (0, jsx_runtime_1.jsx)(Balance_1.default, Object.assign({}, balanceData)), (0, jsx_runtime_1.jsx)(Form_1.default, { onAdd: handleAdd }), (0, jsx_runtime_1.jsx)(Filter_1.default, { onFilter: handleFilter }), (0, jsx_runtime_1.jsx)(List_1.default, { items: filteredTransactions, onUpdate: handleUpdate, onDelete: handleDelete })] }));
};
exports.default = ExpensesAndIncomes;
