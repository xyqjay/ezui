import React, { useState, } from 'react';
// import { Modal } from '../components/index';
import Style from './modalDemo.module.scss';
import { Button, Modal, Input } from '../components/index';

const { Popover } = Modal;
const { Tooltip } = Modal;
const { Message } = Modal;
function DemoModal() {
    let [showModal1_1, setModal1_1] = useState(false);
    let [showModal1_2, setModal1_2] = useState(false);
    let [showModal1_3, setModal1_3] = useState(false);
    let [showModal1_4, setModal1_4] = useState(false);
    let [showModal1_5, setModal1_5] = useState(false);

    let [showModal2_1, setModal2_1] = useState(false);
    let [showModal2_2, setModal2_2] = useState(false);
    let [showModal2_3, setModal2_3] = useState(false);

    let [showModal3_1, setModal3_1] = useState(false);
    let [showModal3_2, setModal3_2] = useState(false);
    let [showModal3_3, setModal3_3] = useState(false);
    let [showModal3_4, setModal3_4] = useState(false);

    let [showModal4_1, setModal4_1] = useState(false);
    
    let [showModal5_1, setModal5_1] = useState(false);
    
    return (
        <div className="App" style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }} >
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                <div>1.1输入尺寸</div>
                <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>

                    <Button onClick={() => { setModal1_1(true) }} type='primary' style={{ margin: '20px' }}>Modal1_1</Button>
                    <Button onClick={() => { setModal1_2(true) }} type='primary' style={{ margin: '20px' }}>Modal1_2</Button>
                    <Button onClick={() => { setModal1_3(true) }} type='primary' style={{ margin: '20px' }}>Modal1_3</Button>
                    <Button onClick={() => { setModal1_4(true) }} type='primary' style={{ margin: '20px' }}>Modal1_4</Button>
                    <Button onClick={() => { setModal1_5(true) }} type='primary' style={{ margin: '20px' }}>Modal1_5</Button>
                </div>
                {showModal1_1 ? <Modal className={Style.name} title={'This is a title'} okText='Primary' onCancel={() => { setModal1_1(false) }}>
                    <span>We adhere to the educational mission by applying advanced internet technologies in access to quality.</span>
                </Modal> : ''}
                {showModal1_2 ? <Modal title={'This is a title'} okText='Primary' cancelText='Text Button' cancelType='text' onCancel={() => { setModal1_2(false) }}>
                    <span>We adhere to the educational mission by applying advanced internet technologies in access to quality.</span>
                </Modal> : ''}
                {showModal1_3 ? <Modal title={'This is a title'} okText='Primary' cancelText='Text Button' onCancel={() => { setModal1_3(false) }}>
                    <span>We adhere to the educational mission by applying advanced internet technologies in access to quality.</span>
                </Modal> : ''}
                {showModal1_4 ? <Modal centered={true} title={
                    <div>
                        <div>
                            <img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" style={{ width: '112px', height: '112px' }} />
                            <div>This is a title</div>
                        </div>
                    </div>
                } okText='Primary' cancelText='Text Button' onCancel={() => { setModal1_4(false) }}>
                    <span>We adhere to the educational mission by applying advanced internet technologies in access to quality.</span>
                </Modal> : ''}
                {showModal1_5 ? <Modal size='big' title='This is a title' okText='Primary' cancelType='text' cancelText='Text Button' onCancel={() => { setModal1_5(false) }}>
                    <span>We adhere to the educational mission by applying advanced internet technologies in access to quality.</span>
                </Modal> : ''}
            </div>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                <div>2.1输入尺寸-----------</div>
                <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>

                    <Button onClick={() => { setModal2_1(true) }} type='primary' style={{ margin: '20px' }}>Modal2_1</Button>
                    <Button onClick={() => { setModal2_2(true) }} type='primary' style={{ margin: '20px' }}>Modal2_2</Button>
                    <Button onClick={() => { setModal2_3(true) }} type='primary' style={{ margin: '20px' }}>Modal2_3</Button>
                </div>
                <div>1.1输入状态</div>
                {showModal2_1 ? <Modal title={'This is a title'} okText='Primary' cancelType='text' cancelText={<span style={{ color: 'rgba(43, 43, 45, 0.6)' }}>Text Button</span>} onCancel={() => { setModal2_1(false) }}>
                    <div>
                        <div style={{ margin: '10px 0' }}>We adhere to the educational mission by applying advanced internet technologies in access to quality.</div>
                        <Input
                            size='big'
                            // prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
                            placeholder='Input text'
                        ></Input>
                    </div>
                </Modal> : ''}
                {showModal2_2 ? <Modal title={'This is a title'} okText='Primary' cancelText={<span style={{ color: 'rgba(43, 43, 45, 0.6)' }}>Text Button</span>} cancelType='text' onCancel={() => { setModal2_2(false) }}>
                    <div>
                        <div style={{ margin: '10px 0' }}>We adhere to the educational mission by applying advanced internet technologies in access to quality.</div>
                        <Input
                            size='big'
                            warn={true}
                            warnText='Error error error'
                            // prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
                            placeholder='Input text'
                        ></Input>
                    </div>
                </Modal> : ''}
                {showModal2_3 ? <Modal title={'This is a title'} okText='Primary' cancelText={<span style={{ color: 'rgba(43, 43, 45, 0.6)' }}>Text Button</span>} cancelType='text' onCancel={() => { setModal2_3(false) }}>
                    <Input
                        size='big'
                        // prefix={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
                        placeholder='Input text'
                    ></Input>
                </Modal> : ''}
            </div>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                <div>3.1气泡-----------</div>
                <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>

                    <Button onClick={() => { setModal3_1(true) }} type='primary' style={{ margin: '20px' }}>Modal3_1</Button>
                    <Button onClick={() => { setModal3_2(true) }} type='primary' style={{ margin: '20px' }}>Modal3_2</Button>
                    <Button onClick={() => { setModal3_3(true) }} type='primary' style={{ margin: '20px' }}>Modal3_3</Button>
                    <Button onClick={() => { setModal3_4(true) }} type='primary' style={{ margin: '20px' }}>Modal3_4</Button>
                </div>
                {showModal3_1 ? <Tooltip title={'Are you sure to delete this task?'} placement='top' onCancel={() => { setModal3_1(false) }}></Tooltip> : ''}
                {showModal3_2 ? <Popover title={'Are you sure to delete this task?'} placement='bottom' okText='Primary' cancelType='text' cancelText={<span style={{ color: 'rgba(43, 43, 45, 0.6)' }}>Text 11Button</span>} onCancel={() => { setModal3_2(false) }}></Popover> : ''}
                {showModal3_3 ? <Popover title={'Are you sure to delete this task?'} placement='left' onCancel={() => { setModal3_3(false) }}>
                    <span>We adhere to the educational mission by applying advanced internet technologies in access to quality.</span>
                </Popover> : ''}
                {showModal3_4 ? <Popover title={'Are you sure to delete this task?'} placement='right' okText='Primary' cancelType='text' cancelText={<span style={{ color: 'rgba(43, 43, 45, 0.6)' }}>Text 11Button</span>} onCancel={() => { setModal3_4(false) }}>
                    <span>We adhere to the educational mission by applying advanced internet technologies in access to quality.</span>
                </Popover> : ''}
                {/* {showModal2_2 ? <Modal title={'This is a title'} okText='Primary' cancelText={<span style={{ color: 'rgba(43, 43, 45, 0.6)' }}>Text Button</span>} cancelType='text' onCancel={() => { setModal2_2(false) }}>
                    <div>
                        <div style={{ margin: '10px 0' }}>We adhere to the educational mission by applying advanced internet technologies in access to quality.</div>
                        <Input
                            size='big'
                            warn={true}
                            warnText='Error error error'
                            placeholder='Input text'
                        ></Input>
                    </div>
                </Modal> : ''}
                {showModal2_3 ? <Modal title={'This is a title'} okText='Primary' cancelText={<span style={{ color: 'rgba(43, 43, 45, 0.6)' }}>Text Button</span>}cancelType='text' onCancel={() => { setModal2_3(false) }}>
                    <Input
                        size='big'
                        placeholder='Input text'
                    ></Input>
                </Modal> : ''}
           */}
            </div>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                <div>3.1气泡-----------</div>
                <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>

                    <Button onClick={() => { setModal4_1(true) }} type='primary' style={{ margin: '20px' }}>Modal4_1</Button>
                   
                </div>
                {showModal4_1 ? <Tooltip title={'Are you sure to delete this task?'} placement='rightBottom' onCancel={() => { setModal3_1(false) }} ></Tooltip> : ''}
            </div>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                <div>4---message-----------</div>
                <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>

                    <Button onClick={() => { setModal5_1(true) }} type='primary' style={{ margin: '20px' }}>Modal4_1</Button>
                   
                </div>
                {showModal5_1 ? <Message   icon={<img src='https://cdn.lumiclass.com/cms/qm/2021/01/25/48a45eaf-9ae7-42b8-8d7b-96e83ea4030a.png' alt="" />}
                       title={'Are you sure to delete this task?'} placement='rightBottom' onCancel={() => { setModal5_1(false) }} ></Message> : ''}
            </div>

        </div>
    );
}

export default DemoModal;
