import React from 'react';
import Style from './modal.module.scss';
import Button from '../button/button';
function Modal(_a) {
    var _b = _a.size, size = _b === void 0 ? 'middle' : _b, title = _a.title, onOk = _a.onOk, onCancel = _a.onCancel, children = _a.children, footer = _a.footer, _c = _a.okType, okType = _c === void 0 ? 'primary' : _c, _d = _a.okText, okText = _d === void 0 ? React.createElement("span", null, "submit ") : _d, cancelText = _a.cancelText, _e = _a.cancelType, cancelType = _e === void 0 ? '' : _e, width = _a.width, _f = _a.centered, centered = _f === void 0 ? false : _f, style = _a.style, _g = _a.className, className = _g === void 0 ? '' : _g;
    var modalContentClassName = Style['ez-modal-content'] + " ";
    modalContentClassName = modalContentClassName + (centered ? Style['ez-modal-content-center'] + " " : '');
    var modalHeaderClassName = Style['ez-modal-header'] + " ";
    var modalBodyClassName = Style['ez-modal-body'] + " ";
    var modalFooterClassName = Style['ez-modal-footer'] + " ";
    var modalTitleClassName = Style['ez-modal-title'] + " ";
    switch (size) {
        case 'big':
            modalContentClassName = modalContentClassName + (Style['ez-modal-content-bg'] + " ");
            break;
        case 'middle':
            modalContentClassName = modalContentClassName + (Style['ez-modal-content-md'] + " ");
            break;
        default:
            modalContentClassName = modalContentClassName + '';
            break;
    }
    return (React.createElement("div", { className: className + " " + Style['ez-modal-mask'], style: style },
        React.createElement("div", { className: Style['ez-modal-wrap'] },
            React.createElement("div", { className: modalContentClassName, style: { margin: 0, width: width } },
                React.createElement(Button, { onClick: onCancel, size: size, icon: React.createElement("img", { src: 'https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png', alt: "" }), shape: 'round', className: Style['ez-modal-close'] + " " }),
                React.createElement("div", { className: modalHeaderClassName },
                    React.createElement("div", { className: modalTitleClassName }, title)),
                React.createElement("div", { className: modalBodyClassName }, children),
                footer ?
                    React.createElement("div", { className: modalFooterClassName }, footer)
                    : React.createElement("div", { className: modalFooterClassName },
                        cancelText ? React.createElement(Button, { onClick: onCancel, size: 'middle', shape: 'round', type: cancelType }, cancelText) : '',
                        React.createElement(Button, { onClick: onOk, size: 'middle', shape: 'round', type: okType }, okText))))));
}
Modal.Popover = function Popover(_a) {
    var _b = _a.size, size = _b === void 0 ? 'middle' : _b, title = _a.title, onOk = _a.onOk, onCancel = _a.onCancel, children = _a.children, footer = _a.footer, _c = _a.okType, okType = _c === void 0 ? 'primary' : _c, okText = _a.okText, cancelText = _a.cancelText, _d = _a.cancelType, cancelType = _d === void 0 ? '' : _d, width = _a.width, _e = _a.centered, centered = _e === void 0 ? false : _e, _f = _a.placement, placement = _f === void 0 ? 'bottom' : _f, style = _a.style, className = _a.className;
    var modalContentClassName = Style['ez-modal-content'] + " ";
    modalContentClassName = modalContentClassName + (centered ? Style['ez-modal-content-center'] + " " : '');
    var modalHeaderClassName = Style['ez-modal-header'] + " ";
    var modalBodyClassName = Style['ez-modal-body'] + " ";
    var modalFooterClassName = Style['ez-modal-footer'] + " ";
    var modalTitleClassName = Style['ez-modal-title'] + " ";
    var modalTrangleClassName = Style['ez-modal-trangle'] + " ";
    switch (size) {
        case 'big':
            modalContentClassName = modalContentClassName + (Style['ez-modal-content-bg'] + " ");
            break;
        case 'middle':
            modalContentClassName = modalContentClassName + (Style['ez-modal-content-md'] + " ");
            break;
        default:
            modalContentClassName = modalContentClassName + '';
            break;
    }
    modalTrangleClassName = modalTrangleClassName + (Style['ez-modal-trangle-' + placement] + " ");
    return (React.createElement("div", { className: Style['ez-modal-mask'] + " " + className ? className : '', style: style },
        React.createElement("div", { className: Style['ez-modal-wrap'] + " " },
            React.createElement("div", { className: modalContentClassName, style: { width: width } },
                React.createElement("div", { className: modalTrangleClassName }),
                React.createElement("div", { className: modalHeaderClassName },
                    React.createElement("div", { className: modalTitleClassName }, title)),
                children ? React.createElement("div", { className: modalBodyClassName }, children) : '',
                footer ?
                    React.createElement("div", { className: modalFooterClassName }, footer)
                    : React.createElement("div", { className: modalFooterClassName },
                        cancelText ? React.createElement(Button, { onClick: onCancel, size: 'middle', shape: 'round', type: cancelType }, cancelText) : '',
                        okText ? React.createElement(Button, { onClick: onOk, size: 'middle', shape: 'round', type: okType }, okText) : '')))));
};
Modal.Tooltip = function Tooltip(_a) {
    var _b = _a.size, size = _b === void 0 ? 'middle' : _b, title = _a.title, width = _a.width, _c = _a.centered, centered = _c === void 0 ? false : _c, _d = _a.placement, placement = _d === void 0 ? 'bottom' : _d, style = _a.style, _e = _a.className, className = _e === void 0 ? '' : _e;
    var modalContentClassName = Style['ez-modal-content'] + " ";
    modalContentClassName = modalContentClassName + (centered ? Style['ez-modal-content-center'] + " " : '');
    var modalHeaderClassName = Style['ez-modal-header'] + " ";
    var modalTitleClassName = Style['ez-modal-title'] + " ";
    var modalTrangleClassName = Style['ez-modal-trangle'] + " ";
    switch (size) {
        case 'big':
            modalContentClassName = modalContentClassName + (Style['ez-modal-content-bg'] + " ");
            break;
        case 'middle':
            modalContentClassName = modalContentClassName + (Style['ez-modal-content-md'] + " ");
            break;
        default:
            modalContentClassName = modalContentClassName + '';
            break;
    }
    modalTrangleClassName = modalTrangleClassName + (Style['ez-modal-trangle-' + placement] + " ");
    return (React.createElement("div", { className: Style['ez-modal-mask'] + " " + className, style: style },
        React.createElement("div", { className: Style['ez-modal-wrap'] + " " },
            React.createElement("div", { className: modalContentClassName, style: { width: width } },
                React.createElement("div", { className: modalTrangleClassName }),
                React.createElement("div", { className: modalHeaderClassName },
                    React.createElement("div", { className: modalTitleClassName }, title))))));
};
Modal.Message = function Tooltip(_a) {
    var _b = _a.size, size = _b === void 0 ? 'middle' : _b, title = _a.title, width = _a.width, _c = _a.centered, centered = _c === void 0 ? false : _c, _d = _a.placement, placement = _d === void 0 ? 'bottom' : _d, icon = _a.icon, _e = _a.className, className = _e === void 0 ? '' : _e, style = _a.style;
    var modalContentClassName = Style['ez-modal-content'] + " ";
    modalContentClassName = modalContentClassName + (centered ? Style['ez-modal-content-center'] + " " : '');
    var modalHeaderClassName = Style['ez-modal-header'] + " ";
    var modalTitleClassName = Style['ez-modal-title'] + " ";
    var modalTrangleClassName = Style['ez-modal-trangle'] + " ";
    switch (size) {
        case 'big':
            modalContentClassName = modalContentClassName + (Style['ez-modal-content-bg'] + " ");
            break;
        case 'middle':
            modalContentClassName = modalContentClassName + (Style['ez-modal-content-md'] + " ");
            break;
        default:
            modalContentClassName = modalContentClassName + '';
            break;
    }
    modalTrangleClassName = modalTrangleClassName + (Style['ez-modal-trangle-' + placement] + " ");
    return (React.createElement("div", { className: Style['ez-modal-mask'] + " " + className, style: style },
        React.createElement("div", { className: Style['ez-modal-wrap'] + " " },
            React.createElement("div", { className: modalContentClassName, style: { width: width } },
                React.createElement("div", { className: modalTrangleClassName }),
                React.createElement("div", { className: modalHeaderClassName },
                    React.createElement("div", { className: Style['ez-modal-message-icon'] + " " }, icon),
                    React.createElement("div", { className: modalTitleClassName }, title),
                    React.createElement("div", { className: Style['ez-modal-message-icon'] + " " }, icon))))));
};
export default Modal;
