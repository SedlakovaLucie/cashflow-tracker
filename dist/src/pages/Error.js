"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./Error.css");
const react_router_dom_1 = require("react-router-dom");
const Error = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "error-container", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Str\u00E1nka nenalezena" }), (0, jsx_runtime_1.jsx)("p", { children: "Omlouv\u00E1me se, ale str\u00E1nka, kterou hled\u00E1te, neexistuje." }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", className: "error-button", children: "Zp\u011Bt na hlavn\u00ED str\u00E1nku" })] }));
};
exports.default = Error;
