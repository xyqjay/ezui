<<<<<<< HEAD
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = require("../components/index");
function DemoButton() {
    return (react_1.default.createElement("div", { className: "App", style: { display: 'flex', justifyContent: "center" } },
        react_1.default.createElement("div", { style: { display: 'flex', flexDirection: "column" } },
            react_1.default.createElement("div", null, "\u4E3B\u8981\u6309\u94AE"),
            react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column" } },
                react_1.default.createElement("div", { className: "big", style: { display: "flex", alignItems: "center" } },
                    react_1.default.createElement(index_1.Button
=======
import React from 'react';
import { Button } from '../components/index';
function DemoButton() {
    return (React.createElement("div", { className: "App", style: { display: 'flex', justifyContent: "center" } },
        React.createElement("div", { style: { display: 'flex', flexDirection: "column" } },
            React.createElement("div", null, "\u4E3B\u8981\u6309\u94AE"),
            React.createElement("div", { style: { display: "flex", flexDirection: "column" } },
                React.createElement("div", { className: "big", style: { display: "flex", alignItems: "center" } },
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', shape: 'circle', type: 'primary', style: { background: 'red' } }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', type: 'primary', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'circle' }, "Primary"),
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', type: 'primary', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'circle' }, "Primary"),
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', shape: 'round', type: 'primary' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', type: 'primary', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round' }, "Primary"),
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', type: 'primary', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round' })),
                react_1.default.createElement("div", { className: "middle", style: { margin: '30px' } },
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', type: 'primary', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round' }, "Primary"),
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', type: 'primary', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round' })),
                React.createElement("div", { className: "middle", style: { margin: '30px' } },
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', shape: 'circle', type: 'primary' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', type: 'primary', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'circle' }, "Primary"),
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', type: 'primary', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'circle' }, "Primary"),
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', shape: 'round', type: 'primary' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round', type: 'primary' }, "Primary"),
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', type: 'primary', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round', style: { color: 'red' } })),
                react_1.default.createElement("div", { className: "small", style: { margin: '30px' } },
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round', type: 'primary' }, "Primary"),
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', type: 'primary', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round', style: { color: 'red' } })),
                React.createElement("div", { className: "small", style: { margin: '30px' } },
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', type: 'primary', shape: 'circle' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', type: 'primary', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'circle' }, "Primary"),
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', type: 'primary', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'circle' }, "Primary"),
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', shape: 'round', type: 'primary' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round', type: 'primary' }, "Primary"),
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', type: 'primary', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round' }))),
            react_1.default.createElement("div", null, "\u4E8C\u7EA7\u6309\u94AE"),
            react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column" } },
                react_1.default.createElement("div", { className: "big" },
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round', type: 'primary' }, "Primary"),
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', type: 'primary', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round' }))),
            React.createElement("div", null, "\u4E8C\u7EA7\u6309\u94AE"),
            React.createElement("div", { style: { display: "flex", flexDirection: "column" } },
                React.createElement("div", { className: "big" },
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', shape: 'circle' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'circle' }, "Primary"),
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'circle' }, "Primary"),
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', shape: 'round' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round' }, "Primary"),
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round' })),
                react_1.default.createElement("div", { className: "middle", style: { margin: '30px' } },
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round' }, "Primary"),
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round' })),
                React.createElement("div", { className: "middle", style: { margin: '30px' } },
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', shape: 'circle' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'circle' }, "Primary"),
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'circle' }, "Primary"),
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', shape: 'round' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round' }, "Primary"),
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round' })),
                react_1.default.createElement("div", { className: "small", style: { margin: '30px' } },
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round' }, "Primary"),
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round' })),
                React.createElement("div", { className: "small", style: { margin: '30px' } },
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', shape: 'circle' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'circle' }, "Primary"),
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'circle' }, "Primary"),
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', shape: 'round' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round' }, "Primary"),
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round' }))),
            react_1.default.createElement("div", null, "\u4E09\u7EA7\u6309\u94AE"),
            react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column" } },
                react_1.default.createElement("div", { className: "big" },
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round' }, "Primary"),
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round' }))),
            React.createElement("div", null, "\u4E09\u7EA7\u6309\u94AE"),
            React.createElement("div", { style: { display: "flex", flexDirection: "column" } },
                React.createElement("div", { className: "big" },
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', shape: 'circle', type: 'dashed' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', type: 'dashed', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'circle' }, "Primary"),
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', type: 'dashed', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'circle' }, "Primary"),
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', shape: 'round', type: 'dashed' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round', type: 'dashed' }, "Primary"),
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round', type: 'dashed' })),
                react_1.default.createElement("div", { className: "middle", style: { margin: '30px' } },
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round', type: 'dashed' }, "Primary"),
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'big', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round', type: 'dashed' })),
                React.createElement("div", { className: "middle", style: { margin: '30px' } },
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', shape: 'circle', type: 'dashed' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', type: 'dashed', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'circle' }, "Primary"),
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', type: 'dashed', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'circle' }, "Primary"),
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', shape: 'round', type: 'dashed' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round', type: 'dashed' }, "Primary"),
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round', type: 'dashed' })),
                react_1.default.createElement("div", { className: "small", style: { margin: '30px' } },
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round', type: 'dashed' }, "Primary"),
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'middle', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round', type: 'dashed' })),
                React.createElement("div", { className: "small", style: { margin: '30px' } },
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', shape: 'circle', type: 'dashed' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', type: 'dashed', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'circle' }, "Primary"),
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', type: 'dashed', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'circle' }, "Primary"),
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', shape: 'round', type: 'dashed' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round', type: 'dashed' }, "Primary"),
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round', type: 'dashed' }))),
            react_1.default.createElement("div", null, "\u6587\u5B57\u6309\u94AE"),
            react_1.default.createElement("div", { style: { margin: '30px' } },
                react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round', type: 'dashed' }, "Primary"),
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        size: 'small', icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round', type: 'dashed' }))),
            React.createElement("div", null, "\u6587\u5B57\u6309\u94AE"),
            React.createElement("div", { style: { margin: '30px' } },
                React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                // onClick={() => { console.log(1234565) }}
                , { 
                    // onClick={() => { console.log(1234565) }}
                    type: 'text' }, "Primary"),
<<<<<<< HEAD
                react_1.default.createElement(index_1.Button
                // onClick={() => { console.log(1234565) }}
                , { 
                    // onClick={() => { console.log(1234565) }}
                    icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'circle', type: 'text' }, "Primary"),
                react_1.default.createElement(index_1.Button
=======
                React.createElement(Button
                // onClick={() => { console.log(1234565) }}
                , { 
                    // onClick={() => { console.log(1234565) }}
                    icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'circle', type: 'text' }, "Primary"),
                React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                // onClick={() => { console.log(1234565) }}
                , { 
                    // onClick={() => { console.log(1234565) }}
                    type: 'link' }, "Primary"),
<<<<<<< HEAD
                react_1.default.createElement(index_1.Button
                // onClick={() => { console.log(1234565) }}
                , { 
                    // onClick={() => { console.log(1234565) }}
                    icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'circle', type: 'link', href: 'https://lanhuapp.com/web/#/item?fid=all&commonly=all', target: '_blank' }, "Primary")),
            react_1.default.createElement("div", null, "\u9ED8\u8BA4   \u60AC\u6D6E   \u70B9\u6309  \u7981\u7528"),
            react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column" } },
                react_1.default.createElement("div", { style: { margin: '30px' } },
                    react_1.default.createElement(index_1.Button
=======
                React.createElement(Button
                // onClick={() => { console.log(1234565) }}
                , { 
                    // onClick={() => { console.log(1234565) }}
                    icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'circle', type: 'link', href: 'https://lanhuapp.com/web/#/item?fid=all&commonly=all', target: '_blank' }, "Primary")),
            React.createElement("div", null, "\u9ED8\u8BA4   \u60AC\u6D6E   \u70B9\u6309  \u7981\u7528"),
            React.createElement("div", { style: { display: "flex", flexDirection: "column" } },
                React.createElement("div", { style: { margin: '30px' } },
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        type: 'primary' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        type: 'primary' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        type: 'primary' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        type: 'primary', disabled: true }, "Primary")),
<<<<<<< HEAD
                react_1.default.createElement("div", { style: { margin: '30px' } },
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , null, "Primary"),
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , null, "Primary"),
                    react_1.default.createElement(index_1.Button
                    // onClick={() => { console.log(1234565) }}
                    , null, "Primary"),
                    react_1.default.createElement(index_1.Button
=======
                React.createElement("div", { style: { margin: '30px' } },
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , null, "Primary"),
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , null, "Primary"),
                    React.createElement(Button
                    // onClick={() => { console.log(1234565) }}
                    , null, "Primary"),
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        disabled: true }, "Primary")),
<<<<<<< HEAD
                react_1.default.createElement("div", { style: { margin: '30px' } },
                    react_1.default.createElement(index_1.Button
=======
                React.createElement("div", { style: { margin: '30px' } },
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        type: 'dashed' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        type: 'dashed' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        type: 'dashed' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        type: 'dashed', disabled: true }, "Primary")),
<<<<<<< HEAD
                react_1.default.createElement("div", { style: { margin: '30px' } },
                    react_1.default.createElement(index_1.Button
=======
                React.createElement("div", { style: { margin: '30px' } },
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        type: 'text' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        type: 'text' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        type: 'text' }, "Primary"),
<<<<<<< HEAD
                    react_1.default.createElement(index_1.Button
=======
                    React.createElement(Button
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
                    // onClick={() => { console.log(1234565) }}
                    , { 
                        // onClick={() => { console.log(1234565) }}
                        type: 'text', disabled: true }, "Primary1111"))))));
}
<<<<<<< HEAD
exports.default = DemoButton;
=======
export default DemoButton;
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
