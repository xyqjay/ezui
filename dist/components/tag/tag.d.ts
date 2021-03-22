import { ReactElement } from 'react';
interface Props {
    closable?: boolean;
    closeIcon?: ReactElement;
    color?: string;
    icon?: ReactElement;
    visible?: boolean;
    onClose?: () => void;
    size?: string;
    children?: ReactElement | string;
    style?: object;
    className?: string;
}
declare const Tag: ({ size, children, style, className }: Props) => JSX.Element;
export default Tag;
