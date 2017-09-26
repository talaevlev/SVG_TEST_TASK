import React, { Component } from 'react';

import Info from "./Info";
import {GLOBAL_HEIGHT, GRAPH_COLOR, AXIS_TEXT_COLOR} from "../constants/common";
import {getY, stopPropagation} from "../utils";

export default class DataIndicator extends Component {
    render() {
        const {width, height, coords, value} = this.props;

        return (
            <g width={width} height={height} onMouseMove={stopPropagation} fill={'transparent'}>
                <circle {...this.transfromDotCoords(coords)} r={4} fill={GRAPH_COLOR}
                                   stroke={'white'} strokeWidth={2}/>
                <line {...this.getLineCoords(coords)} strokeDasharray='5, 5'
                                 stroke={AXIS_TEXT_COLOR} strokeWidth={0.5}/>
                <Info coords={coords} value={value}/>
            </g>
        )
    }

    transfromDotCoords(coords){
        return {
            cx: coords.x,
            cy: coords.y
        }
    }

    getLineCoords(coords){
        return {
            x1: coords.x,
            x2: coords.x,
            y1: coords.y,
            y2: getY(0, GLOBAL_HEIGHT)
        }
    }
}