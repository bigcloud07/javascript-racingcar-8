import { Console } from '@woowacourse/mission-utils';
import { raceResult } from '../../model/carModel.js';

export function raceOutput(carsObject, moveAttemptCount) {
  Console.print('\n실행 결과');
  for (let round = 0; round < moveAttemptCount; round += 1) {
    raceResult(carsObject);
    Console.print('');
  }
}
