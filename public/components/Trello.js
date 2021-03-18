import MainBoard from "./MainBoard.js";
import Toolbar from "./Toolbar.js";

export default class Trello {
  constructor($target) {
    const toolbar = new Toolbar($target);
    const mainBoard = new MainBoard($target);
  }
}
