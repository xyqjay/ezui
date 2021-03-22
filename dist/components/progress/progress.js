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
