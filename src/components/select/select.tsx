import React, { Component,ReactElement, useRef, useState } from 'react';
import Style from './select.module.scss';
// import 

class Select extends Component{}
// interface Props {
//     onClick?: () => void,
//     onChange?: () => void,
//     multiple?: boolean,
//     autofocus?: boolean,
//     disabled?: boolean,
//     children?: ReactElement | ReactElement[]
// }

// let bool = true;
// let isBlur = false;
// let Value: number | string = ''
// let index: number | string = ''
// const Select = ({ children, onClick }: Props) => {
//     // console.log(children)
// // const Select = ({ children, disabled = false, multiple = false, onChange }: Props) => {
//     // console.log(children,onClick);
//     const inputRef = useRef(null);
//     let [ezOptionWrapClass, setezOptionWrapClass] = useState(`${Style['ez-option-wrap-hidden']}`);
//     // console.log('重绘了',bool)
//     function click () {
//         // console.log(inputRef.current)
//         console.log(2)
//         bool ? setezOptionWrapClass(`${Style['ez-option-wrap-block']}`) : setezOptionWrapClass(`${Style['ez-option-wrap-hidden']}`);

//         bool = !bool;
//         // inputRef.current.focus();
//         onClick && onClick();
//     }
//     function blur (e) {
//         e.persist();
//         // console.log('e------',e,currentTarget);
//         if(isBlur) return false;
//         console.log('失焦了')
//         setezOptionWrapClass(`${Style['ez-option-wrap-hidden']}`);
//         bool = true;
//         return false;
//     }
//     function focus () {
//         // console.log('聚焦了')
//         setezOptionWrapClass(`${Style['ez-option-wrap-block']}`);
//     }
//     return(
//         <div className={Style['ez-select']} onClick={()=>{click()}}>
//             {/* <span> */}
//                 <input ref={inputRef} className={Style['ez-select-input']} value={Value} onBlur={blur} onFocus={focus} onChange={()=>{}}/>
//             <span className={Style.icon}>
//                 <svg className='icon' aria-hidden='true'>
//                     <use xlinkHref='#iconicon_placeholder'></use>
//                 </svg>
//             </span>
//             <div className={ezOptionWrapClass} onClick={(e)=>{
//                 console.log(11)
//                 e.stopPropagation();
//                 e.persist();
//                 let currentTarget=e.currentTarget
//                 console.log(currentTarget)
//             }}>
//                 {/* {Array.isArray(children) ? children.map((item)=>{
//                     // console.log(item)
//                     return item
//                 }) : children} */}
//                 {children}
//             </div>
//         </div>
//     )
// }

// interface optionProps {
//     value?: string | number,
//     Key?: string | number,
//     children?: string | number,
// }
// const Option = ({Key, value, children}:optionProps) => {
//     const myRef = useRef(null);
//     // console.log(isBlur)
//     let [ezOptionChildClass, setezOptionChildClass] = useState(Style['ez-option-child']);
//     function clickOption (e) {
//         console.log(e.target.parentNode)
//         console.log(isBlur,Key,value,index)
//         isBlur = true;
//         setezOptionChildClass(Style['ez-option-child-choose'])
//         index = Key ? Key : '';
//         Value = value ? value : '';
//         console.log(Value)
//     }
//     return(
//         // <div className={Style['ez-option']}>
//             <div ref={myRef} className={ezOptionChildClass} onClick={clickOption}>{children}</div>
//         // </div>
//     )
// }
class Option extends Component{

}

// Select.Option = Option;
export default Select;