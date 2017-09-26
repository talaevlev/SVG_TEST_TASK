import React, { Component } from 'react';

import Text from "./Text";
import {transformDotToComa} from "../utils";
import {RISE_INDICATOR_COLOR} from "../constants/common"

const POINTS = {rise: '5,3 0,9 10,9', fall: '5,8 0,4 10,4'};
const COORDS_TEXT = {x: 12, y: 9};

export default class RiseIndicator extends Component {
    render(){
        const {rise, coords, howRise} = this.props,
              color = rise ? RISE_INDICATOR_COLOR.rise : RISE_INDICATOR_COLOR.fall,
              points = rise ? POINTS.rise : POINTS.fall;

        return(
            <svg x={coords.x} y={coords.y}>
                {rise !== null && <polygon points={points} fill={color}/>}
                {rise !== null && (
                    <Text coords={COORDS_TEXT} fill={color}>
                        {transformDotToComa(howRise + '')}
                    </Text>
                    )
                }
            </svg>
        )
    }

}