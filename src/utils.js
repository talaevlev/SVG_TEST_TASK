import moment from "moment";

import {
    MULTIPLY_Y,
    GLOBAL_WIDTH,
    DATE_START, DATE_END,
    DATA_FILL_LENGTH
} from "./constants/common"
import {data} from "./storage"

export function convertCoordForYLines(coord, height, width){
    return {
        x1: 20,
        x2: width,
        y1: getY(coord, height),
        y2: getY(coord, height)
    }
}

export function convertCoordForYText(coord, height){
    return {
        x: 0,
        y: getY(coord, height)
    }
}

export function getCoordForXText(index, width, count){
    return {
        x: _getX(index, width, count),
        y: 10
    }
}

export function getCoordsForGraphLine(data, height){
    let coords = '';

    data.forEach(item => {
        coords += `${getX(item.valueT)},${getY(item.valueY, height)} `
    });

    return coords;
}

export function convertMouseXPosition(pos, width){
    return Math.round(pos / (width / DATA_FILL_LENGTH))
}

export function getNearestValue(mousePosition, data, height){
    let ts = getMouseTsValue(mousePosition);

    let nearest = data.filter(value => {
        return value.valueT === ts
    });


    if (!!nearest[0])
        return {
            coords: {
                    x: getX(nearest[0].valueT),
                    y: getY(nearest[0].valueY, height)
                },
            value: nearest[0]
        }
}

export function getY(y, height){
    return height - (y * MULTIPLY_Y)
}

export function getX(ts){
    return Math.round((ts - DATE_START)/tsMulriplierForX() * (GLOBAL_WIDTH / data.length))
}

export function toDate(ts){
    return moment(ts - 0)
        .locale('ru-ru')
        .format("DD MMMM YYYY");
}

export function round(number){
    return Math.round(number * 100) / 100
}

export function tsMulriplierForX(){
    return Math.round((DATE_END - DATE_START) / DATA_FILL_LENGTH);
}

export function stopPropagation(e){
    e.stopPropagation();
}

export function transformDotToComa(str){
    return str.replace('.', ',');
}

function _getX(coord, width, count){
    return coord * xMultiplier(width, count)
}

function xMultiplier(width, count){
    return Math.round(width / count);
}

function getMouseTsValue(mousePosition){
    return Math.round(tsMulriplierForX()* mousePosition + DATE_START)
}
