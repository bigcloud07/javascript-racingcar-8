import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";

const MOVE_MARK = '-';


export function setCarInfo(parsedCarNames) {
    let carsInfo = {};
    const entries = parsedCarNames.map((carName) => [carName, '']);
    carsInfo = Object.fromEntries(entries);

    return carsInfo;
}

function handleCarMove(carsObject, carName) {
    const randomNum = Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) {
        carsObject[carName] += MOVE_MARK;
    }
}

export function updateCarMoveCount(carsObject) {
    Object.keys(carsObject).forEach((carName) => handleCarMove(carsObject, carName));
}

export function raceResult(carsObject) {
    updateCarMoveCount(carsObject);
    const updatedCarsEntries = Object.entries(carsObject);
    updatedCarsEntries.forEach(([key, value]) => {
        Console.print(`${key} : ${value}`);
    })
}