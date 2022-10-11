const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");
let canvasSize;
let regExp = /[IXO\-]{10}/

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);

function setCanvasSize() {
  const wWidth = window.innerWidth;
  const wHeight = window.innerHeight;
  if (wHeight < wWidth) {
    canvasSize = wHeight * 0.75;
  } else {
    canvasSize = wWidth * 0.75;
  }
  canvas.setAttribute("Width", canvasSize);
  canvas.setAttribute("Height", canvasSize);
  startGame();
}

function startGame() {
  const elementSize = canvasSize / 10;
  game.font = elementSize - 10 + "px Verdana";
  game.textAlign = "end";
  for (let x = 1; x <= 10; x++) {
    for (let y = 1; y <= 10; y++) {
      game.fillText(emojis.X, elementSize * x, (elementSize - 2) * y);
    }
  }
}
