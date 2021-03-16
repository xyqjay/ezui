import React from 'react';
import { Select } from '../components/index';

const { Option } = Select;
function SelectDemo () {
    // console.log(Option)
    return(
        // <div>
            <Select onClick={()=>{
                // console.log('子组件')
            }}>
                <Option Key={1} value={111}>111</Option>
                <Option Key={2} value={222}>222</Option>
                <Option Key={3} value={333}>333</Option>
                <Option Key={4} value={444}>444</Option>
                <Option Key={'abc'} value={'abcdefghijklmnopqrstuvwxyz'}>abcdefghijklmnopqrstuvwxyz</Option>
            </Select>
        // </div>
    )
}

export default SelectDemo;