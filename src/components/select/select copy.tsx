import React, { ReactElement, useRef, useState, createRef } from 'react';
import Style from './select.module.scss';
// import 

interface Props {
    onClick?: () => void,
    onChange?: () => void,
    multiple?: boolean,
    autofocus?: boolean,
    disabled?: boolean,
    children?: ReactElement | ReactElement[]
}

let bool = true;
let isBlur = false;
let Value: number | string = ''
let index: number | string = ''
const Select = ({ children, onClick }: Props) => {
    // const inputRef = createRef();
    // const inputRef:any = useRef<HTMLInputElement>();
    const inputRef:any = useRef(null);
    let [ezOptionWrapClass, setezOptionWrapClass] = useState(`${Style['ez-option-wrap-hidden']}`);
    function click() {
        bool ? setezOptionWrapClass(`${Style['ez-option-wrap-block']}`) : setezOptionWrapClass(`${Style['ez-option-wrap-hidden']}`);

        bool = !bool;
        onClick && onClick();
        inputRef.current.focus();
    }
    function blur(e) {
        e.persist();
        if (isBlur) return false;
        console.log('失焦了')
        setezOptionWrapClass(`${Style['ez-option-wrap-hidden']}`);
        bool = true;
        return false;
    }
    function focus() {
        // console.log('聚焦了')
        setezOptionWrapClass(`${Style['ez-option-wrap-block']}`);
    }
    return (
        <div className={Style['ez-select']} onClick={() => { click() }}>
            <input ref={inputRef} className={Style['ez-select-input']} value={Value} onBlur={blur} onFocus={focus} onChange={() => { }} />
            <span className={Style.icon}>
                <svg className='icon' aria-hidden='true'>
                    <use xlinkHref='#iconicon_placeholder'></use>
                </svg>
            </span>
            <div className={ezOptionWrapClass} onClick={(e) => {
                e.stopPropagation();
                e.persist();
                let currentTarget = e.currentTarget
                console.log(currentTarget)
            }}>
                {children}
            </div>
        </div>
    )
}

interface optionProps {
    value?: string | number,
    Key?: string | number,
    children?: string | number,
}
const Option = ({ Key, value, children }: optionProps) => {
    const myRef = useRef(null);
    let [ezOptionChildClass, setezOptionChildClass] = useState(Style['ez-option-child']);
    function clickOption(e) {
        console.log(e.target.parentNode)
        console.log(isBlur, Key, value, index)
        isBlur = true;
        setezOptionChildClass(Style['ez-option-child-choose'])
        index = Key ? Key : '';
        Value = value ? value : '';
        console.log(Value)
    }
    return (
        <div ref={myRef} className={ezOptionChildClass} onClick={clickOption}>{children}</div>
    )
}

Select.Option = Option;
export default Select;