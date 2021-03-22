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
import React, { Component } from 'react';
import { Tag } from '../components/index';
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
        _this.childRef = React.createRef();
        console.log(_this.childRef.current);
        return _this;
    }
    DemoRadio.prototype.componentDidMount = function () {
        console.log(this.childRef);
    };
    DemoRadio.prototype.render = function () {
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
