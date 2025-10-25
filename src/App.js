import carNameinput from "./InputView/carNameInput.js";
import moveCountInput from "./InputView/moveCountInput.js";

class App {
  async run() {
    await carNameinput();
    await moveCountInput();
  }
}

export default App;
