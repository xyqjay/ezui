"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = require("../components/index");
var Search = index_1.Input.Search;
var TextArea = index_1.Input.TextArea;
function DemoInput() {
    return (react_1.default.createElement("div", { className: "App", style: { display: 'flex', flexDirection: "column", alignItems: 'center' } },
        react_1.default.createElement("div", null, "1.1\u8F93\u5165\u5C3A\u5BF8"),
        react_1.default.createElement("div", { style: { display: 'flex', flexDirection: "column", alignItems: 'center' } },
            react_1.default.createElement("div", { style: { margin: '20px', display: 'flex' } },
                react_1.default.createElement(index_1.Input, { size: 'big', prefix: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), placeholder: 'Input text', style: { margin: '30px' } }),
                react_1.default.createElement(index_1.Input, { size: 'big', prefix: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), defaultValue: '1111122', onChange: function () { return null; }, placeholder: 'Input text', style: { margin: '30px' } })),
            react_1.default.createElement("div", { style: { marginBottom: '20px', display: 'flex' } },
                react_1.default.createElement(index_1.Input, { size: 'middle', prefix: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), placeholder: 'Input text', style: { margin: '30px' } }),
                react_1.default.createElement(index_1.Input, { size: 'middle', prefix: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), defaultValue: '1111122', onChange: function () { return null; }, placeholder: 'Input text', style: { margin: '30px' } })),
            react_1.default.createElement("div", { style: { marginBottom: '20px', display: 'flex' } },
                react_1.default.createElement(index_1.Input, { size: 'small', prefix: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), style: { margin: '30px' }, placeholder: 'Input text' }),
                react_1.default.createElement(index_1.Input, { size: 'small', prefix: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), defaultValue: '1111122', onChange: function () { return null; }, placeholder: 'Input text', style: { margin: '30px' } }))),
        react_1.default.createElement("div", null, "1.1\u8F93\u5165\u72B6\u6001"),
        react_1.default.createElement("div", { style: { display: 'flex', flexDirection: "column", alignItems: 'center' } },
            react_1.default.createElement("div", { style: { marginBottom: '20px' } },
                react_1.default.createElement(index_1.Input, { size: 'big', prefix: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), placeholder: 'Input text' })),
            react_1.default.createElement("div", { style: { marginBottom: '20px' } },
                react_1.default.createElement(index_1.Input, { size: 'big', prefix: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), placeholder: 'Input text' })),
            react_1.default.createElement("div", { style: { marginBottom: '20px' } },
                react_1.default.createElement(index_1.Input, { size: 'big', prefix: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), placeholder: 'Input text' })),
            react_1.default.createElement("div", { style: { marginBottom: '20px' } },
                react_1.default.createElement(index_1.Input, { size: 'big', prefix: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), placeholder: 'Input text' })),
            react_1.default.createElement("div", { style: { marginBottom: '20px' } },
                react_1.default.createElement(index_1.Input, { size: 'big', warn: true, warnText: 'error', prefix: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), placeholder: 'Input text' }))),
        react_1.default.createElement("div", { style: { marginBottom: '30px' } }, "1.2 \u6709\u6807\u9898\u8F93\u5165\u6846"),
        react_1.default.createElement("div", { style: { display: 'flex', flexDirection: "column", alignItems: 'center' } },
            react_1.default.createElement("div", { style: { marginBottom: '60px' } },
                react_1.default.createElement(index_1.Input, { label: 'Enter your email', size: 'big', placeholder: 'Input text', style: { margin: '30px' } }))),
        react_1.default.createElement("div", { style: { marginBottom: '30px' } }, "1.3 \u7EAF\u8F93\u5165\u6846"),
        react_1.default.createElement("div", { style: { display: 'flex', flexDirection: "column", alignItems: 'center' } },
            react_1.default.createElement("div", { style: { marginBottom: '60px' } },
                react_1.default.createElement(index_1.Input
                // label='Enter your email'
                , { 
                    // label='Enter your email'
                    size: 'big', placeholder: 'Input text', style: { margin: '30px' } }))),
        react_1.default.createElement("div", { style: { marginBottom: '30px' } }, "1.4\u7EC4\u5408\u8F93\u5165\u6846"),
        react_1.default.createElement("div", { style: { display: 'flex', flexDirection: "column", alignItems: 'center' } },
            react_1.default.createElement("div", { style: { marginBottom: '60px' } },
                react_1.default.createElement(Search, { style: { margin: '30px' }, placeholder: "Input text", enterButton: "Search" }),
                react_1.default.createElement(Search, { style: { margin: '30px' }, placeholder: "Input text", enterButton: "Search", defaultValue: 'texttexttexttex', onChange: function () { return null; } })),
            react_1.default.createElement("div", { style: { marginBottom: '60px' } },
                react_1.default.createElement(Search, { style: { margin: '30px' }, placeholder: "Input text", suffix: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), defaultValue: 'texttexttexttex', onChange: function () { return null; } }),
                react_1.default.createElement(Search, { style: { margin: '30px' }, placeholder: "Input text", suffix: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), defaultValue: 'texttexttexttex', onChange: function () { return null; } }))),
        react_1.default.createElement("div", { style: { marginBottom: '30px' } }, "2.1\u591A\u884C\u8F93\u5165\u7EAF\u8F93\u5165\u6846"),
        react_1.default.createElement("div", { style: { display: 'flex', flexDirection: "column", alignItems: 'center' } },
            react_1.default.createElement("div", { style: { marginBottom: '60px' } },
                react_1.default.createElement(TextArea, { rows: '4', style: { margin: '30px' } }),
                react_1.default.createElement(TextArea, { rows: '4', defaultValue: '1234355', onChange: function () { return null; }, style: { margin: '30px' } }))),
        react_1.default.createElement("div", { style: { marginBottom: '30px' } }, "2.2 \u6570\u5B57\u63D0\u793A\u8F93\u5165\u6846"),
        react_1.default.createElement("div", { style: { display: 'flex', flexDirection: "column", alignItems: 'center' } },
            react_1.default.createElement("div", { style: { marginBottom: '60px' } },
                react_1.default.createElement(TextArea, { rows: '4', showCount: true, maxLength: 1000, style: { margin: '30px' } }),
                react_1.default.createElement(TextArea, { rows: '4', defaultValue: '1234355', showCount: true, maxLength: 1000, style: { margin: '30px' } })))));
}
exports.default = DemoInput;
