"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var modal_module_scss_1 = __importDefault(require("./modal.module.scss"));
var button_1 = __importDefault(require("../button/button"));
function Modal(_a) {
    var _b = _a.size, size = _b === void 0 ? 'middle' : _b, title = _a.title, onOk = _a.onOk, onCancel = _a.onCancel, children = _a.children, footer = _a.footer, _c = _a.okType, okType = _c === void 0 ? 'primary' : _c, _d = _a.okText, okText = _d === void 0 ? react_1.default.createElement("span", null, "submit ") : _d, cancelText = _a.cancelText, _e = _a.cancelType, cancelType = _e === void 0 ? '' : _e, width = _a.width, _f = _a.centered, centered = _f === void 0 ? false : _f, style = _a.style, _g = _a.className, className = _g === void 0 ? '' : _g;
    var modalContentClassName = modal_module_scss_1.default['ez-modal-content'] + " ";
    modalContentClassName = modalContentClassName + (centered ? modal_module_scss_1.default['ez-modal-content-center'] + " " : '');
    var modalHeaderClassName = modal_module_scss_1.default['ez-modal-header'] + " ";
    var modalBodyClassName = modal_module_scss_1.default['ez-modal-body'] + " ";
    var modalFooterClassName = modal_module_scss_1.default['ez-modal-footer'] + " ";
    var modalTitleClassName = modal_module_scss_1.default['ez-modal-title'] + " ";
    switch (size) {
        case 'big':
            modalContentClassName = modalContentClassName + (modal_module_scss_1.default['ez-modal-content-bg'] + " ");
            break;
        case 'middle':
            modalContentClassName = modalContentClassName + (modal_module_scss_1.default['ez-modal-content-md'] + " ");
            break;
        default:
            modalContentClassName = modalContentClassName + '';
            break;
    }
    return (react_1.default.createElement("div", { className: className + " " + modal_module_scss_1.default['ez-modal-mask'], style: style },
        react_1.default.createElement("div", { className: modal_module_scss_1.default['ez-modal-wrap'] },
            react_1.default.createElement("div", { className: modalContentClassName, style: { margin: 0, width: width } },
                react_1.default.createElement(button_1.default, { onClick: onCancel, size: size, icon: react_1.default.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round', className: modal_module_scss_1.default['ez-modal-close'] + " " }),
                react_1.default.createElement("div", { className: modalHeaderClassName },
                    react_1.default.createElement("div", { className: modalTitleClassName }, title)),
                react_1.default.createElement("div", { className: modalBodyClassName }, children),
                footer ?
                    react_1.default.createElement("div", { className: modalFooterClassName }, footer)
                    : react_1.default.createElement("div", { className: modalFooterClassName },
                        cancelText ? react_1.default.createElement(button_1.default, { onClick: onCancel, size: 'middle', shape: 'round', type: cancelType }, cancelText) : '',
                        react_1.default.createElement(button_1.default, { onClick: onOk, size: 'middle', shape: 'round', type: okType }, okText))))));
}
Modal.Popover = function Popover(_a) {
    var _b = _a.size, size = _b === void 0 ? 'middle' : _b, title = _a.title, onOk = _a.onOk, onCancel = _a.onCancel, children = _a.children, footer = _a.footer, _c = _a.okType, okType = _c === void 0 ? 'primary' : _c, okText = _a.okText, cancelText = _a.cancelText, _d = _a.cancelType, cancelType = _d === void 0 ? '' : _d, width = _a.width, _e = _a.centered, centered = _e === void 0 ? false : _e, _f = _a.placement, placement = _f === void 0 ? 'bottom' : _f, style = _a.style, className = _a.className;
    var modalContentClassName = modal_module_scss_1.default['ez-modal-content'] + " ";
    modalContentClassName = modalContentClassName + (centered ? modal_module_scss_1.default['ez-modal-content-center'] + " " : '');
    var modalHeaderClassName = modal_module_scss_1.default['ez-modal-header'] + " ";
    var modalBodyClassName = modal_module_scss_1.default['ez-modal-body'] + " ";
    var modalFooterClassName = modal_module_scss_1.default['ez-modal-footer'] + " ";
    var modalTitleClassName = modal_module_scss_1.default['ez-modal-title'] + " ";
    var modalTrangleClassName = modal_module_scss_1.default['ez-modal-trangle'] + " ";
    switch (size) {
        case 'big':
            modalContentClassName = modalContentClassName + (modal_module_scss_1.default['ez-modal-content-bg'] + " ");
            break;
        case 'middle':
            modalContentClassName = modalContentClassName + (modal_module_scss_1.default['ez-modal-content-md'] + " ");
            break;
        default:
            modalContentClassName = modalContentClassName + '';
            break;
    }
    modalTrangleClassName = modalTrangleClassName + (modal_module_scss_1.default['ez-modal-trangle-' + placement] + " ");
    return (react_1.default.createElement("div", { className: modal_module_scss_1.default['ez-modal-mask'] + " " + className ? className : '', style: style },
        react_1.default.createElement("div", { className: modal_module_scss_1.default['ez-modal-wrap'] + " " },
            react_1.default.createElement("div", { className: modalContentClassName, style: { width: width } },
                react_1.default.createElement("div", { className: modalTrangleClassName }),
                react_1.default.createElement("div", { className: modalHeaderClassName },
                    react_1.default.createElement("div", { className: modalTitleClassName }, title)),
                children ? react_1.default.createElement("div", { className: modalBodyClassName }, children) : '',
                footer ?
                    react_1.default.createElement("div", { className: modalFooterClassName }, footer)
                    : react_1.default.createElement("div", { className: modalFooterClassName },
                        cancelText ? react_1.default.createElement(button_1.default, { onClick: onCancel, size: 'middle', shape: 'round', type: cancelType }, cancelText) : '',
                        okText ? react_1.default.createElement(button_1.default, { onClick: onOk, size: 'middle', shape: 'round', type: okType }, okText) : '')))));
};
Modal.Tooltip = function Tooltip(_a) {
    var _b = _a.size, size = _b === void 0 ? 'middle' : _b, title = _a.title, width = _a.width, _c = _a.centered, centered = _c === void 0 ? false : _c, _d = _a.placement, placement = _d === void 0 ? 'bottom' : _d, style = _a.style, _e = _a.className, className = _e === void 0 ? '' : _e;
    var modalContentClassName = modal_module_scss_1.default['ez-modal-content'] + " ";
    modalContentClassName = modalContentClassName + (centered ? modal_module_scss_1.default['ez-modal-content-center'] + " " : '');
    var modalHeaderClassName = modal_module_scss_1.default['ez-modal-header'] + " ";
    var modalTitleClassName = modal_module_scss_1.default['ez-modal-title'] + " ";
    var modalTrangleClassName = modal_module_scss_1.default['ez-modal-trangle'] + " ";
    switch (size) {
        case 'big':
            modalContentClassName = modalContentClassName + (modal_module_scss_1.default['ez-modal-content-bg'] + " ");
            break;
        case 'middle':
            modalContentClassName = modalContentClassName + (modal_module_scss_1.default['ez-modal-content-md'] + " ");
            break;
        default:
            modalContentClassName = modalContentClassName + '';
            break;
    }
    modalTrangleClassName = modalTrangleClassName + (modal_module_scss_1.default['ez-modal-trangle-' + placement] + " ");
    return (react_1.default.createElement("div", { className: modal_module_scss_1.default['ez-modal-mask'] + " " + className, style: style },
        react_1.default.createElement("div", { className: modal_module_scss_1.default['ez-modal-wrap'] + " " },
            react_1.default.createElement("div", { className: modalContentClassName, style: { width: width } },
                react_1.default.createElement("div", { className: modalTrangleClassName }),
                react_1.default.createElement("div", { className: modalHeaderClassName },
                    react_1.default.createElement("div", { className: modalTitleClassName }, title))))));
};
Modal.Message = function Tooltip(_a) {
    var _b = _a.size, size = _b === void 0 ? 'middle' : _b, title = _a.title, width = _a.width, _c = _a.centered, centered = _c === void 0 ? false : _c, _d = _a.placement, placement = _d === void 0 ? 'bottom' : _d, icon = _a.icon, _e = _a.className, className = _e === void 0 ? '' : _e, style = _a.style;
    var modalContentClassName = modal_module_scss_1.default['ez-modal-content'] + " ";
    modalContentClassName = modalContentClassName + (centered ? modal_module_scss_1.default['ez-modal-content-center'] + " " : '');
    var modalHeaderClassName = modal_module_scss_1.default['ez-modal-header'] + " ";
    var modalTitleClassName = modal_module_scss_1.default['ez-modal-title'] + " ";
    var modalTrangleClassName = modal_module_scss_1.default['ez-modal-trangle'] + " ";
    switch (size) {
        case 'big':
            modalContentClassName = modalContentClassName + (modal_module_scss_1.default['ez-modal-content-bg'] + " ");
            break;
        case 'middle':
            modalContentClassName = modalContentClassName + (modal_module_scss_1.default['ez-modal-content-md'] + " ");
            break;
        default:
            modalContentClassName = modalContentClassName + '';
            break;
    }
    modalTrangleClassName = modalTrangleClassName + (modal_module_scss_1.default['ez-modal-trangle-' + placement] + " ");
    return (react_1.default.createElement("div", { className: modal_module_scss_1.default['ez-modal-mask'] + " " + className, style: style },
        react_1.default.createElement("div", { className: modal_module_scss_1.default['ez-modal-wrap'] + " " },
            react_1.default.createElement("div", { className: modalContentClassName, style: { width: width } },
                react_1.default.createElement("div", { className: modalTrangleClassName }),
                react_1.default.createElement("div", { className: modalHeaderClassName },
                    react_1.default.createElement("div", { className: modal_module_scss_1.default['ez-modal-message-icon'] + " " }, icon),
                    react_1.default.createElement("div", { className: modalTitleClassName }, title),
                    react_1.default.createElement("div", { className: modal_module_scss_1.default['ez-modal-message-icon'] + " " }, icon))))));
};
exports.default = Modal;
