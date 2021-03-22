<<<<<<< HEAD
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var button_module_scss_1 = __importDefault(require("./button.module.scss"));
function Button(_a) {
    var _b = _a.size, size = _b === void 0 ? 'middle' : _b, icon = _a.icon, onClick = _a.onClick, children = _a.children, _c = _a.shape, shape = _c === void 0 ? 'circle' : _c, type = _a.type, disabled = _a.disabled, href = _a.href, target = _a.target, style = _a.style, _d = _a.className, className = _d === void 0 ? '' : _d;
    var buttonClasName = button_module_scss_1.default['ez-btn'] + " ";
    buttonClasName = " " + buttonClasName + " " + className;
    var ezIconClassName = button_module_scss_1.default['ezicon'] + " ";
    switch (size) {
        case 'big':
            buttonClasName = buttonClasName + (button_module_scss_1.default['ez-btn-bg'] + " ");
            break;
        case 'middle':
            buttonClasName = buttonClasName + (button_module_scss_1.default['ez-btn-md'] + " ");
            break;
        case 'small':
            buttonClasName = buttonClasName + (button_module_scss_1.default['ez-btn-sm'] + " ");
=======
import React from 'react';
import Style from './button.module.scss';
import classNames from 'classnames';
function Button(_a) {
    var _b = _a.size, size = _b === void 0 ? 'middle' : _b, icon = _a.icon, onClick = _a.onClick, children = _a.children, _c = _a.shape, shape = _c === void 0 ? 'circle' : _c, type = _a.type, disabled = _a.disabled, href = _a.href, target = _a.target, style = _a.style, _d = _a.className, className = _d === void 0 ? '' : _d;
    var buttonClasName = classNames(Style['ez-btn'] + " ", { 'ez-btn-bg': true });
    // ;
    buttonClasName = " " + buttonClasName + " " + className;
    var ezIconClassName = Style['ezicon'] + " ";
    switch (size) {
        case 'big':
            buttonClasName = classNames(buttonClasName, Style['ez-btn-bg'] + " ");
            break;
        case 'middle':
            buttonClasName = buttonClasName + (Style['ez-btn-md'] + " ");
            break;
        case 'small':
            buttonClasName = buttonClasName + (Style['ez-btn-sm'] + " ");
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
            break;
        default:
            buttonClasName = buttonClasName + '';
            break;
    }
    switch (type) {
        case 'primary':
<<<<<<< HEAD
            buttonClasName = buttonClasName + (button_module_scss_1.default['ez-btn-primary'] + " ");
            break;
        case 'text':
            buttonClasName = buttonClasName + (button_module_scss_1.default['ez-btn-text'] + " ");
            break;
        case 'link':
            buttonClasName = buttonClasName + (button_module_scss_1.default['ez-btn-link'] + " ");
            break;
        case 'dashed':
            buttonClasName = buttonClasName + (button_module_scss_1.default['ez-btn-dashed'] + " ");
            break;
        default:
            buttonClasName = buttonClasName + (button_module_scss_1.default['ez-btn-default'] + " ");
=======
            buttonClasName = buttonClasName + (Style['ez-btn-primary'] + " ");
            break;
        case 'text':
            buttonClasName = buttonClasName + (Style['ez-btn-text'] + " ");
            break;
        case 'link':
            buttonClasName = buttonClasName + (Style['ez-btn-link'] + " ");
            break;
        case 'dashed':
            buttonClasName = buttonClasName + (Style['ez-btn-dashed'] + " ");
            break;
        default:
            buttonClasName = buttonClasName + (Style['ez-btn-default'] + " ");
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
            break;
    }
    switch (shape) {
        case 'round':
<<<<<<< HEAD
            buttonClasName = buttonClasName + (button_module_scss_1.default['ez-btn-round'] + " ");
            break;
        case 'circle':
            buttonClasName = buttonClasName + (button_module_scss_1.default['ez-btn-circle'] + " ");
=======
            buttonClasName = buttonClasName + (Style['ez-btn-round'] + " ");
            break;
        case 'circle':
            buttonClasName = buttonClasName + (Style['ez-btn-circle'] + " ");
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
            break;
        default:
            buttonClasName = buttonClasName + '';
            break;
    }
<<<<<<< HEAD
    buttonClasName = buttonClasName + (children ? '' : icon ? button_module_scss_1.default['ez-btn-icon-only'] + " " : '');
    buttonClasName = buttonClasName + (disabled ? button_module_scss_1.default['ez-btn-disabled'] + " " : '');
    return (href ?
        react_1.default.createElement("a", { style: style, href: href, target: target },
            react_1.default.createElement("button", { disabled: disabled, onClick: function () {
=======
    buttonClasName = buttonClasName + (children ? '' : icon ? Style['ez-btn-icon-only'] + " " : '');
    buttonClasName = buttonClasName + (disabled ? Style['ez-btn-disabled'] + " " : '');
    return (href ?
        React.createElement("a", { style: style, href: href, target: target },
            React.createElement("button", { disabled: disabled, onClick: function () {
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    if (disabled) {
                        return;
                    }
                    else if (onClick) {
                        onClick();
                    }
                }, className: buttonClasName },
<<<<<<< HEAD
                icon ? react_1.default.createElement("span", { className: ezIconClassName }, icon) : '',
                children ? react_1.default.createElement("span", null, children) : ''))
        :
            react_1.default.createElement("button", { style: style, disabled: disabled, onClick: function () {
=======
                icon ? React.createElement("span", { className: ezIconClassName }, icon) : '',
                children ? React.createElement("span", null, children) : ''))
        :
            React.createElement("button", { style: style, disabled: disabled, onClick: function () {
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    if (disabled) {
                        return;
                    }
                    else if (onClick) {
                        onClick();
                    }
                }, className: buttonClasName },
<<<<<<< HEAD
                icon ? react_1.default.createElement("span", { className: ezIconClassName }, icon) : '',
                children ? react_1.default.createElement("span", null, children) : ''));
}
exports.default = Button;
=======
                icon ? React.createElement("span", { className: ezIconClassName }, icon) : '',
                children ? React.createElement("span", null, children) : ''));
}
export default Button;
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
