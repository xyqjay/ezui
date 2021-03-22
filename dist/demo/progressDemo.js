"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = require("../components/index");
function DemoRadio() {
    return (react_1.default.createElement("div", { className: "App", style: { display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: 'center' } },
        react_1.default.createElement("div", { style: { display: 'flex', flexDirection: "column" } },
            react_1.default.createElement("div", null, "9\u3001\u8FDB\u5EA6"),
            react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column" } },
                react_1.default.createElement("div", { className: "big", style: { display: "flex", alignItems: "center" } },
                    react_1.default.createElement(index_1.Progress, null))))));
}
exports.default = DemoRadio;
