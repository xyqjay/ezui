<<<<<<< HEAD
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var progress_module_scss_1 = __importDefault(require("./progress.module.scss"));
var CheckBox = function CheckBox(_a) {
    var _b = _a.percent, percent = _b === void 0 ? 20 : _b, _c = _a.width, width = _c === void 0 ? '100' : _c, style = _a.style, _d = _a.className, className = _d === void 0 ? '' : _d;
    return (react_1.default.createElement("div", { className: progress_module_scss_1.default['ez-progress'] + "  " + className, style: style },
        react_1.default.createElement("div", { className: progress_module_scss_1.default['ez-progress-outer'] + " " },
            react_1.default.createElement("div", { className: progress_module_scss_1.default['ez-progress-inner'] + " ", style: { width: width + "px" } },
                react_1.default.createElement("div", { className: progress_module_scss_1.default['ez-progress-bg'] + " ", style: { width: percent + "%" } })))));
};
exports.default = CheckBox;
=======
import React from 'react';
import Style from './progress.module.scss';
var CheckBox = function CheckBox(_a) {
    var _b = _a.percent, percent = _b === void 0 ? 20 : _b, _c = _a.width, width = _c === void 0 ? '100' : _c, style = _a.style, _d = _a.className, className = _d === void 0 ? '' : _d;
    return (React.createElement("div", { className: Style['ez-progress'] + "  " + className, style: style },
        React.createElement("div", { className: Style['ez-progress-outer'] + " " },
            React.createElement("div", { className: Style['ez-progress-inner'] + " ", style: { width: width + "px" } },
                React.createElement("div", { className: Style['ez-progress-bg'] + " ", style: { width: percent + "%" } })))));
};
export default CheckBox;
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
