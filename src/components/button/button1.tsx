import React, { ReactElement } from 'react';
import './button.module.less';
import classNames from 'classnames';

interface Props {
    block?: boolean,//将按钮宽度调整为其父宽度的选项
    danger?: boolean,	//设置危险按钮
    disabled?: boolean,//按钮失效状态	
    ghost?: boolean,//幽灵属性，使按钮背景透明
    href?: string,//点击跳转的地址，指定此属性 button 的行为和 a 链接一致
    htmlType?: string,//设置 button 原生的 type 值，可选值请参考 HTML 标准
    icon?: ReactElement | string,//设置按钮的图标组件
    loading?: boolean | { delay: number },//设置按钮载入状态
    shape?: string,//设置按钮形状  circle | round
    size?: string,	//设置按钮大小  large | middle | small	
    target?: string,	//相当于 a 链接的 target 属性，href 存在时生效	string	-	
    type?: string,	//设置按钮类型	primary主要 | ghost | dashed三级 | link | text | default二级	default	
    onClick?: () => void,//点击按钮时的回调
    children?: string | ReactElement,
    style?: object,
    className?: string
}

function Button({
    size = 'middle',
    icon,
    onClick,
    children,
    shape = 'circle',
    type,
    disabled,
    href,
    target,
    style,
    // className = ''
 }: Props,) {
    let buttonClasName = classNames({ 'ez-btn': true }, {'ez-btn-bg':true},{'ez-btn-md':true},{'ez-btn-sm':false},{'ez-btn-primary':false},{'ez-btn-text':false},{'ez-btn-link':false},{ 'ez-btn-dashed':false },{'ez-btn-default':false},{'ez-btn-round':false},{'ez-btn-circle':false},{'ez-btn-icon-only':false},{'ez-btn-disabled':false});
  
    let ezIconClassName =classNames({'ezicon':true});

  
    // buttonClasName = buttonClasName + (children ? '' : icon ? `${Style['ez-btn-icon-only']} ` : '');
    // buttonClasName = buttonClasName + (disabled ? `${Style['ez-btn-disabled']} ` : '');
    {/* {icon ? <span className={ezIconClassName}>{icon}</span> : ''} */}
   // {icon ? <span className={ezIconClassName}>{icon}</span> : ''}
    return (
        href ?
            <a style={style} href={href} target={target}>
                <button disabled={disabled}
                    onClick={() => {
                        if (disabled) {
                            return;
                        } else if (onClick) {
                            onClick()
                        }
                    }}
                    className={buttonClasName}>
                  
                    {children ? <span >{children}</span> : ''}
                </button></a>
            :
            <button style={style} disabled={disabled}
                onClick={() => {
                    if (disabled) {
                        return;
                    } else if (onClick) {
                        onClick()
                    }
                }}
                className={buttonClasName}>
              
                {children ? <span >{children}</span> : ''}
            </button>
    );
}
export default Button;