"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./MainLayout.css");
const react_router_dom_1 = require("react-router-dom");
const Navbar_1 = __importDefault(require("../components/shared/Navbar"));
const Footer_1 = __importDefault(require("../components/shared/Footer"));
const MainLayout = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "main-layout", children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "main-content", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}) }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = MainLayout;
