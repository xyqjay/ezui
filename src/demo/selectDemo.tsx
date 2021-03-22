import React from 'react';
// import { Select, Option } from '../components/index';
import { Select } from '../components/index';

const { Option } = Select;
function SelectDemo () {
    // console.log(Option)
    return(
        <div style={{display:'flex', flexDirection: "column",textAlign:'center'}}>
            <div>11.下拉框</div>
            <Select onClick={()=>{
                // console.log('子组件')
            }} onChange={(key,value)=>{
                console.log(key,value)
            }} placeholder='我是placeholder'>
                <Option Key={1} value={111}>111</Option>
                <Option Key={2} value={222} icon={<svg className='icon' aria-hidden='true'>
                    <use xlinkHref='#iconicon_right'></use>
                </svg>}>222</Option>
                <Option Key={3} value={333}>333</Option>
                <Option Key={4} value={444}>444</Option>
                <Option Key={5} value={5}>5</Option>
                <Option Key={6} value={6}>6</Option>
                <Option Key={7} value={7}>7</Option>
                <Option Key={8} value={8}>8</Option>
                <Option Key={'abc'} value={'abcdefghijklmnopqrstuvwxyz'}>abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</Option>
            </Select>
            <div style={{height:'10px'}}></div>
            <Select onClick={()=>{
                // console.log('子组件')
            }} onChange={(key,value)=>{
                console.log(key,value)
            }} size='large'>
                <Option Key={1} value={111} icon={<svg className='icon' aria-hidden='true'>
                    <use xlinkHref='#iconicon_right'></use>
                </svg>}>111</Option>
                <Option Key={2} value={222}>222</Option>
                <Option Key={3} value={333}>333</Option>
                <Option Key={4} value={444} icon={<svg className='icon' aria-hidden='true'>
                    <use xlinkHref='#iconicon_right'></use>
                </svg>}>444</Option>
                <Option Key={5} value={5}>5</Option>
                <Option Key={6} value={6}>6</Option>
                <Option Key={7} value={7}>7</Option>
                <Option Key={8} value={8}>8</Option>
                <Option Key={'abc'} value={'abcdefghijklmnopqrstuvwxyz'}>abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</Option>
            </Select>
        </div>
    )
}

export default SelectDemo;