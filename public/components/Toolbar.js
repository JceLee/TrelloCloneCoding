export default class Toolbar {
  constructor($target) {
    this.toolbar = document.createElement("div");
    this.toolbar.className = "toolbar";

    $target.appendChild(this.toolbar);

    this.render();
  }

  render() {
    const emptyBox = document.createElement("div");
    this.toolbar.appendChild(emptyBox);
  }
}
