import { ReactElement } from 'react';
interface Props {
    onClick?: () => void;
    onChange?: (key?: string | number, value?: string | number) => void;
    placeholder?: string;
    multiple?: boolean;
    autofocus?: boolean;
    disabled?: boolean;
    children?: ReactElement | ReactElement[];
    size?: 'large';
}
declare const Select: {
    ({ children, placeholder, onClick, onChange, size, disabled }: Props): JSX.Element;
    Option: ({ children, icon }: optionProps) => JSX.Element;
};
interface optionProps {
    value?: string | number;
    Key?: string | number;
    children?: string | number;
    icon?: ReactElement;
}
export default Select;
