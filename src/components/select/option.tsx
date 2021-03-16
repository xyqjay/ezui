import React, { Component, ReactElement } from 'react';
import Style from './select.module.scss';

interface Props {
    Key?:string | number,
    value?: string | number,
    children?: string | number | ReactElement,
    className?: string,
    onChange?: () => void
}
// interface State {
//     ezOptionChildClass?:string
// }
class Option extends Component<Props>{
    constructor(props){
        super(props)
        this.state = {
            // ezOptionChildClass:Style['ez-option-child']
        }
    }
    render(){
        return(
            <div className={Style['ez-option']}>{this.props.children}</div>
        )
    }
}

export default Option;