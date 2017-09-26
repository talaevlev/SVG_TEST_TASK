import React, { Component } from 'react'

import {getCoordsFoGraphLine} from "../utils"
import {GLOBAL_WIDTH, GLOBAL_HEIGHT, GRAPH_COLOR} from "../constants/common"
import DataIndicator from "./DataIndicator";

const COORDS_SVG = {x: 20, y: 0};

export default class LineGraph extends Component {
    render() {
        const {data, width, height, nearestValue} = this.props
            , {coords, value} = nearestValue;

        return (
            <svg {...COORDS_SVG} width={width} height={height} fill={'transparent'}>
                <polyline points={getCoordsFoGraphLine(data, GLOBAL_HEIGHT, GLOBAL_WIDTH)} fill={'transparent'}
                          stroke={GRAPH_COLOR} strokeWidth={1.5}/>
                {coords && <DataIndicator width={width} height={height} coords={coords} value={value}/>}
            </svg>
        )
    }
}

