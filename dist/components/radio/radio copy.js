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
var radio_module_scss_1 = __importDefault(require("./radio.module.scss"));
function Radio(_a) {
    var disabled = _a.disabled, children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, style = _a.style, checked = _a.checked;
    var initRadioWrapClassName = className + " " + radio_module_scss_1.default['ez-radio-wrapper'] + " " + (disabled ? radio_module_scss_1.default['ez-radio-wrapper-disabled'] + " " : '');
    var initRadioClassName = radio_module_scss_1.default['ez-radio'] + " " + (disabled ? radio_module_scss_1.default['ez-radio-disabled'] + " " : '');
    var _c = react_1.useState(initRadioWrapClassName), radioWrapClassName = _c[0], setRadioWrapClassName = _c[1];
    var _d = react_1.useState(initRadioClassName), radioClassName = _d[0], setRadioClassName = _d[1];
    var _e = react_1.useState(true), checkedStatus = _e[0], setCheckedStatus = _e[1];
    react_1.useEffect(function () {
        checked && setRadioWrapClassName(initRadioWrapClassName + (radio_module_scss_1.default['ez-radio-wrapper-checked'] + " "));
        checked && setRadioClassName(initRadioClassName + (radio_module_scss_1.default['ez-radio-checked'] + " "));
    }, [checked, initRadioWrapClassName, initRadioClassName]);
    return (react_1.default.createElement("div", { className: radioWrapClassName, style: style },
        react_1.default.createElement("span", { className: radioClassName },
            react_1.default.createElement("input", { type: "radio", className: radio_module_scss_1.default['ez-radio-input'] + " ", onClick: function () {
                    if (disabled) {
                        return;
                    }
                    setCheckedStatus(!checkedStatus);
                    var re1 = /ez-radio-wrapper-checked/gi;
                    var re2 = /ez-radio-wrapper-checked/gi;
                    if (checkedStatus) {
                        setRadioWrapClassName(radioWrapClassName + (radio_module_scss_1.default['ez-radio-wrapper-checked'] + " "));
                        setRadioClassName(radioClassName + (radio_module_scss_1.default['ez-radio-checked'] + " "));
                    }
                    else {
                        setRadioWrapClassName(radioWrapClassName.replace(re1, ''));
                        setRadioClassName(radioClassName.replace(re2, ''));
                    }
                } }),
            react_1.default.createElement("span", { className: radio_module_scss_1.default['ez-radio-inner'] + " " })),
        children ? react_1.default.createElement("span", null, children) : ''));
}
exports.default = Radio;
