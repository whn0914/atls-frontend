/**
 * Created by haonan on 16/5/1.
 */

export function getExpressCode(expName) {
    let nameCodeMap = new Map(nameCodeArray);
    return nameCodeMap.get(expName) == undefined ? expName : nameCodeMap.get(expName);
}

const nameCodeArray = [
    ["顺丰快递", "SF"],
    ["韵达快递", "YD"],
    ["圆通速递", "YTO"],
    ["申通快递", "STO"],
    ["中通速递", "ZTO"]
];