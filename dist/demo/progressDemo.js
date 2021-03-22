import React from 'react';
import { Progress } from '../components/index';
function DemoRadio() {
    return (React.createElement("div", { className: "App", style: { display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: 'center' } },
        React.createElement("div", { style: { display: 'flex', flexDirection: "column" } },
            React.createElement("div", null, "9\u3001\u8FDB\u5EA6"),
            React.createElement("div", { style: { display: "flex", flexDirection: "column" } },
                React.createElement("div", { className: "big", style: { display: "flex", alignItems: "center" } },
                    React.createElement(Progress, null))))));
}
export default DemoRadio;
