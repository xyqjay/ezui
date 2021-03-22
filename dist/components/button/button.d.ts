import { ReactElement } from 'react';
interface Props {
    block?: boolean;
    danger?: boolean;
    disabled?: boolean;
    ghost?: boolean;
    href?: string;
    htmlType?: string;
    icon?: ReactElement | string;
    loading?: boolean | {
        delay: number;
    };
    shape?: string;
    size?: string;
    target?: string;
    type?: string;
    onClick?: () => void;
    children?: string | ReactElement;
    style?: object;
    className?: string;
}
declare function Button({ size, icon, onClick, children, shape, type, disabled, href, target, style, className }: Props): JSX.Element;
export default Button;
