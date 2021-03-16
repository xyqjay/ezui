import React, { Component, ReactElement } from 'react';
import Style from './select.module.scss';
// let Option = require('./option');
// import 

interface Props {
    onClick?: () => void,
    children?: ReactElement | ReactElement[],
    onChange?: (key?:string | number, value?:string | number) => void
}
interface State {
    // bool?:boolean,
    ezOptionWrapClass?: string,
    inputValue?: string | number
}

class Select extends Component<Props, State>{
    constructor(props){
        super(props)
        this.state = {
            // bool:true,
            ezOptionWrapClass:`${Style['ez-option-wrap-hidden']}`,
            inputValue:''
        }
    }
    componentDidMount(): void {
        // console.log(this.props)
        document.addEventListener('click',this.clickHandle);
    }
    componentWillUnmount(){
        document.removeEventListener('click',this.clickHandle);
    }
    clickHandle = (e) => {
        // console.log(e.target,e.target.className)
        if(e.target.className.indexOf('select_ez') !== -1 || this.state.ezOptionWrapClass === Style['ez-option-wrap-hidden']){
            // console.log('拦截')
            return
        }
        // console.log('隐藏')
        this.setState({ezOptionWrapClass:Style['ez-option-wrap-hidden']});
    }
    click = () => {
        if(this.state.ezOptionWrapClass === Style['ez-option-wrap-hidden']){
            this.setState({ezOptionWrapClass:Style['ez-option-wrap-block']})
        }else{
            this.setState({ezOptionWrapClass:Style['ez-option-wrap-hidden']})
        }
        this.props.onClick && this.props.onClick();
    }
    render(): React.ReactNode{
        return(
            <div className={Style['ez-select']} onClick={()=>{this.click();}} >
                <input className={Style['ez-select-input']} value={this.state.inputValue} onChange={()=>{}}/>
                <span className={Style.icon}>
                    <svg className='icon' aria-hidden='true'>
                        <use xlinkHref='#iconicon_placeholder'></use>
                    </svg>
                </span>
                <div className={this.state.ezOptionWrapClass} onClick={()=>{console.log()}}>
                    {/* {this.props.children} */}
                    {Array.isArray(this.props.children) && this.props.children.length > 0 ? (this.props.children as []).map(((item:any,index:number)=>{
                        // console.log(item)
                        let optionClass = Style['ez-option-child'];
                        if(item.props.value === this.state.inputValue){
                            optionClass = Style['ez-option-child-choose']
                        }
                        return <div key={index} onClick={()=>{
                            // console.log(item.props)
                            this.setState({inputValue:item.props.value},()=>{
                                this.props.onChange && this.props.onChange(item.props.Key,this.state.inputValue);
                            })
                        }} className={optionClass}>{item}</div>
                    })) : this.props.children}
                </div>
            </div>
        )
    }
}

export default Select;