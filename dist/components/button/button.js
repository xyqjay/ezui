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
            break;
        default:
            buttonClasName = buttonClasName + '';
            break;
    }
    switch (type) {
        case 'primary':
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
            break;
    }
    switch (shape) {
        case 'round':
            buttonClasName = buttonClasName + (button_module_scss_1.default['ez-btn-round'] + " ");
            break;
        case 'circle':
            buttonClasName = buttonClasName + (button_module_scss_1.default['ez-btn-circle'] + " ");
            break;
        default:
            buttonClasName = buttonClasName + '';
            break;
    }
    buttonClasName = buttonClasName + (children ? '' : icon ? button_module_scss_1.default['ez-btn-icon-only'] + " " : '');
    buttonClasName = buttonClasName + (disabled ? button_module_scss_1.default['ez-btn-disabled'] + " " : '');
    return (href ?
        react_1.default.createElement("a", { style: style, href: href, target: target },
            react_1.default.createElement("button", { disabled: disabled, onClick: function () {
                    if (disabled) {
                        return;
                    }
                    else if (onClick) {
                        onClick();
                    }
                }, className: buttonClasName },
                icon ? react_1.default.createElement("span", { className: ezIconClassName }, icon) : '',
                children ? react_1.default.createElement("span", null, children) : ''))
        :
            react_1.default.createElement("button", { style: style, disabled: disabled, onClick: function () {
                    if (disabled) {
                        return;
                    }
                    else if (onClick) {
                        onClick();
                    }
                }, className: buttonClasName },
                icon ? react_1.default.createElement("span", { className: ezIconClassName }, icon) : '',
                children ? react_1.default.createElement("span", null, children) : ''));
}
exports.default = Button;
