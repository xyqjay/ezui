import React from 'react';
import { Button } from '../components/index';

function DemoButton() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: "center" }}>
      <div style={{ display: 'flex', flexDirection: "column" }}>
        <div>主要按钮</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="big" style={{ display: "flex", alignItems: "center" }}>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='big'
              shape='circle'
              type='primary'
              style={{ background: 'red' }}
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='big'
              type='primary'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />} shape='circle'
            >Primary</Button>

            <Button
              // onClick={() => { console.log(1234565) }}
              size='big' shape='round'
              type='primary'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='big'
              type='primary'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
              shape='round'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='big'
              type='primary'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
              shape='round'
            ></Button>
          </div>
          <div className="middle" style={{ margin: '30px' }}>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='middle'
              shape='circle'
              type='primary'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='middle'
              type='primary'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />} shape='circle'
            >Primary</Button>

            <Button
              // onClick={() => { console.log(1234565) }}
              size='middle' shape='round'
              type='primary'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='middle'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
              shape='round'
              type='primary'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='middle'
              type='primary'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
              shape='round'
              style={{ color: 'red' }}
            ></Button>
          </div>

          <div className="small" style={{ margin: '30px' }}>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='small'
              type='primary'
              shape='circle'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='small'
              type='primary'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />} shape='circle'
            >Primary</Button>

            <Button
              // onClick={() => { console.log(1234565) }}
              size='small' shape='round'
              type='primary'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='small'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
              shape='round'
              type='primary'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='small'
              type='primary'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
              shape='round'
            ></Button>
          </div>

        </div>
        <div>二级按钮</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="big">
            <Button
              // onClick={() => { console.log(1234565) }}
              size='big'
              shape='circle'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='big'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />} shape='circle'
            >Primary</Button>

            <Button
              // onClick={() => { console.log(1234565) }}
              size='big' shape='round'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='big'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
              shape='round'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='big'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
              shape='round'
            ></Button>
          </div>
          <div className="middle" style={{ margin: '30px' }}>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='middle'
              shape='circle'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='middle'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />} shape='circle'
            >Primary</Button>

            <Button
              // onClick={() => { console.log(1234565) }}
              size='middle' shape='round'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='middle'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
              shape='round'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='middle'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
              shape='round'
            ></Button>
          </div>

          <div className="small" style={{ margin: '30px' }}>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='small'
              shape='circle'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='small'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />} shape='circle'
            >Primary</Button>

            <Button
              // onClick={() => { console.log(1234565) }}
              size='small' shape='round'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='small'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
              shape='round'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='small'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
              shape='round'
            ></Button>
          </div>
        </div>
        <div>三级按钮</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="big">
            <Button
              // onClick={() => { console.log(1234565) }}
              size='big'
              shape='circle'
              type='dashed'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='big'
              type='dashed'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />} shape='circle'
            >Primary</Button>

            <Button
              // onClick={() => { console.log(1234565) }}
              size='big' shape='round'
              type='dashed'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='big'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
              shape='round'
              type='dashed'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='big'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
              shape='round'
              type='dashed'
            ></Button>
          </div>
          <div className="middle" style={{ margin: '30px' }}>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='middle'
              shape='circle'
              type='dashed'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='middle'
              type='dashed'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />} shape='circle'
            >Primary</Button>

            <Button
              // onClick={() => { console.log(1234565) }}
              size='middle'
              shape='round'
              type='dashed'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='middle'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
              shape='round'
              type='dashed'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='middle'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
              shape='round'
              type='dashed'
            ></Button>
          </div>

          <div className="small" style={{ margin: '30px' }}>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='small'
              shape='circle'
              type='dashed'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='small'
              type='dashed'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />} shape='circle'
            >Primary</Button>

            <Button
              // onClick={() => { console.log(1234565) }}
              size='small' shape='round'
              type='dashed'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='small'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
              shape='round'
              type='dashed'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              size='small'
              icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
              shape='round'
              type='dashed'
            ></Button>
          </div>
        </div>

        <div>文字按钮</div>

        <div style={{ margin: '30px' }}>

          <Button
            // onClick={() => { console.log(1234565) }}
            type='text'
          >Primary</Button>

          <Button
            // onClick={() => { console.log(1234565) }}
            icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />} shape='circle'
            type='text'
          >Primary</Button>

          <Button
            // onClick={() => { console.log(1234565) }}
            type='link'
          >Primary</Button>

          <Button
            // onClick={() => { console.log(1234565) }}
            icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />} shape='circle'
            type='link'
            href='https://lanhuapp.com/web/#/item?fid=all&commonly=all'
            target='_blank'
          >Primary</Button>
        </div>
        <div>默认   悬浮   点按  禁用</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ margin: '30px' }}>

            <Button
              // onClick={() => { console.log(1234565) }}
              type='primary'
            >Primary</Button>

            <Button
              // onClick={() => { console.log(1234565) }}
              type='primary'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              type='primary'
            >Primary</Button>

            <Button
              // onClick={() => { console.log(1234565) }}
              type='primary'
              disabled={true}
            >Primary</Button>

          </div>
          <div style={{ margin: '30px' }}>

            <Button
            // onClick={() => { console.log(1234565) }}
            >Primary</Button>

            <Button
            // onClick={() => { console.log(1234565) }}
            >Primary</Button>
            <Button
            // onClick={() => { console.log(1234565) }}
            >Primary</Button>

            <Button
              // onClick={() => { console.log(1234565) }}
              disabled={true}
            >Primary</Button>

          </div>
          <div style={{ margin: '30px' }}>

            <Button
              // onClick={() => { console.log(1234565) }}
              type='dashed'
            >Primary</Button>

            <Button
              // onClick={() => { console.log(1234565) }}
              type='dashed'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              type='dashed'
            >Primary</Button>

            <Button
              // onClick={() => { console.log(1234565) }}
              type='dashed'
              disabled={true}
            >Primary</Button>

          </div>

          <div style={{ margin: '30px' }}>

            <Button
              // onClick={() => { console.log(1234565) }}
              type='text'
            >Primary</Button>

            <Button
              // onClick={() => { console.log(1234565) }}
              type='text'
            >Primary</Button>
            <Button
              // onClick={() => { console.log(1234565) }}
              type='text'
            >Primary</Button>

            <Button
              // onClick={() => { console.log(1234565) }}
              type='text'
              disabled={true}
            >Primary1111</Button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default DemoButton;
