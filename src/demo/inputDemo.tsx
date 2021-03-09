import React from 'react';
import Input from '../components/input/input';

function DemoInput() {
    return (
        <div className="App" >

            <div style={{ marginBottom: '20px' }}>
                <Input
                    size='big'
                    value='11111'
                    prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
                ></Input>
                <Input
                    size='big'
                    prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}

                ></Input>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <Input
                    size='middle'
                    prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}

                ></Input>
                <Input
                    size='middle'
                    prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}

                ></Input>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <Input
                    size='small'
                    prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}

                ></Input>
                <Input
                    size='small'
                    prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}

                ></Input>
            </div>

        </div>
    );
}

export default DemoInput;
