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
            break;
        default:
            buttonClasName = buttonClasName + '';
            break;
    }
    switch (type) {
        case 'primary':
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
            break;
    }
    switch (shape) {
        case 'round':
            buttonClasName = buttonClasName + (Style['ez-btn-round'] + " ");
            break;
        case 'circle':
            buttonClasName = buttonClasName + (Style['ez-btn-circle'] + " ");
            break;
        default:
            buttonClasName = buttonClasName + '';
            break;
    }
    buttonClasName = buttonClasName + (children ? '' : icon ? Style['ez-btn-icon-only'] + " " : '');
    buttonClasName = buttonClasName + (disabled ? Style['ez-btn-disabled'] + " " : '');
    return (href ?
        React.createElement("a", { style: style, href: href, target: target },
            React.createElement("button", { disabled: disabled, onClick: function () {
                    if (disabled) {
                        return;
                    }
                    else if (onClick) {
                        onClick();
                    }
                }, className: buttonClasName },
                icon ? React.createElement("span", { className: ezIconClassName }, icon) : '',
                children ? React.createElement("span", null, children) : ''))
        :
            React.createElement("button", { style: style, disabled: disabled, onClick: function () {
                    if (disabled) {
                        return;
                    }
                    else if (onClick) {
                        onClick();
                    }
                }, className: buttonClasName },
                icon ? React.createElement("span", { className: ezIconClassName }, icon) : '',
                children ? React.createElement("span", null, children) : ''));
}
export default Button;
