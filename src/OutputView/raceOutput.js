import { Console } from "@woowacourse/mission-utils";
import { raceResult } from "../carMove.js";

export function raceOutput(carsObject, moveAttempCount) {
    Console.print('\n실행 결과');
    for (let i = 0; i < moveAttempCount; i++) {
        raceResult(carsObject);
        Console.print("");
    }
}