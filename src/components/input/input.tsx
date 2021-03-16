import React, { ReactElement, useState } from 'react';
import Style from './input.module.scss';
import Button from '../button/button';



interface Props {
    addonAfter?: ReactElement,//	带标签的 input，设置后置标签	ReactNode	-	
    addonBefore?: ReactElement,//	带标签的 input，设置前置标签	ReactNode	-	
    allowClear?: boolean,//	可以点击清除图标删除内容	boolean	-	
    bordered?: boolean,	//是否有边框	boolean	true	4.5.0
    defaultValue?: string,//	输入框默认内容	string	-	
    disabled?: boolean,//是否禁用状态，默认为 false	boolean	false	
    id?: string//	输入框的 id	string	-	
    maxLength?: number	//最大长度	number	-	
    prefix?: ReactElement,//	带有前缀图标的 input	ReactNode	-	
    size?: string//	控件大小。注：标准表单内的输入框大小限制为 large	large | middle | small	-	
    suffix?: ReactElement,//	带有后缀图标的 input	ReactNode	-	
    type?: string//	声明 input 类型，同原生 input 标签的 type 属性，见：MDN(请直接使用 Input.TextArea 代替 type="textarea")	string	text	
    value?: string//	输入框内容	string	-
    placeholder?: string//	输入框内容	string	-
    warn?: boolean,	//是否是warn状态
    warnText?: string,	//是否是warn状态
    label?: string,	//是否是warn状态
    onChange?: () => void,//	输入框内容变化时的回调	function(e)	-	
    onPressEnter?: () => void,//
    style?:object
}

interface SearchProps {
    addonAfter?: ReactElement,//	带标签的 input，设置后置标签	ReactNode	-	
    addonBefore?: ReactElement,//	带标签的 input，设置前置标签	ReactNode	-	
    allowClear?: boolean,//	可以点击清除图标删除内容	boolean	-	
    bordered?: boolean,	//是否有边框	boolean	true	4.5.0
    defaultValue?: string,//	输入框默认内容	string	-	
    disabled?: boolean,//是否禁用状态，默认为 false	boolean	false	
    id?: string//	输入框的 id	string	-	
    maxLength?: number	//最大长度	number	-	
    prefix?: ReactElement,//	带有前缀图标的 input	ReactNode	-	
    size?: string//	控件大小。注：标准表单内的输入框大小限制为 large	large | middle | small	-	
    suffix?: ReactElement,//	带有后缀图标的 input	ReactNode	-	
    type?: string//	声明 input 类型，同原生 input 标签的 type 属性，见：MDN(请直接使用 Input.TextArea 代替 type="textarea")	string	text	
    value?: string//	输入框内容	string	-
    placeholder?: string//	输入框内容	string	-
    warn?: boolean,	//是否是warn状态
    warnText?: string,	//是否是warn状态
    label?: string,	//是否是warn状态
    onChange?: () => void,//	输入框内容变化时的回调	function(e)	-	
    onPressEnter?: () => void,//
    enterButton?: ReactElement | string,//	是否有确认按钮，可设为按钮文字。该属性会与 addonAfter 冲突。	boolean | ReactNode	false
    loading?: string//	搜索 loading	boolean	false
    onSearch?: () => void,
    style?:object
}
interface TextAreaProps {
    allowClear?: boolean,	//	可以点击清除图标删除内容	boolean	false	
    autoSize?: boolean | object,	//	自适应内容高度，可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }	boolean | object	false	
    bordered?: boolean,	//	是否有边框	boolean	true	4.5.0
    countFormatter?: boolean,	//	指定字数展示的格式	(count: number, maxLength?: number) => string	-	4.10.0
    defaultValue?: string,	//	输入框默认内容	string	-	
    maxLength?: number,	//内容最大长度	number	-	4.7.0
    showCount?: boolean | string,	//	是否展示字数	boolean | { formatter: ({ count: number, maxLength?: number }) => string }	false	4.7.0 (formatter: 4.10.0)
    value?: string,	//输入框内容	string	-	
    onPressEnter?: () => void,	//	按下回车的回调	function(e)	-	
    onResize?: () => void,	//	resize 回调	function({ width, height })
    onChange?: (e) => void,	//	resize 回调	function({ width, height })
    cols?: string,
    rows?: string,
    id?: number | string,
    name?: number | string,
    style?:object,
}
// interface InputNumberProps {
//     autoFocus?: boolean,	//	自动获取焦点	boolean	false	-
//     bordered?: boolean,	//是否有边框	boolean	true	4.12.0
//     decimalSeparator?: string,	//	小数点	string	-	-
//     defaultValue?: number,	//	初始值	number	-	-
//     disabled?: boolean,	//禁用	boolean	false	-
//     formatter?: () => void,	//指定输入框展示值的格式	function(value: number | string): string	-	-
//     keyboard?: boolean,	//	是否启用键盘快捷行为	boolean	true	4.12.0
//     max?: number,	//最大值	number	Number.MAX_SAFE_INTEGER	-
//     min?: number,	//最小值	number	Number.MIN_SAFE_INTEGER	-
//     parser?: number,	//	指定从 formatter 里转换回数字的方式，和 formatter 搭配使用	function(string): number	-	-
//     precision?: number,	//	数值精度，配置 formatter 时会以 formatter 为准	number	-	-
//     readOnly?: boolean,	//	只读	boolean	false	-
//     size?: string,	//输入框大小	large | middle | small	-	-
//     step?: number,	//	每次改变步数，可以为小数	number | string	1	-
//     stringMode?: string,	//	字符值模式，开启后支持高精度小数。同时 onChange 将返回 string 类型	boolean	false	4.13.0
//     value?: number,	//当前值	number	-	-
//     onChange?: () => void,	//	变化回调	function(value: number | string | null)	-	-
//     onPressEnter?: () => void,	//	按下回车的回调	function(e)	-	-
//     onStep?: () => void,	//	点击上下箭头的回调	(value: number, info: { offset: number, type: 'up' | 'down' }) => void	-
// }
function Input({ prefix, size, value, placeholder, warn, warnText, label, onChange, defaultValue,style }: Props,) {
    let inputClassName = `${Style['ez-input']} `;
    let inputWrapClassName = `${Style['ez-input-affix-wrapper']} `;
    let inpuIconClassName = `${Style['action']} `;
    let inputInnerSpanClassName = `${Style['ez-input-prefix']} `;
    let warnClassName = `${Style['ez-input-warn']} `;
    let labelClassName = `${Style['ez-input-label']} `;
    switch (size) {
        case 'big':
            inputWrapClassName = inputWrapClassName + `${Style['ez-input-affix-wrapper-bg']} `;

            break;
        case 'middle':
            inputWrapClassName = inputWrapClassName + `${Style['ez-input-affix-wrapper-md']} `;
            break;
        case 'small':
            inputWrapClassName = inputWrapClassName + `${Style['ez-input-affix-wrapper-sm']} `;
            break;
        default:
            inputClassName = inputClassName + '';
            break;
    }
    inputWrapClassName = inputWrapClassName + (warn ? `${Style['ez-input-affix-wrapper-warn']} ` : '');

    return (
        <span className={inputWrapClassName} style={style}>
            {label ? <span className={labelClassName} >{label}</span> : ''}
            {prefix ?
                <span className={inputInnerSpanClassName}>
                    <span className={inpuIconClassName}>{prefix}</span>
                </span> : ''}
            <input type="text" className={inputClassName} value={value} defaultValue={defaultValue} placeholder={placeholder} onChange={onChange} />
            {warnText ? <span className={warnClassName} >{warnText}</span> : ''}
        </span>
    );
}
Input.Search = function Search({ prefix, size = 'middle', value, placeholder, warn, warnText, label, enterButton, suffix, onSearch, defaultValue ,style}: SearchProps,) {
    let inputClassName = `${Style['ez-input']} `;
    let inputWrapClassName = `${Style['ez-input-affix-wrapper']} `;
    let inpuIconClassName = `${Style['action']} `;
    let inputInnerSpanClassName = `${Style['ez-input-prefix']} `;
    let warnClassName = `${Style['ez-input-warn']} `;
    let labelClassName = `${Style['ez-input-label']} `;

    let buttonClassName = `${Style['ez-input-group-addon']} `;
    let wrapClassName = `${Style['ez-input-wrapper']} `;
    wrapClassName = wrapClassName + `${Style['ez-input-group']} `;
    switch (size) {
        case 'big':
            inputWrapClassName = inputWrapClassName + `${Style['ez-input-affix-wrapper-bg']} `;
            buttonClassName = buttonClassName + `${Style['ez-input-group-addon-bg']} `;
            break;
        case 'middle':
            inputWrapClassName = inputWrapClassName + `${Style['ez-input-affix-wrapper-md']} `;
            buttonClassName = buttonClassName + `${Style['ez-input-group-addon-md']} `;
            break;
        case 'small':
            inputWrapClassName = inputWrapClassName + `${Style['ez-input-affix-wrapper-sm']} `;
            buttonClassName = buttonClassName + `${Style['ez-input-group-addon-sm']} `;
            break;
        default:
            inputClassName = inputClassName + '';
            break;
    }
    inputWrapClassName = inputWrapClassName + (warn ? `${Style['ez-input-affix-wrapper-warn']} ` : '');
    inputWrapClassName = inputWrapClassName + `${Style['ez-input-affix-wrapper']} `;
    // inputWrapClassName = inputWrapClassName + (disabled ? `${Style['ez-btn-disabled']} ` : '');

    return (
            <span className={wrapClassName} style={style}>
                <span className={inputWrapClassName}>
                    {label ? <span className={labelClassName} >{label}</span> : ''}
                    {prefix ?
                        <span className={inputInnerSpanClassName}>
                            <span className={inpuIconClassName}>{prefix}</span>
                        </span> : ''}
                    <input type="text" className={inputClassName} defaultValue={defaultValue} value={value} placeholder={placeholder} />


                    {warnText ? <span className={warnClassName} >{warnText}</span> : ''}
                </span>
                <span className={buttonClassName}>
                    <Button onClick={onSearch}
                        size={size}
                        icon={suffix ? suffix : ''}
                        shape='round'
                        type='primary'
                    >{enterButton}</Button>
                </span>
            </span>
    );
}

Input.TextArea = function TextArea({ cols = "40", rows = "4", value, onChange, defaultValue, showCount, maxLength,style }: TextAreaProps,) {
    let textAreaClassName = `${Style['ez-input-textArea']} `;
    let textAreaWrapClassName = `${Style['ez-input-textArea-wrap']} `;
    textAreaWrapClassName = textAreaWrapClassName + (showCount ? `${Style['ez-input-textArea-wrap-showData']} ` : '');

    let [valueCurrent, setValue] = useState(value ? value : defaultValue ? defaultValue : '');

    let change = function (e) {
        setValue(e.target.value)
        if (onChange) {
            onChange(e)
        }
    }
    return (
        <div className={textAreaWrapClassName} style={style}
            data-count={(valueCurrent.length + '/') + (maxLength ? (maxLength + '') : '')}
        >
            {valueCurrent
                ? <textarea name="" id="" cols={parseInt(cols)} value={valueCurrent} rows={parseInt(rows)} className={textAreaClassName} onChange={change} maxLength={maxLength}></textarea>
                : <textarea name="" id="" cols={parseInt(cols)} value={valueCurrent} rows={parseInt(rows)} className={textAreaClassName} onChange={change}></textarea>}
        </div>
    );
}
// Input.InputNumber = function InputNumber({ }: InputNumberProps,) {
//     // let textAreaClassName = `${Style['ez-input-textArea']} `;

//     return (
//         <div style={{ marginRight: '20px', display: "inline-block" }}>
//             {/* <textarea value={value} name="" id="" cols={parseInt(cols)} defaultValue={defaultValue} rows={parseInt(rows)} onChange={onChange} className={textAreaClassName}></textarea> */}
//         </div>
//     );
// }
export default Input;
