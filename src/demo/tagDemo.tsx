import React, { Component } from 'react';
import { Tag } from '../components/index';


// function DemoRadio() {
//   console.log(this.refs.name)
//   let name
//   return (
//     <div className="App" style={{ display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: 'center' }}>
//       <div style={{ display: 'flex', flexDirection: "column" }}>
//         <div>主要按钮</div>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <div className="big" style={{ display: "flex", alignItems: "center",flexDirection:'column' }}>
//             <  Tag>red</Tag>
//             <div style={{marginBottom:'20px'}}></div>
//             {/* <  Tag size='big' style={{width:'12px'}} >red</Tag> */}
//             <  Tag size='big'>red</Tag>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

class DemoRadio extends Component {
  childRef: any
  constructor(parameters) {
    super(parameters)
    this.childRef = React.createRef()
    console.log(this.childRef.current)
  }
  componentDidMount(){
    console.log(this.childRef)
  }
  render() {

    return (
      <div className="App" style={{ display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: "column" }}>
          <div>10、标签</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="big" style={{ display: "flex", alignItems: "center", flexDirection: 'column' }} onClick={() => {
       
            }}>
              <  Tag>Search</Tag>
              <div style={{ marginBottom: '20px' }}></div>
              <  Tag size='big' style={{  }} >Search</Tag>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DemoRadio;
