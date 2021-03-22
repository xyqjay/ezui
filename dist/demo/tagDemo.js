<<<<<<< HEAD
"use strict";
=======
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
<<<<<<< HEAD
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var index_1 = require("../components/index");
=======
import React, { Component } from 'react';
import { Tag } from '../components/index';
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
// function DemoRadio() {
//   console.log(this.refs.name)
//   let name
//   return (
//     <div className="App" style={{ display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: 'center' }}>
//       <div style={{ display: 'flex', flexDirection: "column" }}>
//         <div>主要按钮</div>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <div className="big" style={{ display: "flex", alignItems: "center",flexDirection:'column' }}>
//             <  Tag>red</Tag>
//             <div style={{marginBottom:'20px'}}></div>
//             {/* <  Tag size='big' style={{width:'12px'}} >red</Tag> */}
//             <  Tag size='big'>red</Tag>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
var DemoRadio = /** @class */ (function (_super) {
    __extends(DemoRadio, _super);
    function DemoRadio(parameters) {
        var _this = _super.call(this, parameters) || this;
<<<<<<< HEAD
        _this.childRef = react_1.default.createRef();
=======
        _this.childRef = React.createRef();
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
        console.log(_this.childRef.current);
        return _this;
    }
    DemoRadio.prototype.componentDidMount = function () {
        console.log(this.childRef);
    };
    DemoRadio.prototype.render = function () {
<<<<<<< HEAD
        return (react_1.default.createElement("div", { className: "App", style: { display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: 'center' } },
            react_1.default.createElement("div", { style: { display: 'flex', flexDirection: "column" } },
                react_1.default.createElement("div", null, "10\u3001\u6807\u7B7E"),
                react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column" } },
                    react_1.default.createElement("div", { className: "big", style: { display: "flex", alignItems: "center", flexDirection: 'column' }, onClick: function () {
                        } },
                        react_1.default.createElement(index_1.Tag, null, "Search"),
                        react_1.default.createElement("div", { style: { marginBottom: '20px' } }),
                        react_1.default.createElement(index_1.Tag, { size: 'big', style: {} }, "Search"))))));
    };
    return DemoRadio;
}(react_1.Component));
exports.default = DemoRadio;
=======
        return (React.createElement("div", { className: "App", style: { display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: 'center' } },
            React.createElement("div", { style: { display: 'flex', flexDirection: "column" } },
                React.createElement("div", null, "10\u3001\u6807\u7B7E"),
                React.createElement("div", { style: { display: "flex", flexDirection: "column" } },
                    React.createElement("div", { className: "big", style: { display: "flex", alignItems: "center", flexDirection: 'column' }, onClick: function () {
                        } },
                        React.createElement(Tag, null, "Search"),
                        React.createElement("div", { style: { marginBottom: '20px' } }),
                        React.createElement(Tag, { size: 'big', style: {} }, "Search"))))));
    };
    return DemoRadio;
}(Component));
export default DemoRadio;
>>>>>>> 48c283a28cc05126170beca1d478b281a4c6a5ad
