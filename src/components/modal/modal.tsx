import React, { ReactElement } from 'react';
import Style from './modal.module.less';
import Button from '../button/button';

interface Props {
    afterClose?: boolean,//	Modal 完全关闭后的回调	function	-	
    bodyStyle?: boolean,//	Modal body 样式	CSSProperties		
    cancelButtonProps?: boolean,//	cancel 按钮 props	ButtonProps	-	
    cancelText?: ReactElement | string,//	取消按钮文字	ReactNode	取消	
    cancelType?: string,//	取消按钮文字	ReactNode	取消	
    centered?: boolean,//	垂直居中展示 Modal	boolean	false	
    closable?: boolean,//	是否显示右上角的关闭按钮	boolean	true	
    closeIcon?: ReactElement,//自定义关闭图标	ReactNode	<CloseOutlined />	
    confirmLoading?: boolean,//	确定按钮 loading	boolean	false	
    destroyOnClose?: boolean,//	关闭时销毁 Modal 里的子元素	boolean	false	
    focusTriggerAfterClose?: boolean,//	对话框关闭后是否需要聚焦触发元素	boolean	true	4.9.0
    footer?: ReactElement,//	底部内容，当不需要默认底部按钮时，可以设为 footer={null}	ReactNode	(确定取消按钮)	
    forceRender?: boolean,//	强制渲染 Modal	boolean	false	
    getContainer?: ReactElement,//	指定 Modal 挂载的 HTML 节点, false 为挂载在当前 dom	HTMLElement | () => HTMLElement | Selectors | false	document.body	
    keyboard?: boolean,//	是否支持键盘 esc 关闭	boolean	true	
    mask?: boolean,//是否展示遮罩	boolean	true	
    maskClosable?: boolean,//	点击蒙层是否允许关闭	boolean	true	
    maskStyle?: boolean,//	遮罩样式	CSSProperties		
    modalRender?: ReactElement,//	自定义渲染对话框	(node: ReactNode) => ReactNode	-	4.7.0
    okButtonProps?: ReactElement,//ok 按钮 props	ButtonProps	-	
    okText?: ReactElement | string,//	确认按钮文字	ReactNode	确定	
    okType?: string,//	确认按钮类型	string	primary	
    // style?: boolean,//	可用于设置浮层的样式，调整浮层位置等	CSSProperties	-	
    title?: ReactElement | string,//	标题	ReactNode	-	
    visible?: boolean,//	对话框是否可见	boolean	-	
    width?: string,//宽度	string | number	520	
    wrapClassName?: string,//	对话框外层容器的类名	string	-	
    zIndex?: boolean,//	设置 Modal 的 z-index	number	1000	
    onCancel?: () => void,//	点击遮罩层或右上角叉或取消按钮的回调	function(e)	-	
    onOk?: () => void,//
    size?: string,
    children?: ReactElement | string | ReactElement[],//
    placement?: string,
    style?: object,
    className?: string
    icon?: ReactElement | string,//message  icon
}
function Modal({
    size = 'middle',
    title,
    onOk,
    onCancel,
    children,
    footer,
    okType = 'primary',
    okText = <span>submit </span>,
    cancelText,
    cancelType = '',
    width,
    centered = false,
    style,
    className = ''
}: Props,) {
    let modalContentClassName = `${Style['ez-modal-content']} `;
    modalContentClassName = modalContentClassName + (centered ? `${Style['ez-modal-content-center']} ` : '')
    let modalHeaderClassName = `${Style['ez-modal-header']} `;
    let modalBodyClassName = `${Style['ez-modal-body']} `;
    let modalFooterClassName = `${Style['ez-modal-footer']} `;
    let modalTitleClassName = `${Style['ez-modal-title']} `;
    switch (size) {
        case 'big':
            modalContentClassName = modalContentClassName + `${Style['ez-modal-content-bg']} `;

            break;
        case 'middle':
            modalContentClassName = modalContentClassName + `${Style['ez-modal-content-md']} `;
            break;
        default:
            modalContentClassName = modalContentClassName + '';
            break;
    }
    return (
        <div className={`${className} ${Style['ez-modal-mask']}`} style={style}>
            <div className={Style['ez-modal-wrap']}>
                <div className={modalContentClassName} style={{ margin: 0, width }}>
                    <Button onClick={onCancel}
                        size={size}
                        icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
                        shape='round'
                        className={`${Style['ez-modal-close']} `}
                    ></Button>
                    <div className={modalHeaderClassName}>
                        <div className={modalTitleClassName}>{title}</div>
                    </div>
                    <div className={modalBodyClassName}>{children}</div>
                    {footer ?
                        <div className={modalFooterClassName}>{footer}</div>
                        : <div className={modalFooterClassName}>
                            {cancelText ? <Button
                                onClick={onCancel}
                                size='middle'
                                shape='round'
                                type={cancelType}
                            >{cancelText}</Button> : ''}
                            <Button
                                onClick={onOk}
                                size='middle'
                                shape='round'
                                type={okType}
                            >{okText}</Button>
                        </div>}
                </div>
            </div>
        </div>
    );
}

Modal.Popover = function Popover({
    size = 'middle',
    title,
    onOk,
    onCancel,
    children,
    footer,
    okType = 'primary',
    okText,
    cancelText,
    cancelType = '',
    width,
    centered = false,
    placement = 'bottom',
    style,
    className=''
}: Props,) {
    let modalContentClassName = `${Style['ez-modal-content']} `;
    modalContentClassName = modalContentClassName + (centered ? `${Style['ez-modal-content-center']} ` : '')
    let modalHeaderClassName = `${Style['ez-modal-header']} `;
    let modalBodyClassName = `${Style['ez-modal-body']} `;
    let modalFooterClassName = `${Style['ez-modal-footer']} `;
    let modalTitleClassName = `${Style['ez-modal-title']} `;
    let modalTrangleClassName = `${Style['ez-modal-trangle']} `;
    switch (size) {
        case 'big':
            modalContentClassName = modalContentClassName + `${Style['ez-modal-content-bg']} `;

            break;
        case 'middle':
            modalContentClassName = modalContentClassName + `${Style['ez-modal-content-md']} `;
            break;
        default:
            modalContentClassName = modalContentClassName + '';
            break;
    }
    modalTrangleClassName = modalTrangleClassName + `${Style['ez-modal-trangle-' + placement]} `;
    return (
        <div className={`${Style['ez-modal-mask']} ` + className}style={style}>
            <div className={`${Style['ez-modal-wrap']} `}>
                <div className={modalContentClassName} style={{ width }}>
                    <div className={modalTrangleClassName}></div>
                    <div className={modalHeaderClassName}>
                        <div className={modalTitleClassName}>{title}</div>
                    </div>
                    {children ? <div className={modalBodyClassName}>{children}</div> : ''}
                    {footer ?
                        <div className={modalFooterClassName}>{footer}</div>
                        : <div className={modalFooterClassName}>
                            {cancelText ? <Button
                                onClick={onCancel}
                                size='middle'
                                shape='round'
                                type={cancelType}
                            >{cancelText}</Button> : ''}
                            {okText ? <Button
                                onClick={onOk}
                                size='middle'
                                shape='round'
                                type={okType}
                            >{okText}</Button> : ''}
                        </div>}
                </div>
            </div>
        </div>
    );
}
Modal.Tooltip = function Tooltip({
    size = 'middle',
    title,
    width,
    centered = false,
    placement = 'bottom',
    style,
    className = ''
}: Props,) {
    let modalContentClassName = `${Style['ez-modal-content']} `;
    modalContentClassName = modalContentClassName + (centered ? `${Style['ez-modal-content-center']} ` : '')
    let modalHeaderClassName = `${Style['ez-modal-header']} `;
    let modalTitleClassName = `${Style['ez-modal-title']} `;
    let modalTrangleClassName = `${Style['ez-modal-trangle']} `;
    switch (size) {
        case 'big':
            modalContentClassName = modalContentClassName + `${Style['ez-modal-content-bg']} `;

            break;
        case 'middle':
            modalContentClassName = modalContentClassName + `${Style['ez-modal-content-md']} `;
            break;
        default:
            modalContentClassName = modalContentClassName + '';
            break;
    }
    modalTrangleClassName = modalTrangleClassName + `${Style['ez-modal-trangle-' + placement]} `;
    return (
        <div className={`${Style['ez-modal-mask']} ` + className} style={style}>
            <div className={`${Style['ez-modal-wrap']} `}>
                <div className={modalContentClassName} style={{ width }} >
                    <div className={modalTrangleClassName}></div>
                    <div className={modalHeaderClassName}>
                        <div className={modalTitleClassName}>{title}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
Modal.Message = function Tooltip({
    size = 'middle',
    title,
    width,
    centered = false,
    placement = 'bottom',
    icon,
    className = '',
    style
}: Props,) {
    let modalContentClassName = `${Style['ez-modal-content']} `;
    modalContentClassName = modalContentClassName + (centered ? `${Style['ez-modal-content-center']} ` : '')
    let modalHeaderClassName = `${Style['ez-modal-header']} `;
    let modalTitleClassName = `${Style['ez-modal-title']} `;
    let modalTrangleClassName = `${Style['ez-modal-trangle']} `;

    switch (size) {
        case 'big':
            modalContentClassName = modalContentClassName + `${Style['ez-modal-content-bg']} `;

            break;
        case 'middle':
            modalContentClassName = modalContentClassName + `${Style['ez-modal-content-md']} `;
            break;
        default:
            modalContentClassName = modalContentClassName + '';
            break;
    }
    modalTrangleClassName = modalTrangleClassName + `${Style['ez-modal-trangle-' + placement]} `;

    return (
        <div className={`${Style['ez-modal-mask']} ` + className} style={style}>
            <div className={`${Style['ez-modal-wrap']} `}>
                <div className={modalContentClassName} style={{ width }} >
                    <div className={modalTrangleClassName}></div>
                    <div className={modalHeaderClassName}>
                        <div className={`${Style['ez-modal-message-icon']} `}>{icon}</div>
                        <div className={modalTitleClassName}>{title}</div>
                        <div className={`${Style['ez-modal-message-icon']} `}>{icon}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal;
