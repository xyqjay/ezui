/// <reference types="react" />
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
    children?: string;
    style?: object;
    className?: string;
    checked?: boolean;
}
declare const CheckBox: ({ disabled, children, style, className, checked }: Props) => JSX.Element;
export default CheckBox;
