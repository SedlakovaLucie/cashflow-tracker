"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ListItem_1 = __importDefault(require("./ListItem"));
require("./List.css");
const pi_1 = require("react-icons/pi");
const ITEMS_PER_PAGE = 10;
const List = ({ items, onUpdate, onDelete }) => {
    const [currentPage, setCurrentPage] = (0, react_1.useState)(1);
    const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const visibleItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "list", children: [visibleItems.length > 0 ? (visibleItems.map((item) => ((0, jsx_runtime_1.jsx)(ListItem_1.default, { item: item, type: item.type, onUpdate: onUpdate, onDelete: onDelete }, item.id)))) : ((0, jsx_runtime_1.jsxs)("div", { className: "empty-message", children: [(0, jsx_runtime_1.jsx)(pi_1.PiEmptyBold, {}), (0, jsx_runtime_1.jsx)("p", { children: "Ve zvolen\u00E9m obdob\u00ED nejsou \u017E\u00E1dn\u00E9 z\u00E1znamy." })] })), totalPages > 1 && visibleItems.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: "pagination", children: Array.from({ length: totalPages }, (_, i) => ((0, jsx_runtime_1.jsx)("button", { onClick: () => handlePageChange(i + 1), className: currentPage === i + 1 ? "active" : "", children: i + 1 }, i + 1))) }))] }));
};
exports.default = List;
