import React from 'react';
import { Radio } from '../components/index';
import { CheckBox } from '../components/index';


function DemoRadio() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center" }}>
        <div>8、radio选择</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="big" style={{ display: "flex", alignItems: "center" }}>
            <Radio checked>option1</Radio>
            <Radio>option2</Radio>
            <Radio disabled={true}>option3</Radio>
            <Radio disabled={true} checked>option4</Radio>
          </div>
        </div>
      </div> 
      <div style={{ display: 'flex', flexDirection: "column" }}>
        <div>多项选择</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="big" style={{ display: "flex", alignItems: "center" }}>
            <CheckBox checked>option1</CheckBox>
            <CheckBox>option2</CheckBox>
            <CheckBox disabled={true}>option3</CheckBox>
            <CheckBox disabled={true} checked>option3</CheckBox>
          </div>
        </div>
      </div>

    </div>
  );
}

export default DemoRadio;
