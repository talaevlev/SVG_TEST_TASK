import React, { Component } from 'react'

import AxisYLines from "./AxisYLines";
import AxisXLines from "./AxisXLines"
import LineGraph from "./LineGraph";
import {GLOBAL_WIDTH, GLOBAL_HEIGHT} from "../constants/common"
import {getMouseXPosition, getNearestValue} from "../utils"

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
            , mousePosition = getMouseXPosition(xMouse, (GLOBAL_WIDTH + left))
            , nearestValue = getNearestValue(mousePosition, data, GLOBAL_HEIGHT);

        !!nearestValue && this.setState({nearestValue: nearestValue})
    }
}