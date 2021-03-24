<<<<<<< HEAD
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = exports.Progress = exports.CheckBox = exports.Radio = exports.Modal = exports.Select = exports.Input = exports.Button = void 0;
// 组件对外入口
var button_1 = require("./button/button");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return __importDefault(button_1).default; } });
var input_1 = require("./input/input");
Object.defineProperty(exports, "Input", { enumerable: true, get: function () { return __importDefault(input_1).default; } });
var select_1 = require("./select/select");
Object.defineProperty(exports, "Select", { enumerable: true, get: function () { return __importDefault(select_1).default; } });
// export { default as Option } from './select/option';
var modal_1 = require("./modal/modal");
Object.defineProperty(exports, "Modal", { enumerable: true, get: function () { return __importDefault(modal_1).default; } });
var radio_1 = require("./radio/radio");
Object.defineProperty(exports, "Radio", { enumerable: true, get: function () { return __importDefault(radio_1).default; } });
var checkbox_1 = require("./checkbox/checkbox");
Object.defineProperty(exports, "CheckBox", { enumerable: true, get: function () { return __importDefault(checkbox_1).default; } });
var progress_1 = require("./progress/progress");
Object.defineProperty(exports, "Progress", { enumerable: true, get: function () { return __importDefault(progress_1).default; } });
var tag_1 = require("./tag/tag");
Object.defineProperty(exports, "Tag", { enumerable: true, get: function () { return __importDefault(tag_1).default; } });
=======
// 组件对外入口
export { default as Button } from './button/button';
export { default as Input } from './input/input';
// export { default as Select } from './select/select';
// export { default as Option } from './select/option';
export { default as Modal } from './modal/modal';
export { default as Radio } from './radio/radio';
export { default as CheckBox } from './checkbox/checkbox';
export { default as Progress } from './progress/progress';
export { default as Tag } from './tag/tag';
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
