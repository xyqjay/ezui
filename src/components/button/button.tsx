import React from 'react';
const Button: any = (props?: any) => {
    console.log(props)
    return (
        <button onClick={props.onclick}>按钮</button>
    )
}

export default Button;