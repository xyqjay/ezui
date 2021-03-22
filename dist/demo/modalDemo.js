import React, { useState, } from 'react';
// import { Modal } from '../components/index';
import Style from './modalDemo.module.scss';
import { Button, Modal, Input } from '../components/index';
var Popover = Modal.Popover;
var Tooltip = Modal.Tooltip;
var Message = Modal.Message;
function DemoModal() {
    var _a = useState(false), showModal1_1 = _a[0], setModal1_1 = _a[1];
    var _b = useState(false), showModal1_2 = _b[0], setModal1_2 = _b[1];
    var _c = useState(false), showModal1_3 = _c[0], setModal1_3 = _c[1];
    var _d = useState(false), showModal1_4 = _d[0], setModal1_4 = _d[1];
    var _e = useState(false), showModal1_5 = _e[0], setModal1_5 = _e[1];
    var _f = useState(false), showModal2_1 = _f[0], setModal2_1 = _f[1];
    var _g = useState(false), showModal2_2 = _g[0], setModal2_2 = _g[1];
    var _h = useState(false), showModal2_3 = _h[0], setModal2_3 = _h[1];
    var _j = useState(false), showModal3_1 = _j[0], setModal3_1 = _j[1];
    var _k = useState(false), showModal3_2 = _k[0], setModal3_2 = _k[1];
    var _l = useState(false), showModal3_3 = _l[0], setModal3_3 = _l[1];
    var _m = useState(false), showModal3_4 = _m[0], setModal3_4 = _m[1];
    var _o = useState(false), showModal4_1 = _o[0], setModal4_1 = _o[1];
    var _p = useState(false), showModal5_1 = _p[0], setModal5_1 = _p[1];
    return (React.createElement("div", { className: "App", style: { display: 'flex', flexDirection: "column", alignItems: 'center' } },
        React.createElement("div", { style: { display: 'flex', flexDirection: "column", alignItems: 'center' } },
            React.createElement("div", null, "1.1\u8F93\u5165\u5C3A\u5BF8"),
            React.createElement("div", { style: { display: 'flex', flexDirection: "column", alignItems: 'center' } },
                React.createElement(Button, { onClick: function () { setModal1_1(true); }, type: 'primary', style: { margin: '20px' } }, "Modal1_1"),
                React.createElement(Button, { onClick: function () { setModal1_2(true); }, type: 'primary', style: { margin: '20px' } }, "Modal1_2"),
                React.createElement(Button, { onClick: function () { setModal1_3(true); }, type: 'primary', style: { margin: '20px' } }, "Modal1_3"),
                React.createElement(Button, { onClick: function () { setModal1_4(true); }, type: 'primary', style: { margin: '20px' } }, "Modal1_4"),
                React.createElement(Button, { onClick: function () { setModal1_5(true); }, type: 'primary', style: { margin: '20px' } }, "Modal1_5")),
            showModal1_1 ? React.createElement(Modal, { className: Style.name, title: 'This is a title', okText: 'Primary', onCancel: function () { setModal1_1(false); } },
                React.createElement("span", null, "We adhere to the educational mission by applying advanced internet technologies in access to quality.")) : '',
            showModal1_2 ? React.createElement(Modal, { title: 'This is a title', okText: 'Primary', cancelText: 'Text Button', cancelType: 'text', onCancel: function () { setModal1_2(false); } },
                React.createElement("span", null, "We adhere to the educational mission by applying advanced internet technologies in access to quality.")) : '',
            showModal1_3 ? React.createElement(Modal, { title: 'This is a title', okText: 'Primary', cancelText: 'Text Button', onCancel: function () { setModal1_3(false); } },
                React.createElement("span", null, "We adhere to the educational mission by applying advanced internet technologies in access to quality.")) : '',
            showModal1_4 ? React.createElement(Modal, { centered: true, title: React.createElement("div", null,
                    React.createElement("div", null,
                        React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "", style: { width: '112px', height: '112px' } }),
                        React.createElement("div", null, "This is a title"))), okText: 'Primary', cancelText: 'Text Button', onCancel: function () { setModal1_4(false); } },
                React.createElement("span", null, "We adhere to the educational mission by applying advanced internet technologies in access to quality.")) : '',
            showModal1_5 ? React.createElement(Modal, { size: 'big', title: 'This is a title', okText: 'Primary', cancelType: 'text', cancelText: 'Text Button', onCancel: function () { setModal1_5(false); } },
                React.createElement("span", null, "We adhere to the educational mission by applying advanced internet technologies in access to quality.")) : ''),
        React.createElement("div", { style: { display: 'flex', flexDirection: "column", alignItems: 'center' } },
            React.createElement("div", null, "2.1\u8F93\u5165\u5C3A\u5BF8-----------"),
            React.createElement("div", { style: { display: 'flex', flexDirection: "column", alignItems: 'center' } },
                React.createElement(Button, { onClick: function () { setModal2_1(true); }, type: 'primary', style: { margin: '20px' } }, "Modal2_1"),
                React.createElement(Button, { onClick: function () { setModal2_2(true); }, type: 'primary', style: { margin: '20px' } }, "Modal2_2"),
                React.createElement(Button, { onClick: function () { setModal2_3(true); }, type: 'primary', style: { margin: '20px' } }, "Modal2_3")),
            React.createElement("div", null, "1.1\u8F93\u5165\u72B6\u6001"),
            showModal2_1 ? React.createElement(Modal, { title: 'This is a title', okText: 'Primary', cancelType: 'text', cancelText: React.createElement("span", { style: { color: 'rgba(43, 43, 45, 0.6)' } }, "Text Button"), onCancel: function () { setModal2_1(false); } },
                React.createElement("div", null,
                    React.createElement("div", { style: { margin: '10px 0' } }, "We adhere to the educational mission by applying advanced internet technologies in access to quality."),
                    React.createElement(Input, { size: 'big', 
                        // prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
                        placeholder: 'Input text' }))) : '',
            showModal2_2 ? React.createElement(Modal, { title: 'This is a title', okText: 'Primary', cancelText: React.createElement("span", { style: { color: 'rgba(43, 43, 45, 0.6)' } }, "Text Button"), cancelType: 'text', onCancel: function () { setModal2_2(false); } },
                React.createElement("div", null,
                    React.createElement("div", { style: { margin: '10px 0' } }, "We adhere to the educational mission by applying advanced internet technologies in access to quality."),
                    React.createElement(Input, { size: 'big', warn: true, warnText: 'Error error error', 
                        // prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
                        placeholder: 'Input text' }))) : '',
            showModal2_3 ? React.createElement(Modal, { title: 'This is a title', okText: 'Primary', cancelText: React.createElement("span", { style: { color: 'rgba(43, 43, 45, 0.6)' } }, "Text Button"), cancelType: 'text', onCancel: function () { setModal2_3(false); } },
                React.createElement(Input, { size: 'big', 
                    // prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
                    placeholder: 'Input text' })) : ''),
        React.createElement("div", { style: { display: 'flex', flexDirection: "column", alignItems: 'center' } },
            React.createElement("div", null, "3.1\u6C14\u6CE1-----------"),
            React.createElement("div", { style: { display: 'flex', flexDirection: "column", alignItems: 'center' } },
                React.createElement(Button, { onClick: function () { setModal3_1(true); }, type: 'primary', style: { margin: '20px' } }, "Modal3_1"),
                React.createElement(Button, { onClick: function () { setModal3_2(true); }, type: 'primary', style: { margin: '20px' } }, "Modal3_2"),
                React.createElement(Button, { onClick: function () { setModal3_3(true); }, type: 'primary', style: { margin: '20px' } }, "Modal3_3"),
                React.createElement(Button, { onClick: function () { setModal3_4(true); }, type: 'primary', style: { margin: '20px' } }, "Modal3_4")),
            showModal3_1 ? React.createElement(Tooltip, { title: 'Are you sure to delete this task?', placement: 'top', onCancel: function () { setModal3_1(false); } }) : '',
            showModal3_2 ? React.createElement(Popover, { title: 'Are you sure to delete this task?', placement: 'bottom', okText: 'Primary', cancelType: 'text', cancelText: React.createElement("span", { style: { color: 'rgba(43, 43, 45, 0.6)' } }, "Text 11Button"), onCancel: function () { setModal3_2(false); } }) : '',
            showModal3_3 ? React.createElement(Popover, { title: 'Are you sure to delete this task?', placement: 'left', onCancel: function () { setModal3_3(false); } },
                React.createElement("span", null, "We adhere to the educational mission by applying advanced internet technologies in access to quality.")) : '',
            showModal3_4 ? React.createElement(Popover, { title: 'Are you sure to delete this task?', placement: 'right', okText: 'Primary', cancelType: 'text', cancelText: React.createElement("span", { style: { color: 'rgba(43, 43, 45, 0.6)' } }, "Text 11Button"), onCancel: function () { setModal3_4(false); } },
                React.createElement("span", null, "We adhere to the educational mission by applying advanced internet technologies in access to quality.")) : ''),
        React.createElement("div", { style: { display: 'flex', flexDirection: "column", alignItems: 'center' } },
            React.createElement("div", null, "3.1\u6C14\u6CE1-----------"),
            React.createElement("div", { style: { display: 'flex', flexDirection: "column", alignItems: 'center' } },
                React.createElement(Button, { onClick: function () { setModal4_1(true); }, type: 'primary', style: { margin: '20px' } }, "Modal4_1")),
            showModal4_1 ? React.createElement(Tooltip, { title: 'Are you sure to delete this task?', placement: 'rightBottom', onCancel: function () { setModal3_1(false); } }) : ''),
        React.createElement("div", { style: { display: 'flex', flexDirection: "column", alignItems: 'center' } },
            React.createElement("div", null, "4---message-----------"),
            React.createElement("div", { style: { display: 'flex', flexDirection: "column", alignItems: 'center' } },
                React.createElement(Button, { onClick: function () { setModal5_1(true); }, type: 'primary', style: { margin: '20px' } }, "Modal4_1")),
            showModal5_1 ? React.createElement(Message, { icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), title: 'Are you sure to delete this task?', placement: 'rightBottom', onCancel: function () { setModal5_1(false); } }) : '')));
}
export default DemoModal;
