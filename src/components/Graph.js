import React, { Component } from 'react'
import PropTypes from "prop-types"

import AxisYLines from "./AxisYLines";
import AxisXLines from "./AxisXLines"
import LineGraph from "./LineGraph";
import {GLOBAL_WIDTH, GLOBAL_HEIGHT} from "../constants/common"
import {convertMouseXPosition, getNearestValue} from "../utils"

export default class Graph extends Component {
    constructor(){
        super();

        this.state = {nearestValue: {}}
    }

    render() {
        const {width, height, data} = this.props
            , {nearestValue} = this.state;

        return (
            <svg width={width} height={height} onMouseMove={::this.mouseHandler}>
                <AxisYLines />
                <AxisXLines />
                <LineGraph data={data} nearestValue={nearestValue}
                           width={width} height={height}/>
            </svg>
        )
    }

    mouseHandler(e){
        const {data} = this.props
            , { left } = e.target.getBoundingClientRect()
            , xMouse = e.clientX - left
            , mousePosition = convertMouseXPosition(xMouse, (GLOBAL_WIDTH + left))
            , nearestValue = getNearestValue(mousePosition, data, GLOBAL_HEIGHT);

        !!nearestValue && this.setState({nearestValue: nearestValue})
    }
}

Graph.defaultProps = {
    width: '200px',
    height: '200px',
    data: []
};

Graph.PropTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    data: PropTypes.array
};