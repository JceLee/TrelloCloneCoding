import MainBoard from "./components/MainBoard";
import Toolbar from "./components/Toolbar";

export default class Trello {
  constructor($target) {
    const mainBoard = new MainBoard($target);
    const toolbar = new Toolbar($target);
  }

  render() {}
}
