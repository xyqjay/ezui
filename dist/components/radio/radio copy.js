import React, { useState, useEffect } from 'react';
import Style from './radio.module.scss';
function Radio(_a) {
    var disabled = _a.disabled, children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, style = _a.style, checked = _a.checked;
    var initRadioWrapClassName = className + " " + Style['ez-radio-wrapper'] + " " + (disabled ? Style['ez-radio-wrapper-disabled'] + " " : '');
    var initRadioClassName = Style['ez-radio'] + " " + (disabled ? Style['ez-radio-disabled'] + " " : '');
    var _c = useState(initRadioWrapClassName), radioWrapClassName = _c[0], setRadioWrapClassName = _c[1];
    var _d = useState(initRadioClassName), radioClassName = _d[0], setRadioClassName = _d[1];
    var _e = useState(true), checkedStatus = _e[0], setCheckedStatus = _e[1];
    useEffect(function () {
        checked && setRadioWrapClassName(initRadioWrapClassName + (Style['ez-radio-wrapper-checked'] + " "));
        checked && setRadioClassName(initRadioClassName + (Style['ez-radio-checked'] + " "));
    }, [checked, initRadioWrapClassName, initRadioClassName]);
    return (React.createElement("div", { className: radioWrapClassName, style: style },
        React.createElement("span", { className: radioClassName },
            React.createElement("input", { type: "radio", className: Style['ez-radio-input'] + " ", onClick: function () {
                    if (disabled) {
                        return;
                    }
                    setCheckedStatus(!checkedStatus);
                    var re1 = /ez-radio-wrapper-checked/gi;
                    var re2 = /ez-radio-wrapper-checked/gi;
                    if (checkedStatus) {
                        setRadioWrapClassName(radioWrapClassName + (Style['ez-radio-wrapper-checked'] + " "));
                        setRadioClassName(radioClassName + (Style['ez-radio-checked'] + " "));
                    }
                    else {
                        setRadioWrapClassName(radioWrapClassName.replace(re1, ''));
                        setRadioClassName(radioClassName.replace(re2, ''));
                    }
                } }),
            React.createElement("span", { className: Style['ez-radio-inner'] + " " })),
        children ? React.createElement("span", null, children) : ''));
}
export default Radio;
