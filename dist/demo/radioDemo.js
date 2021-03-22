import React from 'react';
import { Radio } from '../components/index';
import { CheckBox } from '../components/index';
function DemoRadio() {
    return (React.createElement("div", { className: "App", style: { display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: 'center' } },
        React.createElement("div", { style: { display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center" } },
            React.createElement("div", null, "8\u3001radio\u9009\u62E9"),
            React.createElement("div", { style: { display: "flex", flexDirection: "column" } },
                React.createElement("div", { className: "big", style: { display: "flex", alignItems: "center" } },
                    React.createElement(Radio, { checked: true }, "option1"),
                    React.createElement(Radio, null, "option2"),
                    React.createElement(Radio, { disabled: true }, "option3"),
                    React.createElement(Radio, { disabled: true, checked: true }, "option4")))),
        React.createElement("div", { style: { display: 'flex', flexDirection: "column" } },
            React.createElement("div", null, "\u591A\u9879\u9009\u62E9"),
            React.createElement("div", { style: { display: "flex", flexDirection: "column" } },
                React.createElement("div", { className: "big", style: { display: "flex", alignItems: "center" } },
                    React.createElement(CheckBox, { checked: true }, "option1"),
                    React.createElement(CheckBox, null, "option2"),
                    React.createElement(CheckBox, { disabled: true }, "option3"),
                    React.createElement(CheckBox, { disabled: true, checked: true }, "option3"))))));
}
export default DemoRadio;
