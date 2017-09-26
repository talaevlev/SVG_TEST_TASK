import React, { Component } from 'react'

import {getCoordForYLines, getCoordForYText, stopPropagation} from "../utils"
import {AXIS_Y} from '../constants/Legend'
import {GLOBAL_WIDTH, GLOBAL_HEIGHT, AXIS_TEXT_COLOR} from "../constants/common"
import Text from "./Text";

export default class AxisYLines extends Component {
    render() {
        const {width, height} = this.props;

        return (
            <svg width={width} height={height} onMouseMove={stopPropagation}>
                {AXIS_Y.map((value) => {
                    let coordsLines = getCoordForYLines(value, GLOBAL_HEIGHT, GLOBAL_WIDTH),
                        coordsText = getCoordForYText(value, GLOBAL_HEIGHT);

                    return (
                        <g key={value}>
                            <Text coords={coordsText} fill={AXIS_TEXT_COLOR}>
                                {value}
                            </Text>
                            <line {...coordsLines} stroke={'lightgrey'} strokeWidth={'1'} />
                        </g>
                    )
                })}
            </svg>
        )
    }
}