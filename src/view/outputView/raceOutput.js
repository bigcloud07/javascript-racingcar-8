import { Console } from "@woowacourse/mission-utils";
import { raceResult } from "../../model/carModel.js";

export function raceOutput(carsObject, moveAttemptCount) {
    Console.print('\n실행 결과');
    for (let i = 0; i < moveAttemptCount; i++) {
        raceResult(carsObject);
        Console.print("");
    }
}