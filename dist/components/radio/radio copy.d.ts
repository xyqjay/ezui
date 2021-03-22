import { ReactElement } from 'react';
interface Props {
    buttonStyle?: string;
    defaultValue?: any;
    disabled?: boolean;
    name?: string;
    options?: string;
    optionType?: string;
    size?: string;
    value?: any;
    onChange?: () => void;
    children?: string | ReactElement;
    style?: object;
    className?: string;
    checked?: boolean;
}
declare function Radio({ disabled, children, className, style, checked }: Props): JSX.Element;
export default Radio;
