import React, { useState, useEffect } from 'react';
import Style from './checkbox.module.scss';

interface Props {
    buttonStyle?: string,//RadioButton 的风格样式，目前有描边和填色两种风格	outline | solid	outline		
    defaultValue?: any,//	默认选中的值	any	-		
    disabled?: boolean,//	禁选所有子单选器	boolean	false		
    name?: string,//	RadioGroup 下所有 input[type="checkbox"] 的 name 属性	string	-		
    options?: string,//以配置形式设置子元素	string[] | Array<{ label: string value: string disabled?: boolean }>	-		
    optionType?: string,//	用于设置 Radio options 类型	default | button	default	4.4.0	
    size?: string,//	大小，只对按钮样式生效	large | middle | small	-		
    value?: any,//	用于设置当前选中的值	any	-		
    onChange?: () => void,//
    children?: string,
    style?: object,
    className?: string,
    checked?: boolean,
}

const CheckBox = function CheckBox({ disabled, children, style, className='', checked
}: Props,) {
    let initCheckBoxWrapClassName = `${Style['ez-checkbox-wrapper']} ` + (disabled ? `${Style['ez-checkbox-wrapper-disabled']} ` : '')
    initCheckBoxWrapClassName =` ${initCheckBoxWrapClassName}  ${className}`;
    let initCheckBoxClassName = `${Style['ez-checkbox']} ` + (disabled ? `${Style['ez-checkbox-disabled']} ` : '');
    let [checkboxWrapClassName, setCheckBoxWrapClassName] = useState(initCheckBoxWrapClassName)
    let [checkboxClassName, setCheckBoxClassName] = useState(initCheckBoxClassName);
    let [checkedStatus, setCheckedStatus] = useState(!checked);
    useEffect(() => {
        checked && setCheckBoxWrapClassName(initCheckBoxWrapClassName + `${Style['ez-checkbox-wrapper-checked']} `);
        checked && setCheckBoxClassName(initCheckBoxClassName + `${Style['ez-checkbox-checked']} `);
    }, [checked, initCheckBoxWrapClassName, initCheckBoxClassName]);
    return (
        <label className={checkboxWrapClassName} style={style}>
            <span className={checkboxClassName}>
                <input type="checkbox" className={`${Style['ez-checkbox-input']} `} onClick={() => {
                    if (disabled) {
                        return;
                    }
                    setCheckedStatus(!checkedStatus);
                    let re1 = /ez-checkbox-wrapper-checked/gi;
                    let re2 = /ez-checkbox-wrapper-checked/gi;
                    if (checkedStatus) {
                        setCheckBoxWrapClassName(checkboxWrapClassName + `${Style['ez-checkbox-wrapper-checked']} `);
                        setCheckBoxClassName(checkboxClassName + `${Style['ez-checkbox-checked']} `);
                    } else {
                        setCheckBoxWrapClassName(checkboxWrapClassName.replace(re1, ''));
                        setCheckBoxClassName(checkboxClassName.replace(re2, ''));
                    }
                }} />
                <span className={`${Style['ez-checkbox-inner']} `}></span>
            </span>
            {children ? <span className='label'>{children}</span> : ''}
        </label>
    );
}

export default CheckBox;
