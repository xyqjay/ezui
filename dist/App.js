import React from 'react';
import DemoButton from './demo/buttonDemo';
// import DemoInput from './demo/inputDemo';
import DemoModal from './demo/modalDemo';
import DemoRadio from './demo/radioDemo';
import DemoProgress from './demo/progressDemo';
import DemoTag from './demo/tagDemo';
function App() {
    return (React.createElement("div", { style: { display: 'flex', flexDirection: 'column' } },
        React.createElement(DemoButton, null),
        React.createElement("div", { style: { marginBottom: '60px' } }),
        React.createElement(DemoModal, null),
        React.createElement("div", { style: { marginBottom: '60px' } }),
        React.createElement(DemoRadio, null),
        React.createElement("div", { style: { marginBottom: '60px' } }),
        React.createElement(DemoProgress, null),
        React.createElement("div", { style: { marginBottom: '60px' } }),
        React.createElement(DemoTag, null)));
}
export default App;
