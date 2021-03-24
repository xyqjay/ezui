import React, { useState, ReactElement, useEffect } from 'react';
import Style from './radio.module.less';

interface Props {
    buttonStyle?: string,//RadioButton 的风格样式，目前有描边和填色两种风格	outline | solid	outline		
    defaultValue?: any,//	默认选中的值	any	-		
    disabled?: boolean,//	禁选所有子单选器	boolean	false		
    name?: string,//	RadioGroup 下所有 input[type="radio"] 的 name 属性	string	-		
    options?: string,//以配置形式设置子元素	string[] | Array<{ label: string value: string disabled?: boolean }>	-		
    optionType?: string,//	用于设置 Radio options 类型	default | button	default	4.4.0	
    size?: string,//	大小，只对按钮样式生效	large | middle | small	-		
    value?: any,//	用于设置当前选中的值	any	-		
    onChange?: () => void,//
    children?: string | ReactElement,
    style?: object,
    className?: string,
    checked?: boolean,
}
function Radio({ disabled, children, className = '', style, checked }: Props,) {
    let initRadioWrapClassName = `${className} ${Style['ez-radio-wrapper']} ` + (disabled ? `${Style['ez-radio-wrapper-disabled']} ` : '')
    let initRadioClassName = `${Style['ez-radio']} ` + (disabled ? `${Style['ez-radio-disabled']} ` : '')
    let [radioWrapClassName, setRadioWrapClassName] = useState(initRadioWrapClassName)
    let [radioClassName, setRadioClassName] = useState(initRadioClassName);
    let [checkedStatus, setCheckedStatus] = useState(!checked);
    useEffect(() => {
        if(checked){
            setRadioWrapClassName(initRadioWrapClassName + `${Style['ez-radio-wrapper-checked']} `);
            setRadioClassName(initRadioClassName + `${Style['ez-radio-checked']} `);
        }
    }, [checked, initRadioWrapClassName, initRadioClassName]);
    return (
        <div className={radioWrapClassName} style={style}>
            <span className={radioClassName}>
                <input type="radio" className={`${Style['ez-radio-input']} `} onClick={() => {
                    if (disabled) {
                        return;
                    }
                    setCheckedStatus(!checkedStatus);
                    let re1 = /ez-radio-wrapper-checked/gi;
                    let re2 = /ez-radio-wrapper-checked/gi;
                    if (checkedStatus) {
                        setRadioWrapClassName(radioWrapClassName + `${Style['ez-radio-wrapper-checked']} `)
                        setRadioClassName(radioClassName + `${Style['ez-radio-checked']} `)
                    } else {
                        setRadioWrapClassName(radioWrapClassName.replace(re1, ''))
                        setRadioClassName(radioClassName.replace(re2, ''))
                    }
                }} />
                <span className={`${Style['ez-radio-inner']} `}></span>
            </span>
            {children ? <span>{children}</span> : ''}
        </div>
    );
}

export default Radio;
