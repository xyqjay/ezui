<<<<<<< HEAD
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
// import { Select, Option } from '../components/index';
var index_1 = require("../components/index");
var Option = index_1.Select.Option;
function SelectDemo() {
    // console.log(Option)
    return (react_1.default.createElement("div", { style: { display: 'flex', flexDirection: "column", textAlign: 'center' } },
        react_1.default.createElement("div", null, "11.\u4E0B\u62C9\u6846"),
        react_1.default.createElement(index_1.Select, { onClick: function () {
                // console.log('子组件')
            }, onChange: function (key, value) {
                console.log(key, value);
            }, placeholder: '\u6211\u662Fplaceholder' },
            react_1.default.createElement(Option, { Key: 1, value: 111 }, "111"),
            react_1.default.createElement(Option, { Key: 2, value: 222, icon: react_1.default.createElement("svg", { className: 'icon', "aria-hidden": 'true' },
                    react_1.default.createElement("use", { xlinkHref: '#iconicon_right' })) }, "222"),
            react_1.default.createElement(Option, { Key: 3, value: 333 }, "333"),
            react_1.default.createElement(Option, { Key: 4, value: 444 }, "444"),
            react_1.default.createElement(Option, { Key: 5, value: 5 }, "5"),
            react_1.default.createElement(Option, { Key: 6, value: 6 }, "6"),
            react_1.default.createElement(Option, { Key: 7, value: 7 }, "7"),
            react_1.default.createElement(Option, { Key: 8, value: 8 }, "8"),
            react_1.default.createElement(Option, { Key: 'abc', value: 'abcdefghijklmnopqrstuvwxyz' }, "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz")),
        react_1.default.createElement("div", { style: { height: '10px' } }),
        react_1.default.createElement(index_1.Select, { onClick: function () {
                // console.log('子组件')
            }, onChange: function (key, value) {
                console.log(key, value);
            }, size: 'large' },
            react_1.default.createElement(Option, { Key: 1, value: 111, icon: react_1.default.createElement("svg", { className: 'icon', "aria-hidden": 'true' },
                    react_1.default.createElement("use", { xlinkHref: '#iconicon_right' })) }, "111"),
            react_1.default.createElement(Option, { Key: 2, value: 222 }, "222"),
            react_1.default.createElement(Option, { Key: 3, value: 333 }, "333"),
            react_1.default.createElement(Option, { Key: 4, value: 444, icon: react_1.default.createElement("svg", { className: 'icon', "aria-hidden": 'true' },
                    react_1.default.createElement("use", { xlinkHref: '#iconicon_right' })) }, "444"),
            react_1.default.createElement(Option, { Key: 5, value: 5 }, "5"),
            react_1.default.createElement(Option, { Key: 6, value: 6 }, "6"),
            react_1.default.createElement(Option, { Key: 7, value: 7 }, "7"),
            react_1.default.createElement(Option, { Key: 8, value: 8 }, "8"),
            react_1.default.createElement(Option, { Key: 'abc', value: 'abcdefghijklmnopqrstuvwxyz' }, "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"))));
}
exports.default = SelectDemo;
=======
import React from 'react';
// import { Select, Option } from '../components/index';
// import { Select, Option } from '../components/index';
// const { Option } = Select;
function SelectDemo() {
    // console.log(Option)
    return (React.createElement("div", null));
}
export default SelectDemo;
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
