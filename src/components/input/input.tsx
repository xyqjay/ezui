import React, { ReactElement } from 'react';
import Style from './input.module.scss';


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
    onChange?: () => void,//	输入框内容变化时的回调	function(e)	-	
    onPressEnter?: () => void,//
}

function Button({ prefix, size }: Props,) {
    let inputClassName = `${Style['ez-input']} `;
    // let inputClassName = ``;
    let inputWrapClassName = `${Style['ez-input-affix-wrapper']} `;
    let inpuIconClassName = `${Style['action']} `;
    let inputInnerSpanClassName = `${Style['ez-input-prefix']} `;

    console.log(size)
    switch (size) {
        case 'big':
            console.log(inputClassName, 2222)
            inputClassName = inputClassName + `${Style['ez-input-bg']} `;
            console.log(inputClassName, 11111)
            inputWrapClassName = inputWrapClassName + `${Style['ez-input-affix-wrapper-bg']} `;
            
            break;
        case 'middle':
            inputClassName = inputClassName + `${Style['ez-input-md']} `;
            inputWrapClassName = inputWrapClassName + `${Style['ez-input-affix-wrapper-md']} `;
            break;
        case 'small':
            inputClassName = inputClassName + `${Style['ez-input-sm']} `;
            inputWrapClassName = inputWrapClassName + `${Style['ez-input-affix-wrapper-sm']} `;
            break;
        default:
            inputClassName = inputClassName + '';
            break;
    }

    // switch (type) {
    //     case 'primary':
    //         buttonClasName = buttonClasName + `${Style['ez-btn-primary']} `;
    //         break;
    //     case 'text':
    //         buttonClasName = buttonClasName + `${Style['ez-btn-text']} `;
    //         break;
    //     case 'link':
    //         buttonClasName = buttonClasName + `${Style['ez-btn-link']} `;
    //         break;
    //     default:
    //         buttonClasName = buttonClasName + '';
    //         break;
    // }
    // switch (shape) {
    //     case 'round':
    //         buttonClasName = buttonClasName + `${Style['ez-btn-round']} `;
    //         break;
    //     case 'circle':
    //         buttonClasName = buttonClasName + `${Style['ez-btn-circle']} `;
    //         break;
    //     default:
    //         buttonClasName = buttonClasName + '';
    //         break;
    // }
    // buttonClasName = buttonClasName + (children ? '' : icon ? `${Style['ez-btn-icon-only']} ` : '');


    // buttonClasName = buttonClasName + (disabled ? `${Style['ez-btn-disabled']} ` : '');

    return (
        <div style={{ marginRight: '20px', display: "inline-block" }}>
            {prefix ?
                <span className={inputWrapClassName}>
                    <span className={inputInnerSpanClassName}>
                        <span className={inpuIconClassName}>{prefix}</span>
                    </span>
                    <input type="text" className={inputClassName} />
                </span>
                : <input type="text" className={inputClassName} />}

        </div>
    );
}
export default Button;