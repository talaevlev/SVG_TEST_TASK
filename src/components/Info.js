import React, { Component } from 'react'
import PropTypes from "prop-types"

import {toDate, transformDotToComa} from "../utils"
import RiseIndicator from "./RiseIndicator";
import Text from "./Text";
import {AXIS_TEXT_COLOR} from "../constants/common";

export default class Info extends Component {
    render(){
        const {coords, value, coordsTextData, coordsTextValue, coordsIndicator, blockCoords,
                liftToUpInfoBlockConstant} = this.props,
              {valueT, valueY, rise, howRise} = value,
              date = toDate(valueT);
        return(
            <svg x={coords.x} y={coords.y - liftToUpInfoBlockConstant} className={'svg-info'}>

                <defs>
                    <filter id='shadow'>
                        <feDropShadow dx={0} dy={2} stdDeviation={10}/>
                    </filter>
                </defs>

                <rect {...blockCoords}/>
                <Text coords={coordsTextData} fill={AXIS_TEXT_COLOR}>
                    {date}
                </Text>
                <Text coords={coordsTextValue}>
                    {`$ ${transformDotToComa(valueY + '')}`}
                </Text>
                <RiseIndicator coords={coordsIndicator} rise={rise} howRise={howRise}/>
            </svg>
        )
    }
}

Info.defaultProps = {
    coordsTextData: {x:20, y: 20},
    coordsTextValue: {x:20, y: 40},
    coordsIndicator: {x:70, y:31},
    blockCoords: {x: 10},
    liftToUpInfoBlockConstant: 60,
    coords: {x: 0, y: 0},
    value: {},
    valueT: 0,
    valueY: 'None',
    rise: false,
    howRise: 0
};

Info.PropTypes = {
    coordsTextData: PropTypes.object,
    coordsTextValue: PropTypes.object,
    coordsIndicator: PropTypes.object,
    blockCoords: PropTypes.object,
    coords: PropTypes.object,
    value: PropTypes.object,
    liftToUpInfoBlockConstant: PropTypes.number,
    valueT: PropTypes.number,
    rise: PropTypes.bool,
    howRise: PropTypes.number
};