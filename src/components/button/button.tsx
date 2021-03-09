import React from 'react';
import Style from './button.module.scss';

const Button: any = (props?: any) => {
    // console.log(props)
    return (
        <button className={Style.btn} onClick={props.onclick}>{props.children}</button>
    )
}

export default Button;