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
var checkbox_module_scss_1 = __importDefault(require("./checkbox.module.scss"));
var CheckBox = function CheckBox(_a) {
    var disabled = _a.disabled, children = _a.children, style = _a.style, _b = _a.className, className = _b === void 0 ? '' : _b, checked = _a.checked;
    var initCheckBoxWrapClassName = checkbox_module_scss_1.default['ez-checkbox-wrapper'] + " " + (disabled ? checkbox_module_scss_1.default['ez-checkbox-wrapper-disabled'] + " " : '');
    initCheckBoxWrapClassName = " " + initCheckBoxWrapClassName + "  " + className;
    var initCheckBoxClassName = checkbox_module_scss_1.default['ez-checkbox'] + " " + (disabled ? checkbox_module_scss_1.default['ez-checkbox-disabled'] + " " : '');
    var _c = react_1.useState(initCheckBoxWrapClassName), checkboxWrapClassName = _c[0], setCheckBoxWrapClassName = _c[1];
    var _d = react_1.useState(initCheckBoxClassName), checkboxClassName = _d[0], setCheckBoxClassName = _d[1];
    var _e = react_1.useState(true), checkedStatus = _e[0], setCheckedStatus = _e[1];
    react_1.useEffect(function () {
        checked && setCheckBoxWrapClassName(initCheckBoxWrapClassName + (checkbox_module_scss_1.default['ez-checkbox-wrapper-checked'] + " "));
        checked && setCheckBoxClassName(initCheckBoxClassName + (checkbox_module_scss_1.default['ez-checkbox-checked'] + " "));
    }, [checked, initCheckBoxWrapClassName, initCheckBoxClassName]);
    return (react_1.default.createElement("label", { className: checkboxWrapClassName, style: style },
        react_1.default.createElement("span", { className: checkboxClassName },
            react_1.default.createElement("input", { type: "checkbox", className: checkbox_module_scss_1.default['ez-checkbox-input'] + " ", onClick: function () {
                    if (disabled) {
                        return;
                    }
                    setCheckedStatus(!checkedStatus);
                    var re1 = /ez-checkbox-wrapper-checked/gi;
                    var re2 = /ez-checkbox-wrapper-checked/gi;
                    if (checkedStatus) {
                        setCheckBoxWrapClassName(checkboxWrapClassName + (checkbox_module_scss_1.default['ez-checkbox-wrapper-checked'] + " "));
                        setCheckBoxClassName(checkboxClassName + (checkbox_module_scss_1.default['ez-checkbox-checked'] + " "));
                    }
                    else {
                        setCheckBoxWrapClassName(checkboxWrapClassName.replace(re1, ''));
                        setCheckBoxClassName(checkboxClassName.replace(re2, ''));
                    }
                } }),
            react_1.default.createElement("span", { className: checkbox_module_scss_1.default['ez-checkbox-inner'] + " " })),
        children ? react_1.default.createElement("span", { className: 'label' }, children) : ''));
};
exports.default = CheckBox;
