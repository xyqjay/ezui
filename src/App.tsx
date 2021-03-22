import React from 'react';
import DemoButton from './demo/buttonDemo';
// import DemoInput from './demo/inputDemo';
import DemoModal from './demo/modalDemo';
import DemoRadio from './demo/radioDemo';
import DemoProgress from './demo/progressDemo';
import DemoTag from './demo/tagDemo';
  
function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <DemoButton></DemoButton>
      {/* <DemoInput></DemoInput>  */}
      <div style={{ marginBottom: '60px' }}></div>
      <DemoModal></DemoModal>
      <div style={{ marginBottom: '60px' }}></div>
      <DemoRadio></DemoRadio>
      <div style={{ marginBottom: '60px' }}></div>
      <DemoProgress></DemoProgress>
      <div style={{ marginBottom: '60px' }}></div>
      <DemoTag></DemoTag>
    </div>
  );
}

export default App;
