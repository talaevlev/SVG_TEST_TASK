import React, { Component } from 'react'
import PropTypes from "prop-types"

import {getCoordForXText, stopPropagation} from "../utils"
import {AXIS_X} from '../constants/Legend'
import {GLOBAL_WIDTH, GLOBAL_HEIGHT, AXIS_TEXT_COLOR} from "../constants/common"
import Text from "./Text";

export default class AxisXLines extends Component {
    render() {
        const {widthExtend, coordsSvg} = this.props;

        return (
            <svg {...coordsSvg} y={GLOBAL_HEIGHT} width={GLOBAL_WIDTH + widthExtend} onMouseMove={stopPropagation}>
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

AxisXLines.defaultProps = {
    coordsSvg: {x: 0},
    widthExtend: 20
};

AxisXLines.PropTypes = {
    coordsSvg: PropTypes.object,
    widthExtend: PropTypes.number
};