import { ReactElement } from 'react';
interface Props {
    addonAfter?: ReactElement;
    addonBefore?: ReactElement;
    allowClear?: boolean;
    bordered?: boolean;
    defaultValue?: string;
    disabled?: boolean;
    id?: string;
    maxLength?: number;
    prefix?: ReactElement;
    size?: string;
    suffix?: ReactElement;
    type?: string;
    value?: string;
    placeholder?: string;
    warn?: boolean;
    warnText?: string;
    label?: string;
    onChange?: () => void;
    onPressEnter?: () => void;
    style?: object;
    className?: string;
}
interface SearchProps {
    addonAfter?: ReactElement;
    addonBefore?: ReactElement;
    allowClear?: boolean;
    bordered?: boolean;
    defaultValue?: string;
    disabled?: boolean;
    id?: string;
    maxLength?: number;
    prefix?: ReactElement;
    size?: string;
    suffix?: ReactElement;
    type?: string;
    value?: string;
    placeholder?: string;
    warn?: boolean;
    warnText?: string;
    label?: string;
    onChange?: () => void;
    onPressEnter?: () => void;
    enterButton?: ReactElement | string;
    loading?: string;
    onSearch?: () => void;
    style?: object;
    className?: string;
}
interface TextAreaProps {
    allowClear?: boolean;
    autoSize?: boolean | object;
    bordered?: boolean;
    countFormatter?: boolean;
    defaultValue?: string;
    maxLength?: number;
    showCount?: boolean | string;
    value?: string;
    onPressEnter?: () => void;
    onResize?: () => void;
    onChange?: (e: any) => void;
    cols?: string;
    rows?: string;
    id?: number | string;
    name?: number | string;
    style?: object;
    className?: string;
}
declare function Input({ prefix, size, value, placeholder, warn, warnText, label, onChange, defaultValue, style, className }: Props): JSX.Element;
declare namespace Input {
    var Search: ({ prefix, size, value, placeholder, warn, warnText, label, enterButton, suffix, onSearch, defaultValue, style, className }: SearchProps) => JSX.Element;
    var TextArea: ({ cols, rows, value, onChange, defaultValue, showCount, maxLength, style, className }: TextAreaProps) => JSX.Element;
}
export default Input;
