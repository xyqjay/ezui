import React, { ReactElement } from 'react';
import Style from './tag.module.less';

interface Props {
    closable?: boolean,//		标签是否可以关闭	boolean	false	
    closeIcon?: ReactElement,//		自定义关闭按钮	ReactNode	-	4.4.0
    color?: string,//		标签色	string	-	
    icon?: ReactElement,//		设置图标	ReactNode	-	
    visible?: boolean,//		是否显示标签	boolean	true	
    onClose?: () => void,//	
    size?: string,//	
    children?: ReactElement | string,
    style?: object,
    className?: string
}

const Tag = function Tag({ size = 'middle', children, style, className='' }: Props) {
    let tagClassName = `${Style['ez-tag']} ${className}`;
    switch (size) {
        case 'big':
            tagClassName = tagClassName + `${Style['ez-tag-bg']} `;
            break;
        case 'middle':
            tagClassName = tagClassName + `${Style['ez-tag-middle']} `;
            break;
        default:
            tagClassName = tagClassName + '';
            break;
    }
    return (
        <span className={tagClassName} style={style}>{children}</span>
    );
}

export default Tag;
