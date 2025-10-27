import getCarNames from './view/inputView/getCarNames.js';
import getMoveAttemptCount from './view/inputView/getMoveAttemptCount.js';
import { carNameParser, moveAttemptCountParser } from './parser.js';
import { setCars } from './model/carModel.js';
import { raceOutput } from './view/outputView/raceOutput.js';
import { getWinner } from './model/winnerModel.js';
import winnerOutput from './view/outputView/winnerOutput.js';

class App {
  async run() {
    const carNames = await getCarNames();
    const parsedCarNames = carNameParser(carNames);

    const moveAttemptCount = await getMoveAttemptCount();
    const parsedMoveAttemptCount = moveAttemptCountParser(moveAttemptCount);

    const cars = setCars(parsedCarNames);

    raceOutput(cars, parsedMoveAttemptCount);

    const winners = getWinner(cars);

    winnerOutput(winners);
  }
}

export default App;
