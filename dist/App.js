"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var buttonDemo_1 = __importDefault(require("./demo/buttonDemo"));
// import DemoInput from './demo/inputDemo';
var modalDemo_1 = __importDefault(require("./demo/modalDemo"));
var radioDemo_1 = __importDefault(require("./demo/radioDemo"));
var progressDemo_1 = __importDefault(require("./demo/progressDemo"));
var tagDemo_1 = __importDefault(require("./demo/tagDemo"));
var selectDemo_1 = __importDefault(require("./demo/selectDemo"));
function App() {
    return (react_1.default.createElement("div", { style: { display: 'flex', flexDirection: 'column' } },
        react_1.default.createElement(buttonDemo_1.default, null),
        react_1.default.createElement("div", { style: { marginBottom: '60px' } }),
        react_1.default.createElement(modalDemo_1.default, null),
        react_1.default.createElement("div", { style: { marginBottom: '60px' } }),
        react_1.default.createElement(radioDemo_1.default, null),
        react_1.default.createElement("div", { style: { marginBottom: '60px' } }),
        react_1.default.createElement(progressDemo_1.default, null),
        react_1.default.createElement("div", { style: { marginBottom: '60px' } }),
        react_1.default.createElement(tagDemo_1.default, null),
        react_1.default.createElement("div", { style: { marginBottom: '60px' } }),
        react_1.default.createElement(selectDemo_1.default, null)));
}
exports.default = App;
