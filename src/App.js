import carNameinput from "./InputView/carNameInput.js";
import moveAttemptCountInput from "./InputView/moveAttemptCountInput.js";

class App {
  async run() {
    const carNames = await carNameinput();
    const moveCount = await moveAttemptCountInput();
  }
}

export default App;
