import React, { Component } from 'react'

import {getCoordForXText, stopPropagation} from "../utils"
import {AXIS_X} from '../constants/Legend'
import {GLOBAL_WIDTH, GLOBAL_HEIGHT, AXIS_TEXT_COLOR} from "../constants/common"
import Text from "./Text";

const WIDTH_CORRECTOR = 20;
const COORDS_SVG = {x: 0};

export default class AxisXLines extends Component {
    render() {
        return (
            <svg {...COORDS_SVG} y={GLOBAL_HEIGHT} width={GLOBAL_WIDTH + WIDTH_CORRECTOR} onMouseMove={stopPropagation}>
                {AXIS_X.map((value, index) => {
                    let coordsText = getCoordForXText(index + 1, GLOBAL_WIDTH, AXIS_X.length);

                    return (
                        <Text key={value} coords={coordsText} textAnchor={'end'} fill={AXIS_TEXT_COLOR}>
                            {value}
                        </Text>
                    )
                })}
            </svg>
        )
    }
}