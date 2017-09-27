import React, { Component } from 'react'
import PropTypes from "prop-types"

import {getCoordsForGraphLine} from "../utils"
import {GLOBAL_WIDTH, GLOBAL_HEIGHT, GRAPH_COLOR} from "../constants/common"
import DataView from "./DataView";

export default class LineGraph extends Component {
    render() {
        const {data, width, height, nearestValue, coordsSvg, fill} = this.props
            , {coords, value} = nearestValue;

        return (
            <svg {...coordsSvg} width={width} height={height} className={`svg-graph-line-${fill}`}>
                <polyline points={getCoordsForGraphLine(data, GLOBAL_HEIGHT, GLOBAL_WIDTH)} />
                {coords && <DataView width={width} height={height} coords={coords} value={value}/>}
            </svg>
        )
    }
}

LineGraph.defaultProps = {
    coordsSvg: {x: 20, y: 0},
    fill: 'transparent',
    data: [],
    width: '200px',
    height: '200px',
    nearestValue: {coords: {x: 0, y: 0}, value: {}}
};

LineGraph.PropTypes = {
    coordsSvg: PropTypes.object,
    fill: PropTypes.string,
    data: PropTypes.array,
    width: PropTypes.string,
    height: PropTypes.string,
    nearestValue: PropTypes.object
};

