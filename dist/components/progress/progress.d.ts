/// <reference types="react" />
interface Props {
    format?: () => void;
    percent?: number;
    showInfo?: boolean;
    status?: string;
    strokeColor?: string;
    strokeLinecap?: string;
    success?: string;
    trailColor?: string;
    type?: string;
    width?: number | string;
    style?: object;
    className?: string;
}
declare const CheckBox: ({ percent, width, style, className }: Props) => JSX.Element;
export default CheckBox;
