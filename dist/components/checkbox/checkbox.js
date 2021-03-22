import React, { useState, useEffect } from 'react';
import Style from './checkbox.module.scss';
var CheckBox = function CheckBox(_a) {
    var disabled = _a.disabled, children = _a.children, style = _a.style, _b = _a.className, className = _b === void 0 ? '' : _b, checked = _a.checked;
    var initCheckBoxWrapClassName = Style['ez-checkbox-wrapper'] + " " + (disabled ? Style['ez-checkbox-wrapper-disabled'] + " " : '');
    initCheckBoxWrapClassName = " " + initCheckBoxWrapClassName + "  " + className;
    var initCheckBoxClassName = Style['ez-checkbox'] + " " + (disabled ? Style['ez-checkbox-disabled'] + " " : '');
    var _c = useState(initCheckBoxWrapClassName), checkboxWrapClassName = _c[0], setCheckBoxWrapClassName = _c[1];
    var _d = useState(initCheckBoxClassName), checkboxClassName = _d[0], setCheckBoxClassName = _d[1];
    var _e = useState(true), checkedStatus = _e[0], setCheckedStatus = _e[1];
    useEffect(function () {
        checked && setCheckBoxWrapClassName(initCheckBoxWrapClassName + (Style['ez-checkbox-wrapper-checked'] + " "));
        checked && setCheckBoxClassName(initCheckBoxClassName + (Style['ez-checkbox-checked'] + " "));
    }, [checked, initCheckBoxWrapClassName, initCheckBoxClassName]);
    return (React.createElement("label", { className: checkboxWrapClassName, style: style },
        React.createElement("span", { className: checkboxClassName },
            React.createElement("input", { type: "checkbox", className: Style['ez-checkbox-input'] + " ", onClick: function () {
                    if (disabled) {
                        return;
                    }
                    setCheckedStatus(!checkedStatus);
                    var re1 = /ez-checkbox-wrapper-checked/gi;
                    var re2 = /ez-checkbox-wrapper-checked/gi;
                    if (checkedStatus) {
                        setCheckBoxWrapClassName(checkboxWrapClassName + (Style['ez-checkbox-wrapper-checked'] + " "));
                        setCheckBoxClassName(checkboxClassName + (Style['ez-checkbox-checked'] + " "));
                    }
                    else {
                        setCheckBoxWrapClassName(checkboxWrapClassName.replace(re1, ''));
                        setCheckBoxClassName(checkboxClassName.replace(re2, ''));
                    }
                } }),
            React.createElement("span", { className: Style['ez-checkbox-inner'] + " " })),
        children ? React.createElement("span", { className: 'label' }, children) : ''));
};
export default CheckBox;
