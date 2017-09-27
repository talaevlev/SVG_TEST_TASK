import React, { Component } from 'react';
import PropTypes from "prop-types"

import Text from "./Text";
import {transformDotToComa} from "../utils";

export default class RiseIndicator extends Component {
    render(){
        const {rise, coords, howRise, points, textCoords} = this.props,
              pointsCoords = rise ? points.rise : points.fall;

        return(
            <svg x={coords.x} y={coords.y}>
                {rise !== null && <polygon points={pointsCoords}
                                           className={`rise-indicator-${rise ? 'green' : 'red'}`}/>}
                {rise !== null && (
                    <Text coords={textCoords} fill={`${rise ? 'green' : 'red'}`}>
                        {transformDotToComa(howRise + '')}
                    </Text>
                    )
                }
            </svg>
        )
    }

}

RiseIndicator.defaultProps = {
    rise: false,
    coords: {x: 0, y: 0},
    howRise: 0,
    points: {rise: '5,3 0,9 10,9', fall: '5,8 0,4 10,4'},
    textCoords: {x: 12, y: 9}
};

RiseIndicator.PropTypes = {
    rise: PropTypes.bool,
    coords: PropTypes.object,
    points: PropTypes.object,
    textCoords: PropTypes.object,
    howRise: PropTypes.number
};