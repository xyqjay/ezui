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
            break;
        default:
            tagClassName = tagClassName + '';
            break;
    }
    return (react_1.default.createElement("span", { className: tagClassName, style: style }, children));
};
exports.default = Tag;
