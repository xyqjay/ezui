"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = require("../components/index");
var index_2 = require("../components/index");
function DemoRadio() {
    return (react_1.default.createElement("div", { className: "App", style: { display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: 'center' } },
        react_1.default.createElement("div", { style: { display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center" } },
            react_1.default.createElement("div", null, "8\u3001radio\u9009\u62E9"),
            react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column" } },
                react_1.default.createElement("div", { className: "big", style: { display: "flex", alignItems: "center" } },
                    react_1.default.createElement(index_1.Radio, { checked: true }, "option1"),
                    react_1.default.createElement(index_1.Radio, null, "option2"),
                    react_1.default.createElement(index_1.Radio, { disabled: true }, "option3"),
                    react_1.default.createElement(index_1.Radio, { disabled: true, checked: true }, "option4")))),
        react_1.default.createElement("div", { style: { display: 'flex', flexDirection: "column" } },
            react_1.default.createElement("div", null, "\u591A\u9879\u9009\u62E9"),
            react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column" } },
                react_1.default.createElement("div", { className: "big", style: { display: "flex", alignItems: "center" } },
                    react_1.default.createElement(index_2.CheckBox, { checked: true }, "option1"),
                    react_1.default.createElement(index_2.CheckBox, null, "option2"),
                    react_1.default.createElement(index_2.CheckBox, { disabled: true }, "option3"),
                    react_1.default.createElement(index_2.CheckBox, { disabled: true, checked: true }, "option3"))))));
}
exports.default = DemoRadio;
