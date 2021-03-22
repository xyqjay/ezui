<<<<<<< HEAD
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
=======
import React from 'react';
import DemoButton from './demo/buttonDemo';
// import DemoInput from './demo/inputDemo';
import DemoModal from './demo/modalDemo';
import DemoRadio from './demo/radioDemo';
import DemoProgress from './demo/progressDemo';
import DemoTag from './demo/tagDemo';
function App() {
    return (React.createElement("div", { style: { display: 'flex', flexDirection: 'column' } },
        React.createElement(DemoButton, null),
        React.createElement("div", { style: { marginBottom: '60px' } }),
        React.createElement(DemoModal, null),
        React.createElement("div", { style: { marginBottom: '60px' } }),
        React.createElement(DemoRadio, null),
        React.createElement("div", { style: { marginBottom: '60px' } }),
        React.createElement(DemoProgress, null),
        React.createElement("div", { style: { marginBottom: '60px' } }),
        React.createElement(DemoTag, null)));
}
export default App;
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
