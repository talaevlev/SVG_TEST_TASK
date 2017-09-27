import React, { Component } from 'react'

import {convertCoordForYLines, convertCoordForYText, stopPropagation} from "../utils"
import {AXIS_Y} from '../constants/Legend'
import {GLOBAL_WIDTH, GLOBAL_HEIGHT, AXIS_TEXT_COLOR} from "../constants/common"
import Text from "./Text";

export default class AxisYLines extends Component {
    render() {
        return (
            <svg onMouseMove={stopPropagation}>
                {AXIS_Y.map((value) => {
                    let coordsLines = convertCoordForYLines(value, GLOBAL_HEIGHT, GLOBAL_WIDTH),
                        coordsText = convertCoordForYText(value, GLOBAL_HEIGHT);

                    return (
                        <g key={value}>
                            <Text coords={coordsText} fill={AXIS_TEXT_COLOR}>
                                {value}
                            </Text>
                            <line {...coordsLines} className={'axis-y-lines'} />
                        </g>
                    )
                })}
            </svg>
        )
    }
}