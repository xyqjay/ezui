import React, { ReactElement } from 'react';
import Style from './button.module.scss';


interface Props {
    block?: boolean,//将按钮宽度调整为其父宽度的选项
    danger?: boolean,	//设置危险按钮
    disabled?: boolean,//按钮失效状态	
    ghost?: boolean,//幽灵属性，使按钮背景透明
    href?: string,//点击跳转的地址，指定此属性 button 的行为和 a 链接一致
    htmlType?: string,//设置 button 原生的 type 值，可选值请参考 HTML 标准
    icon?: ReactElement,//设置按钮的图标组件
    loading?: boolean | { delay: number },//设置按钮载入状态
    shape?: string,//设置按钮形状  circle | round
    size?: string,	//设置按钮大小  large | middle | small	
    target?: string,	//相当于 a 链接的 target 属性，href 存在时生效	string	-	
    type?: string,	//设置按钮类型	primary | ghost | dashed | link | text | default	default	
    onClick?: () => void,//点击按钮时的回调
    children?: string | ReactElement,
}

function Button({ size = 'middle', icon, onClick, children, shape = 'circle', type, disabled, href, target }: Props,) {
    let buttonClasName = `${Style['ez-btn']} `;
    let ezIconClassName = `${Style['ezicon']} `;

    switch (size) {
        case 'big':
            buttonClasName = buttonClasName + `${Style['ez-btn-bg']} `;
            break;
        case 'middle':
            buttonClasName = buttonClasName + `${Style['ez-btn-md']} `;
            break;
        case 'small':
            buttonClasName = buttonClasName + `${Style['ez-btn-sm']} `;
            break;
        default:
            buttonClasName = buttonClasName + '';
            break;
    }
    switch (type) {
        case 'primary':
            buttonClasName = buttonClasName + `${Style['ez-btn-primary']} `;
            break;
        case 'text':
            buttonClasName = buttonClasName + `${Style['ez-btn-text']} `;
            break;
        case 'link':
            buttonClasName = buttonClasName + `${Style['ez-btn-link']} `;
            break;
        default:
            buttonClasName = buttonClasName + '';
            break;
    }
    switch (shape) {
        case 'round':
            buttonClasName = buttonClasName + `${Style['ez-btn-round']} `;
            break;
        case 'circle':
            buttonClasName = buttonClasName + `${Style['ez-btn-circle']} `;
            break;
        default:
            buttonClasName = buttonClasName + '';
            break;
    }
    buttonClasName = buttonClasName + (children ? '' : icon ? `${Style['ez-btn-icon-only']} ` : '');


    buttonClasName = buttonClasName + (disabled ? `${Style['ez-btn-disabled']} ` : '');

    return (
        <div style={{ marginRight: '20px', display: "inline-block" }}>
            {href ?
                <a href={href} target={target}><button disabled={disabled} onClick={disabled ? onClick : () => null} className={buttonClasName}>
                    {icon ? <span className={ezIconClassName}>{icon}</span> : ''}
                    {children ? <span >{children}</span> : ''}
                </button></a>
                :
                <button disabled={disabled} onClick={disabled ? onClick : () => null} className={buttonClasName}>
                    {icon ? <span className={ezIconClassName}>{icon}</span> : ''}
                    {children ? <span >{children}</span> : ''}
                </button>
            }

        </div>
    );
}
export default Button;