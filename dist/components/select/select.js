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
var select_module_scss_1 = __importDefault(require("./select.module.scss"));
var bool = true;
var Select = function (_a) {
    var children = _a.children, placeholder = _a.placeholder, onClick = _a.onClick, onChange = _a.onChange, size = _a.size, disabled = _a.disabled;
    var selectClass = select_module_scss_1.default['ez-select'];
    var optionClass = select_module_scss_1.default['ez-option-child'];
    var optionChooseClass = select_module_scss_1.default['ez-option-child-choose'];
    var inputClass = select_module_scss_1.default['ez-select-input'];
    if (size && size === 'large') {
        selectClass = selectClass + ' ' + select_module_scss_1.default['ez-select-large'];
        optionClass = optionClass + ' ' + select_module_scss_1.default['ez-option-child-large'];
        optionChooseClass = optionChooseClass + ' ' + select_module_scss_1.default['ez-option-child-large'];
    }
    if (disabled) {
        selectClass = selectClass + ' ' + select_module_scss_1.default['ez-select-disabled'];
        inputClass = inputClass + ' ' + select_module_scss_1.default['ez-select-disabled'];
    }
    var selectRef = react_1.useRef(null);
    var optionRef = react_1.useRef(null);
    var optionWrapBottom;
    react_1.useEffect(function () {
        optionWrapBottom = selectRef.current.getBoundingClientRect().bottom + 4 + optionRef.current.offsetHeight;
        // console.log(selectRef.current.getBoundingClientRect().bottom, optionRef.current.getBoundingClientRect().height);
        // console.log(optionRef.current.offsetHeight,optionRef.current.getBoundingClientRect().height)
    });
    var inputRef = react_1.useRef(null);
    var _b = react_1.useState(select_module_scss_1.default['ez-option-wrap-hidden']), ezOptionWrapClass = _b[0], setezOptionWrapClass = _b[1];
    function click() {
        if (disabled) {
            setezOptionWrapClass(select_module_scss_1.default['ez-option-wrap-hidden']);
            return;
        }
        if (window.innerHeight - optionWrapBottom < 0 && (selectRef.current.getBoundingClientRect().top > optionRef.current.getBoundingClientRect().height + 4 || selectRef.current.getBoundingClientRect().top > window.innerHeight - selectRef.current.getBoundingClientRect().bottom)) {
            bool ? setezOptionWrapClass(select_module_scss_1.default['ez-option-wrap-block-top']) : setezOptionWrapClass(select_module_scss_1.default['ez-option-wrap-hidden']);
            optionWrapBottom = optionRef.current.getBoundingClientRect().bottom;
            // console.log('---click if---',window.innerHeight , optionWrapBottom)
        }
        else {
            bool ? setezOptionWrapClass(select_module_scss_1.default['ez-option-wrap-block']) : setezOptionWrapClass(select_module_scss_1.default['ez-option-wrap-hidden']);
            // console.log('---click else---',window.innerHeight , optionWrapBottom)
        }
        bool = !bool;
        onClick && onClick();
        inputRef.current.focus();
    }
    function optionClick(e, Key, value) {
        e.stopPropagation();
        e.persist();
        setezOptionWrapClass(select_module_scss_1.default['ez-option-wrap-hidden']);
        onChange && onChange(Key, value);
        inputRef.current.blur();
    }
    function blur(e) {
        e.persist();
        setezOptionWrapClass(select_module_scss_1.default['ez-option-wrap-hidden']);
        bool = true;
    }
    function focus() {
        if (disabled) {
            setezOptionWrapClass(select_module_scss_1.default['ez-option-wrap-hidden']);
            return;
        }
        if (window.innerHeight - optionWrapBottom < 0 && (selectRef.current.getBoundingClientRect().top > optionRef.current.getBoundingClientRect().height + 4 || selectRef.current.getBoundingClientRect().top > window.innerHeight - selectRef.current.getBoundingClientRect().bottom)) {
            setezOptionWrapClass(select_module_scss_1.default['ez-option-wrap-block-top']);
            optionWrapBottom = optionRef.current.getBoundingClientRect().bottom;
            // console.log('---focus if---',window.innerHeight , optionWrapBottom)
        }
        else {
            setezOptionWrapClass(select_module_scss_1.default['ez-option-wrap-block']);
            // console.log('---focus else---',window.innerHeight , optionWrapBottom)
        }
    }
    var _c = react_1.useState(''), optionValue = _c[0], setOptionValue = _c[1];
    return (react_1.default.createElement("div", { ref: selectRef, className: selectClass, onClick: click },
        react_1.default.createElement("input", { ref: inputRef, className: inputClass, placeholder: placeholder, value: optionValue, onBlur: blur, onFocus: focus, onChange: function () { } }),
        react_1.default.createElement("span", { className: select_module_scss_1.default.icon },
            react_1.default.createElement("svg", { className: 'icon', "aria-hidden": 'true' },
                react_1.default.createElement("use", { xlinkHref: '#iconicon_placeholder' }))),
        react_1.default.createElement("div", { ref: optionRef, className: ezOptionWrapClass }, (ezOptionWrapClass === select_module_scss_1.default['ez-option-wrap-block'] || ezOptionWrapClass === select_module_scss_1.default['ez-option-wrap-block-top']) && Array.isArray(children) && children.length > 0 ? children.map(function (item, index) {
            if (item.props.value === optionValue) {
                return react_1.default.createElement("div", { key: index, className: optionChooseClass, onClick: function (e) {
                        setOptionValue(item.props.value);
                        optionClick(e, item.props.Key, item.props.value);
                    } }, item);
            }
            return react_1.default.createElement("div", { key: index, className: optionClass, onClick: function (e) {
                    setOptionValue(item.props.value);
                    optionClick(e, item.props.Key, item.props.value);
                } }, item);
        }) : children)));
};
var Option = function (_a) {
    var children = _a.children, icon = _a.icon;
    return (react_1.default.createElement("div", { className: select_module_scss_1.default['ez-option'], onMouseDown: function (e) {
            e.preventDefault();
        } },
        react_1.default.createElement("span", { className: select_module_scss_1.default['ez-option-icon'] }, icon),
        children));
};
Select.Option = Option;
exports.default = Select;
