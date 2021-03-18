import React from 'react';
import { Input } from '../components/index';

const { Search } = Input;
const { TextArea } = Input;

function DemoInput() {
    return (
        <div className="App" style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
            <div>1.1输入尺寸</div>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                <div style={{ margin: '20px',display: 'flex' }}>
                    <Input
                        size='big'
                        prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
                        placeholder='Input text'
                        style={{ margin: '30px' }}
                    ></Input>
                    <Input
                        size='big'
                        prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
                        defaultValue='1111122'
                        onChange={() => null}
                        placeholder='Input text'
                        style={{ margin: '30px' }}
                    ></Input>
                </div>
                <div style={{ marginBottom: '20px',display: 'flex' }}>
                    <Input
                        size='middle'
                        prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}

                        placeholder='Input text'
                        style={{ margin: '30px' }}
                    ></Input>
                    <Input
                        size='middle'
                        prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
                        defaultValue='1111122'
                        onChange={() => null}
                        placeholder='Input text'
                        style={{ margin: '30px' }}
                    ></Input>
                </div>
                <div style={{ marginBottom: '20px',display: 'flex' }}>
                    <Input
                        size='small'
                        prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
                        style={{ margin: '30px' }}
                        placeholder='Input text'
                    ></Input>
                    <Input
                        size='small'
                        prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
                        defaultValue='1111122'
                        onChange={() => null}
                        placeholder='Input text'
                        style={{ margin: '30px' }}
                    ></Input>
                </div>
            </div>
            <div>1.1输入状态</div>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                <div style={{ marginBottom: '20px' }}>
                    <Input
                        size='big'
                        prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
                        placeholder='Input text'
                    ></Input>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <Input
                        size='big'
                        prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
                        placeholder='Input text'
                    ></Input>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <Input
                        size='big'
                        prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
                        placeholder='Input text'
                    ></Input>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <Input
                        size='big'
                        prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
                        placeholder='Input text'
                    ></Input>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <Input
                        size='big'
                        warn={true}
                        warnText='error'
                        prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
                        placeholder='Input text'
                    ></Input>
                </div>
            </div>
            <div style={{ marginBottom: '30px' }}>1.2 有标题输入框</div>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                <div style={{ marginBottom: '60px' }}>
                    <Input
                        label='Enter your email'
                        size='big' placeholder='Input text'
                        style={{ margin: '30px' }}
                    ></Input>
                </div>
            </div>
            <div style={{ marginBottom: '30px' }}>1.3 纯输入框</div>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                <div style={{ marginBottom: '60px' }}>
                    <Input
                        // label='Enter your email'
                        size='big' placeholder='Input text'
                        style={{ margin: '30px' }}
                    ></Input>
                </div>
            </div>
            <div style={{ marginBottom: '30px' }}>1.4组合输入框</div>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                <div style={{ marginBottom: '60px' }}>
                    <Search style={{ margin: '30px' }} placeholder="Input text" enterButton="Search" />
                    <Search style={{ margin: '30px' }} placeholder="Input text" enterButton="Search" defaultValue={'texttexttexttex'} onChange={() => null} />
                </div>
                <div style={{ marginBottom: '60px' }}>
                    <Search style={{ margin: '30px' }} placeholder="Input text" suffix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />} defaultValue={'texttexttexttex'} onChange={() => null} />
                    <Search style={{ margin: '30px' }} placeholder="Input text" suffix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />} defaultValue={'texttexttexttex'} onChange={() => null} />
                </div>
            </div>
            <div style={{ marginBottom: '30px' }}>2.1多行输入纯输入框</div>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                <div style={{ marginBottom: '60px' }}>
                    <TextArea rows={'4'} style={{ margin: '30px' }} />
                    <TextArea rows={'4'} defaultValue={'1234355'} onChange={() => null} style={{ margin: '30px' }} />
                </div>
            </div>
            <div style={{ marginBottom: '30px' }}>2.2 数字提示输入框</div>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                <div style={{ marginBottom: '60px' }}>
                    <TextArea rows={'4'} showCount={true} maxLength={1000} style={{ margin: '30px' }} />
                    <TextArea rows={'4'} defaultValue={'1234355'} showCount={true} maxLength={1000} style={{ margin: '30px' }} />
                </div>
            </div>
        </div>
    );
}

export default DemoInput;
