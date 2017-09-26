import React, { Component } from 'react'

export default class Text extends Component {
    render() {
        const {children, coords, fontFamily, fill, fontSize, textAnchor} = this.props;

        return (
            <text {...coords} fill={fill} fontFamily={fontFamily} textAnchor={textAnchor} fontSize={fontSize}>
                {children}
            </text>
        )
    }
}

Text.defaultProps = {
    coords: {x: 0, y:0},
    fill: 'black',
    fontSize: '12',
    fontFamily: 'Helvetica',
    textAnchor: 'start'
};