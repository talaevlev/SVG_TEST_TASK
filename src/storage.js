import {DATE_START, DATA_FILL_LENGTH, DOTS_MIN_ON_Y_AXIS, DOTS_MAX_COUNT_ON_Y_AXIS} from "./constants/common"
import {round, tsMulriplierForX} from "./utils"

export const data = fillData();

function fillData(){
    let data = []
        , ts = DATE_START;

    for (let i = 0; i < DATA_FILL_LENGTH; i++){
        ts = i === 0 ? ts : ts + tsMulriplierForX();

        data.push({
            id: i,
            valueT: ts,
            valueY: round((DOTS_MIN_ON_Y_AXIS - 0.5 + Math.random() * (DOTS_MAX_COUNT_ON_Y_AXIS - DOTS_MIN_ON_Y_AXIS + 1)))
        });

        if (i > 0){
            data[i].rise = data[i].valueY > data[i - 1].valueY;
            data[i].howRise = round(Math.abs(data[i].valueY - data[i - 1].valueY))
        } else
            data[i].rise = null
    }

    return data;
}