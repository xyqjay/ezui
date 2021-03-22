<<<<<<< HEAD
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
require("./index.css");
var App_1 = __importDefault(require("./App"));
var reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
react_dom_1.default.render(
// <React.StrictMode>
react_1.default.createElement(App_1.default, null)
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
// <React.StrictMode>
React.createElement(App, null)
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
// </React.StrictMode>,
, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
<<<<<<< HEAD
reportWebVitals_1.default();
=======
reportWebVitals();
export { default as ButtonDemo } from '../src/demo/buttonDemo';
// export {default as SelectDemo} from './selectDemo';
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
