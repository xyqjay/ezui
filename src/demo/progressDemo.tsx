import React from 'react';
import { Progress } from '../components/index';


function DemoRadio() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: "column" }}>
        <div>9、进度</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="big" style={{ display: "flex", alignItems: "center" }}>
            <  Progress></  Progress>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoRadio;
