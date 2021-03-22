import React, { ReactElement, useRef, useState, useEffect } from 'react';
import Style from './select.module.scss';

interface Props {
    onClick?: () => void,
    onChange?: (key?:string | number, value?:string | number) => void,
    placeholder?: string,
    multiple?: boolean,
    autofocus?: boolean,
    disabled?: boolean,
    children?: ReactElement | ReactElement[],
    size?: 'large'
}

let bool = true;
const Select = ({ children, placeholder, onClick, onChange, size, disabled }: Props) => {
    let selectClass = Style['ez-select'];
    let optionClass = Style['ez-option-child'];
    let optionChooseClass = Style['ez-option-child-choose'];
    let inputClass = Style['ez-select-input'];
    if(size && size === 'large'){
        selectClass = selectClass + ' ' + Style['ez-select-large'];
        optionClass = optionClass + ' ' + Style['ez-option-child-large'];
        optionChooseClass = optionChooseClass + ' ' + Style['ez-option-child-large'];
    }
    if(disabled){
        selectClass = selectClass + ' ' + Style['ez-select-disabled'];
        inputClass = inputClass + ' ' + Style['ez-select-disabled'];
    }
    const selectRef: any = useRef();
    const optionRef: any = useRef();
    let optionWrapBottom: number;
    useEffect(()=>{
        optionWrapBottom = selectRef.current.getBoundingClientRect().bottom + 4 + optionRef.current.offsetHeight;
        // console.log(selectRef.current.getBoundingClientRect().bottom, optionRef.current.getBoundingClientRect().height);
        // console.log(optionRef.current.offsetHeight,optionRef.current.getBoundingClientRect().height)
    })

    const inputRef:any = useRef(null);
    let [ezOptionWrapClass, setezOptionWrapClass] = useState(Style['ez-option-wrap-hidden']);
    function click() {
        if(disabled){
            setezOptionWrapClass(Style['ez-option-wrap-hidden']);
            return;
        }
        if(window.innerHeight - optionWrapBottom < 0 && (selectRef.current.getBoundingClientRect().top > optionRef.current.getBoundingClientRect().height + 4 || selectRef.current.getBoundingClientRect().top > window.innerHeight - selectRef.current.getBoundingClientRect().bottom )){
            bool ? setezOptionWrapClass(Style['ez-option-wrap-block-top']) : setezOptionWrapClass(Style['ez-option-wrap-hidden']);
            optionWrapBottom = optionRef.current.getBoundingClientRect().bottom;
            // console.log('---click if---',window.innerHeight , optionWrapBottom)
        } else {
            bool ? setezOptionWrapClass(Style['ez-option-wrap-block']) : setezOptionWrapClass(Style['ez-option-wrap-hidden']);
            // console.log('---click else---',window.innerHeight , optionWrapBottom)
        }
        bool = !bool;
        onClick && onClick();
        inputRef.current.focus();
    }
    function optionClick(e,Key?: string | number,value?: string | number){
        e.stopPropagation();
        e.persist();
        setezOptionWrapClass(Style['ez-option-wrap-hidden']);
        onChange && onChange(Key,value);
        inputRef.current.blur();
    }
    function blur(e) {
        e.persist();
        setezOptionWrapClass(Style['ez-option-wrap-hidden']);
        bool = true;
    }
    function focus() {
        if(disabled){
            setezOptionWrapClass(Style['ez-option-wrap-hidden'])
            return;
        }
        if(window.innerHeight - optionWrapBottom < 0 && (selectRef.current.getBoundingClientRect().top > optionRef.current.getBoundingClientRect().height + 4 || selectRef.current.getBoundingClientRect().top > window.innerHeight - selectRef.current.getBoundingClientRect().bottom )){
            setezOptionWrapClass(Style['ez-option-wrap-block-top']);
            optionWrapBottom = optionRef.current.getBoundingClientRect().bottom;
            // console.log('---focus if---',window.innerHeight , optionWrapBottom)
        } else {
            setezOptionWrapClass(Style['ez-option-wrap-block']);
            // console.log('---focus else---',window.innerHeight , optionWrapBottom)
        }
    }
    const [optionValue, setOptionValue] = useState('');
    return (
        <div ref={selectRef} className={selectClass} onClick={click}>
            <input ref={inputRef} className={inputClass} placeholder={placeholder} value={optionValue} onBlur={blur} onFocus={focus} onChange={() => { }} />
            <span className={Style.icon}>
                <svg className='icon' aria-hidden='true'>
                    <use xlinkHref='#iconicon_placeholder'></use>
                </svg>
            </span>
            <div ref={optionRef} className={ezOptionWrapClass}>
                {(ezOptionWrapClass === Style['ez-option-wrap-block'] || ezOptionWrapClass === Style['ez-option-wrap-block-top']) && Array.isArray(children) && children.length > 0 ? children.map(function(item,index){
                    if(item.props.value === optionValue){
                        return <div key={index} className={optionChooseClass} onClick={(e)=>{
                            setOptionValue(item.props.value);
                            optionClick(e,item.props.Key,item.props.value);
                        }}>{item}</div>
                    }
                    return <div key={index} className={optionClass} onClick={(e)=>{
                        setOptionValue(item.props.value);
                        optionClick(e,item.props.Key,item.props.value);
                    }}>{item}</div>
                }) : children}
            </div>
        </div>
    )
}

interface optionProps {
    value?: string | number,
    Key?: string | number,
    children?: string | number,
    icon?: ReactElement,
}
const Option = ({ children, icon }: optionProps) => {
    return (
        <div className={Style['ez-option']} onMouseDown={(e)=>{
            e.preventDefault();
        }}>
            <span className={Style['ez-option-icon']}>{icon}</span>
            {children}
        </div>
    )
}

Select.Option = Option;
export default Select;