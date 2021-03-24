import React, { } from 'react';
import Style from './progress.module.less';

interface Props {
    format?: () => void,//	内容的模板函数	function(percent, successPercent)	(percent) => percent + %
    percent?: number,//	百分比	number	0
    showInfo?: boolean,//	是否显示进度数值或状态图标	boolean	true
    status?: string,//	状态，可选：success exception normal active(仅限 line)	string	-
    strokeColor?: string,//	进度条的色彩	string	-
    strokeLinecap?: string,//	进度条的样式	round | square	round
    success?: string,//	成功进度条相关配置	{ percent: number, strokeColor: string }	-
    trailColor?: string,//	未完成的分段的颜色	string	-
    type?: string,//	类型，可选 line circle dashboard	string	line
    width?: number | string,//	百分比	number	0
    style?: object,
    className?: string
}
const CheckBox = function CheckBox({ percent=20, width = '100', style, className = ''
}: Props,) {
    return (
        <div className={`${Style['ez-progress']}  ${className}`} style={style}>
            <div className={`${Style['ez-progress-outer']} `} >
                <div className={`${Style['ez-progress-inner']} `} style={{ width: `${width}px` }}>
                    <div className={`${Style['ez-progress-bg']} `} style={{ width: `${percent}%` }}></div>
                </div>
            </div>
            {/* <div className={`${Style['ez-progress-text']} `} >{percent}</div> */}
        </div>
    );
}

export default CheckBox;
