<<<<<<< HEAD
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var input_module_scss_1 = __importDefault(require("./input.module.scss"));
var button_1 = __importDefault(require("../button/button"));
=======
import React, { useState } from 'react';
import Style from './input.module.scss';
import Button from '../button/button';
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
// interface InputNumberProps {
//     autoFocus?: boolean,	//	自动获取焦点	boolean	false	-
//     bordered?: boolean,	//是否有边框	boolean	true	4.12.0
//     decimalSeparator?: string,	//	小数点	string	-	-
//     defaultValue?: number,	//	初始值	number	-	-
//     disabled?: boolean,	//禁用	boolean	false	-
//     formatter?: () => void,	//指定输入框展示值的格式	function(value: number | string): string	-	-
//     keyboard?: boolean,	//	是否启用键盘快捷行为	boolean	true	4.12.0
//     max?: number,	//最大值	number	Number.MAX_SAFE_INTEGER	-
//     min?: number,	//最小值	number	Number.MIN_SAFE_INTEGER	-
//     parser?: number,	//	指定从 formatter 里转换回数字的方式，和 formatter 搭配使用	function(string): number	-	-
//     precision?: number,	//	数值精度，配置 formatter 时会以 formatter 为准	number	-	-
//     readOnly?: boolean,	//	只读	boolean	false	-
//     size?: string,	//输入框大小	large | middle | small	-	-
//     step?: number,	//	每次改变步数，可以为小数	number | string	1	-
//     stringMode?: string,	//	字符值模式，开启后支持高精度小数。同时 onChange 将返回 string 类型	boolean	false	4.13.0
//     value?: number,	//当前值	number	-	-
//     onChange?: () => void,	//	变化回调	function(value: number | string | null)	-	-
//     onPressEnter?: () => void,	//	按下回车的回调	function(e)	-	-
//     onStep?: () => void,	//	点击上下箭头的回调	(value: number, info: { offset: number, type: 'up' | 'down' }) => void	-
// }
function Input(_a) {
    var prefix = _a.prefix, size = _a.size, value = _a.value, placeholder = _a.placeholder, warn = _a.warn, warnText = _a.warnText, label = _a.label, onChange = _a.onChange, defaultValue = _a.defaultValue, style = _a.style, _b = _a.className, className = _b === void 0 ? '' : _b;
<<<<<<< HEAD
    var inputClassName = input_module_scss_1.default['ez-input'] + " ";
    var inputWrapClassName = input_module_scss_1.default['ez-input-affix-wrapper'] + " " + className;
    var inpuIconClassName = input_module_scss_1.default['action'] + " ";
    var inputInnerSpanClassName = input_module_scss_1.default['ez-input-prefix'] + " ";
    var warnClassName = input_module_scss_1.default['ez-input-warn'] + " ";
    var labelClassName = input_module_scss_1.default['ez-input-label'] + " ";
    switch (size) {
        case 'big':
            inputWrapClassName = inputWrapClassName + (input_module_scss_1.default['ez-input-affix-wrapper-bg'] + " ");
            break;
        case 'middle':
            inputWrapClassName = inputWrapClassName + (input_module_scss_1.default['ez-input-affix-wrapper-md'] + " ");
            break;
        case 'small':
            inputWrapClassName = inputWrapClassName + (input_module_scss_1.default['ez-input-affix-wrapper-sm'] + " ");
=======
    var inputClassName = Style['ez-input'] + " ";
    var inputWrapClassName = Style['ez-input-affix-wrapper'] + " " + className;
    var inpuIconClassName = Style['action'] + " ";
    var inputInnerSpanClassName = Style['ez-input-prefix'] + " ";
    var warnClassName = Style['ez-input-warn'] + " ";
    var labelClassName = Style['ez-input-label'] + " ";
    switch (size) {
        case 'big':
            inputWrapClassName = inputWrapClassName + (Style['ez-input-affix-wrapper-bg'] + " ");
            break;
        case 'middle':
            inputWrapClassName = inputWrapClassName + (Style['ez-input-affix-wrapper-md'] + " ");
            break;
        case 'small':
            inputWrapClassName = inputWrapClassName + (Style['ez-input-affix-wrapper-sm'] + " ");
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
            break;
        default:
            inputClassName = inputClassName + '';
            break;
    }
<<<<<<< HEAD
    inputWrapClassName = inputWrapClassName + (warn ? input_module_scss_1.default['ez-input-affix-wrapper-warn'] + " " : '');
    return (react_1.default.createElement("span", { className: inputWrapClassName, style: style },
        label ? react_1.default.createElement("span", { className: labelClassName }, label) : '',
        prefix ?
            react_1.default.createElement("span", { className: inputInnerSpanClassName },
                react_1.default.createElement("span", { className: inpuIconClassName }, prefix)) : '',
        react_1.default.createElement("input", { type: "text", className: inputClassName, value: value, defaultValue: defaultValue, placeholder: placeholder, onChange: onChange }),
        warnText ? react_1.default.createElement("span", { className: warnClassName }, warnText) : ''));
}
Input.Search = function Search(_a) {
    var prefix = _a.prefix, _b = _a.size, size = _b === void 0 ? 'middle' : _b, value = _a.value, placeholder = _a.placeholder, warn = _a.warn, warnText = _a.warnText, label = _a.label, enterButton = _a.enterButton, suffix = _a.suffix, onSearch = _a.onSearch, defaultValue = _a.defaultValue, style = _a.style, _c = _a.className, className = _c === void 0 ? '' : _c;
    var inputClassName = input_module_scss_1.default['ez-input'] + " ";
    var inputWrapClassName = input_module_scss_1.default['ez-input-affix-wrapper'] + " ";
    var inpuIconClassName = input_module_scss_1.default['action'] + " ";
    var inputInnerSpanClassName = input_module_scss_1.default['ez-input-prefix'] + " ";
    var warnClassName = input_module_scss_1.default['ez-input-warn'] + " ";
    var labelClassName = input_module_scss_1.default['ez-input-label'] + " ";
    var buttonClassName = input_module_scss_1.default['ez-input-group-addon'] + " ";
    var wrapClassName = input_module_scss_1.default['ez-input-wrapper'] + " ";
    wrapClassName = wrapClassName + (input_module_scss_1.default['ez-input-group'] + " " + className);
    switch (size) {
        case 'big':
            inputWrapClassName = inputWrapClassName + (input_module_scss_1.default['ez-input-affix-wrapper-bg'] + " ");
            buttonClassName = buttonClassName + (input_module_scss_1.default['ez-input-group-addon-bg'] + " ");
            break;
        case 'middle':
            inputWrapClassName = inputWrapClassName + (input_module_scss_1.default['ez-input-affix-wrapper-md'] + " ");
            buttonClassName = buttonClassName + (input_module_scss_1.default['ez-input-group-addon-md'] + " ");
            break;
        case 'small':
            inputWrapClassName = inputWrapClassName + (input_module_scss_1.default['ez-input-affix-wrapper-sm'] + " ");
            buttonClassName = buttonClassName + (input_module_scss_1.default['ez-input-group-addon-sm'] + " ");
=======
    inputWrapClassName = inputWrapClassName + (warn ? Style['ez-input-affix-wrapper-warn'] + " " : '');
    return (React.createElement("span", { className: inputWrapClassName, style: style },
        label ? React.createElement("span", { className: labelClassName }, label) : '',
        prefix ?
            React.createElement("span", { className: inputInnerSpanClassName },
                React.createElement("span", { className: inpuIconClassName }, prefix)) : '',
        React.createElement("input", { type: "text", className: inputClassName, value: value, defaultValue: defaultValue, placeholder: placeholder, onChange: onChange }),
        warnText ? React.createElement("span", { className: warnClassName }, warnText) : ''));
}
Input.Search = function Search(_a) {
    var prefix = _a.prefix, _b = _a.size, size = _b === void 0 ? 'middle' : _b, value = _a.value, placeholder = _a.placeholder, warn = _a.warn, warnText = _a.warnText, label = _a.label, enterButton = _a.enterButton, suffix = _a.suffix, onSearch = _a.onSearch, defaultValue = _a.defaultValue, style = _a.style, _c = _a.className, className = _c === void 0 ? '' : _c;
    var inputClassName = Style['ez-input'] + " ";
    var inputWrapClassName = Style['ez-input-affix-wrapper'] + " ";
    var inpuIconClassName = Style['action'] + " ";
    var inputInnerSpanClassName = Style['ez-input-prefix'] + " ";
    var warnClassName = Style['ez-input-warn'] + " ";
    var labelClassName = Style['ez-input-label'] + " ";
    var buttonClassName = Style['ez-input-group-addon'] + " ";
    var wrapClassName = Style['ez-input-wrapper'] + " ";
    wrapClassName = wrapClassName + (Style['ez-input-group'] + " " + className);
    switch (size) {
        case 'big':
            inputWrapClassName = inputWrapClassName + (Style['ez-input-affix-wrapper-bg'] + " ");
            buttonClassName = buttonClassName + (Style['ez-input-group-addon-bg'] + " ");
            break;
        case 'middle':
            inputWrapClassName = inputWrapClassName + (Style['ez-input-affix-wrapper-md'] + " ");
            buttonClassName = buttonClassName + (Style['ez-input-group-addon-md'] + " ");
            break;
        case 'small':
            inputWrapClassName = inputWrapClassName + (Style['ez-input-affix-wrapper-sm'] + " ");
            buttonClassName = buttonClassName + (Style['ez-input-group-addon-sm'] + " ");
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
            break;
        default:
            inputClassName = inputClassName + '';
            break;
    }
<<<<<<< HEAD
    inputWrapClassName = inputWrapClassName + (warn ? input_module_scss_1.default['ez-input-affix-wrapper-warn'] + " " : '');
    inputWrapClassName = inputWrapClassName + (input_module_scss_1.default['ez-input-affix-wrapper'] + " ");
    return (react_1.default.createElement("span", { className: wrapClassName, style: style },
        react_1.default.createElement("span", { className: inputWrapClassName },
            label ? react_1.default.createElement("span", { className: labelClassName }, label) : '',
            prefix ?
                react_1.default.createElement("span", { className: inputInnerSpanClassName },
                    react_1.default.createElement("span", { className: inpuIconClassName }, prefix)) : '',
            react_1.default.createElement("input", { type: "text", className: inputClassName, defaultValue: defaultValue, value: value, placeholder: placeholder }),
            warnText ? react_1.default.createElement("span", { className: warnClassName }, warnText) : ''),
        react_1.default.createElement("span", { className: buttonClassName },
            react_1.default.createElement(button_1.default, { onClick: onSearch, size: size, icon: suffix ? suffix : '', shape: 'round', type: 'primary' }, enterButton))));
};
Input.TextArea = function TextArea(_a) {
    var _b = _a.cols, cols = _b === void 0 ? "40" : _b, _c = _a.rows, rows = _c === void 0 ? "4" : _c, value = _a.value, onChange = _a.onChange, defaultValue = _a.defaultValue, showCount = _a.showCount, maxLength = _a.maxLength, style = _a.style, _d = _a.className, className = _d === void 0 ? '' : _d;
    var textAreaClassName = input_module_scss_1.default['ez-input-textArea'] + " ";
    var textAreaWrapClassName = input_module_scss_1.default['ez-input-textArea-wrap'] + " " + className;
    textAreaWrapClassName = textAreaWrapClassName + (showCount ? input_module_scss_1.default['ez-input-textArea-wrap-showData'] + " " : '');
    var _e = react_1.useState(value ? value : defaultValue ? defaultValue : ''), valueCurrent = _e[0], setValue = _e[1];
=======
    inputWrapClassName = inputWrapClassName + (warn ? Style['ez-input-affix-wrapper-warn'] + " " : '');
    inputWrapClassName = inputWrapClassName + (Style['ez-input-affix-wrapper'] + " ");
    return (React.createElement("span", { className: wrapClassName, style: style },
        React.createElement("span", { className: inputWrapClassName },
            label ? React.createElement("span", { className: labelClassName }, label) : '',
            prefix ?
                React.createElement("span", { className: inputInnerSpanClassName },
                    React.createElement("span", { className: inpuIconClassName }, prefix)) : '',
            React.createElement("input", { type: "text", className: inputClassName, defaultValue: defaultValue, value: value, placeholder: placeholder }),
            warnText ? React.createElement("span", { className: warnClassName }, warnText) : ''),
        React.createElement("span", { className: buttonClassName },
            React.createElement(Button, { onClick: onSearch, size: size, icon: suffix ? suffix : '', shape: 'round', type: 'primary' }, enterButton))));
};
Input.TextArea = function TextArea(_a) {
    var _b = _a.cols, cols = _b === void 0 ? "40" : _b, _c = _a.rows, rows = _c === void 0 ? "4" : _c, value = _a.value, onChange = _a.onChange, defaultValue = _a.defaultValue, showCount = _a.showCount, maxLength = _a.maxLength, style = _a.style, _d = _a.className, className = _d === void 0 ? '' : _d;
    var textAreaClassName = Style['ez-input-textArea'] + " ";
    var textAreaWrapClassName = Style['ez-input-textArea-wrap'] + " " + className;
    textAreaWrapClassName = textAreaWrapClassName + (showCount ? Style['ez-input-textArea-wrap-showData'] + " " : '');
    var _e = useState(value ? value : defaultValue ? defaultValue : ''), valueCurrent = _e[0], setValue = _e[1];
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
    var change = function (e) {
        setValue(e.target.value);
        if (onChange) {
            onChange(e);
        }
    };
<<<<<<< HEAD
    return (react_1.default.createElement("div", { className: textAreaWrapClassName, style: style, "data-count": (valueCurrent.length + '/') + (maxLength ? (maxLength + '') : '') }, valueCurrent
        ? react_1.default.createElement("textarea", { name: "", id: "", cols: parseInt(cols), value: valueCurrent, rows: parseInt(rows), className: textAreaClassName, onChange: change, maxLength: maxLength })
        : react_1.default.createElement("textarea", { name: "", id: "", cols: parseInt(cols), value: valueCurrent, rows: parseInt(rows), className: textAreaClassName, onChange: change })));
};
exports.default = Input;
=======
    return (React.createElement("div", { className: textAreaWrapClassName, style: style, "data-count": (valueCurrent.length + '/') + (maxLength ? (maxLength + '') : '') }, valueCurrent
        ? React.createElement("textarea", { name: "", id: "", cols: parseInt(cols), value: valueCurrent, rows: parseInt(rows), className: textAreaClassName, onChange: change, maxLength: maxLength })
        : React.createElement("textarea", { name: "", id: "", cols: parseInt(cols), value: valueCurrent, rows: parseInt(rows), className: textAreaClassName, onChange: change })));
};
export default Input;
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
