import { ReactElement } from 'react';
interface Props {
    afterClose?: boolean;
    bodyStyle?: boolean;
    cancelButtonProps?: boolean;
    cancelText?: ReactElement | string;
    cancelType?: string;
    centered?: boolean;
    closable?: boolean;
    closeIcon?: ReactElement;
    confirmLoading?: boolean;
    destroyOnClose?: boolean;
    focusTriggerAfterClose?: boolean;
    footer?: ReactElement;
    forceRender?: boolean;
    getContainer?: ReactElement;
    keyboard?: boolean;
    mask?: boolean;
    maskClosable?: boolean;
    maskStyle?: boolean;
    modalRender?: ReactElement;
    okButtonProps?: ReactElement;
    okText?: ReactElement | string;
    okType?: string;
    title?: ReactElement | string;
    visible?: boolean;
    width?: string;
    wrapClassName?: string;
    zIndex?: boolean;
    onCancel?: () => void;
    onOk?: () => void;
    size?: string;
    children?: ReactElement | string | ReactElement[];
    placement?: string;
    style?: object;
    className?: string;
    icon?: ReactElement | string;
}
declare function Modal({ size, title, onOk, onCancel, children, footer, okType, okText, cancelText, cancelType, width, centered, style, className }: Props): JSX.Element;
declare namespace Modal {
    var Popover: ({ size, title, onOk, onCancel, children, footer, okType, okText, cancelText, cancelType, width, centered, placement, style, className }: Props) => JSX.Element;
    var Tooltip: ({ size, title, width, centered, placement, style, className }: Props) => JSX.Element;
    var Message: ({ size, title, width, centered, placement, icon, className, style }: Props) => JSX.Element;
}
export default Modal;
