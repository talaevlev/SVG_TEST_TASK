import React, { Component } from 'react';
import PropTypes from "prop-types"

import Info from "./Info";
import {GLOBAL_HEIGHT} from "../constants/common";
import {getY, stopPropagation} from "../utils";

export default class DataView extends Component {
    render() {
        const {width, height, coords, value} = this.props;

        return (
            <g width={width} height={height} onMouseMove={stopPropagation} className={"data-view"}>
                <circle {...this.transfromDotCoords(coords)} />
                <line {...this.getLineCoords(coords)}/>
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

DataView.defaultProps = {
    width: '200px',
    height: '200px',
    coords: {x: 0, y: 0},
    value: {}
};

DataView.PropTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    coords: PropTypes.object,
    value: PropTypes.object
};