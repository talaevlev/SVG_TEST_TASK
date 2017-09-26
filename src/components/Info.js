import React, { Component } from 'react'
import {toDate, transformDotToComa} from "../utils"
import RiseIndicator from "./RiseIndicator";
import Text from "./Text";
import {AXIS_TEXT_COLOR} from "../constants/common";

const COORDS_TEXT_DATA = {x:20, y: 20};
const COORDS_TEXT_VALUE = {x:20, y: 40};
const COORDS_INDICATOR = {x:70, y:31};
const BLOCK_STYLE = {x: 10, rx: 6, ty: 6, width: 120, height: 50};
const SVG_STYLE = {width: 210, height: 60};
const SVG_WIDTH_CORRECTOR = 60;

export default class Info extends Component {
    render(){
        const {coords, value} = this.props,
              {valueT, valueY, rise, howRise} = value,
              date = toDate(valueT);

        return(
            <svg x={coords.x} y={coords.y - SVG_WIDTH_CORRECTOR} {...SVG_STYLE}>

                <defs>
                    <filter id='shadow'>
                        <feDropShadow dx={0} dy={2} stdDeviation={10}/>
                    </filter>
                </defs>

                <g>
                    <rect {...BLOCK_STYLE} style={{filter:'url(#shadow)'}} fill='white'/>
                    <Text coords={COORDS_TEXT_DATA} fill={AXIS_TEXT_COLOR}>
                        {date}
                    </Text>
                    <Text coords={COORDS_TEXT_VALUE}>
                        {`$ ${transformDotToComa(valueY + '')}`}
                    </Text>
                    <RiseIndicator coords={COORDS_INDICATOR} rise={rise} howRise={howRise}/>
                </g>
            </svg>
        )
    }

}