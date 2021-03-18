export default class MainBoard {
  constructor($target) {
    this.mainBoard = document.createElement("div");
    this.mainBoard.className = "mainBoard";

    $target.appendChild(this.mainBoard);

    this.render();
  }

  render() {
    const emptyBox = document.createElement("button");

    this.mainBoard.appendChild(emptyBox);
  }
}
