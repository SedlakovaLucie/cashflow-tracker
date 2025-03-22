"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./Navbar.css");
const tb_1 = require("react-icons/tb");
const Navbar = () => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "navbar-wrapper", children: (0, jsx_runtime_1.jsxs)("div", { className: "logo", children: [(0, jsx_runtime_1.jsx)(tb_1.TbArrowsDownUp, { className: "logo-icon" }), "TRACKER"] }) }));
};
exports.default = Navbar;
