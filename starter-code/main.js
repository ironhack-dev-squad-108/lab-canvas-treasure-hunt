// --- Initialization  ---
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var deltaHeight = height / 10;
var deltaWidth = width / 10;

// --- Class ---

class Character {
  constructor(x, y) {
    this.col = x;
    this.row = y;
  }

  draw() {
    var img = new Image();
    img.src = "./images/character-down.png";
    img.onload = () => {
      ctx.drawImage(
        img,
        this.col * deltaWidth,
        this.row * deltaHeight,
        deltaWidth,
        deltaHeight
      );
    };
  }

  moveUp() {
    if (!(this.row - 1 < 0)) {
      this.row--;
      if (this.col === treasure.col && this.row === treasure.row) {
        console.log("found treausre");
        treasure.setRandomPosition();
      }
    } else console.log("forbidden");
  }

  moveDown() {
    if (!(this.row + 1 > 9)) {
      this.row++;
      if (this.col === treasure.col && this.row === treasure.row) {
        console.log("found treausre");
        treasure.setRandomPosition();
      }
    } else console.log("forbidden");
  }

  moveRight() {
    if (!(this.col + 1 > 9)) {
      this.col++;
      if (this.col === treasure.col && this.row === treasure.row) {
        console.log("found treausre");
        treasure.setRandomPosition();
      }
    } else console.log("forbidden");
  }

  moveLeft() {
    if (!(this.col - 1 < 0)) {
      this.col--;
      if (this.col === treasure.col && this.row === treasure.row) {
        console.log("found treausre");
        treasure.setRandomPosition();
      }
    } else console.log("forbidden");
  }
}
class Treasure {
  constructor() {
    this.col;
    this.row;
    this.setRandomPosition();
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 8 + 1);
    this.row = Math.floor(Math.random() * 8 + 1);
  }

  draw() {
    var img = new Image();
    img.src = "./images/treasure.png";
    img.onload = () => {
      ctx.drawImage(
        img,
        this.col * deltaWidth,
        this.row * deltaHeight,
        deltaWidth,
        deltaHeight
      );
    };
  }
}

// ---Function ---

function drawGrid() {
  // Clear Canvas
  ctx.clearRect(0, 0, width, height);

  // Rectangle (border)
  ctx.strokeRect(0, 0, width, height);

  // Horizontal Lines
  var tmp = deltaHeight;
  for (var i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.moveTo(0, tmp);
    ctx.lineTo(width, tmp);
    ctx.stroke();
    tmp += deltaHeight;
  }
  // Vertical Lines
  var tmp = deltaWidth;
  for (var i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.moveTo(tmp, 0);
    ctx.lineTo(tmp, height);
    ctx.stroke();
    tmp += deltaWidth;
  }

  // Draw Player
  player.draw();

  // Draw Treasure
  treasure.draw();
}

// --- Game initialization ---

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      console.log("left");
      player.moveLeft();
      drawGrid();
      break;
    case 38:
      console.log("up");
      player.moveUp();
      drawGrid();
      break;
    case 39:
      console.log("right");
      player.moveRight();
      drawGrid();
      break;
    case 40:
      console.log("down");
      player.moveDown();
      drawGrid();
      break;

    default:
      console.log("wrong key");
      break;
  }
};

var player = new Character(1, 1);
var treasure = new Treasure();
drawGrid();
