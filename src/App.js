import carNameinput from "./InputView/carNameInput.js";
import moveAttemptCountInput from "./InputView/moveAttemptCountInput.js";
import { carNameParser } from "./parser.js";
import { setCarInfo } from "./carMove.js";
import { raceOutput } from "./OutputView/raceOutput.js";
import { getWinner } from "./getWinner.js";
import winnerOutput from "./OutputView/WinnerOutput.js";

class App {
  async run() {
    const carNames = await carNameinput();
    const moveAttemptCount = await moveAttemptCountInput();

    const parsedCarNames = carNameParser(carNames);

    let cars = setCarInfo(parsedCarNames);

    raceOutput(cars, moveAttemptCount);

    const winners = getWinner(cars);

    winnerOutput(winners);
  }
}

export default App;
