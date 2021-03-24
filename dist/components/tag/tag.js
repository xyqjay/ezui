<<<<<<< HEAD
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tag_module_scss_1 = __importDefault(require("./tag.module.scss"));
var Tag = function Tag(_a) {
    var _b = _a.size, size = _b === void 0 ? 'middle' : _b, children = _a.children, style = _a.style, _c = _a.className, className = _c === void 0 ? '' : _c;
    var tagClassName = tag_module_scss_1.default['ez-tag'] + " " + className;
    switch (size) {
        case 'big':
            tagClassName = tagClassName + (tag_module_scss_1.default['ez-tag-bg'] + " ");
            break;
        case 'middle':
            tagClassName = tagClassName + (tag_module_scss_1.default['ez-tag-middle'] + " ");
=======
import React from 'react';
import Style from './tag.module.scss';
var Tag = function Tag(_a) {
    var _b = _a.size, size = _b === void 0 ? 'middle' : _b, children = _a.children, style = _a.style, _c = _a.className, className = _c === void 0 ? '' : _c;
    var tagClassName = Style['ez-tag'] + " " + className;
    switch (size) {
        case 'big':
            tagClassName = tagClassName + (Style['ez-tag-bg'] + " ");
            break;
        case 'middle':
            tagClassName = tagClassName + (Style['ez-tag-middle'] + " ");
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
            break;
        default:
            tagClassName = tagClassName + '';
            break;
    }
<<<<<<< HEAD
    return (react_1.default.createElement("span", { className: tagClassName, style: style }, children));
};
exports.default = Tag;
=======
    return (React.createElement("span", { className: tagClassName, style: style }, children));
};
export default Tag;
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
