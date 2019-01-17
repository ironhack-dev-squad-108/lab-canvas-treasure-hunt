var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;


// Iteration 1
function drawGrid() {
  function drawRow() {
    for (var i = 1; i < 10; i++) {
      ctx.beginPath();
      ctx.moveTo(0, 50 * i);
      ctx.lineTo(500, 50 * i);
      ctx.closePath();
      ctx.stroke();
    }
  }
  function drawColumn() {
    for (var i = 1; i < 10; i++) {
      ctx.beginPath();
      ctx.moveTo(50 * i, 0);
      ctx.lineTo(50 * i, 500);
      ctx.closePath();
      ctx.stroke();
    }
  }
  drawRow();
  drawColumn();
}
drawGrid();
class Character {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.randomX = Math.floor(Math.random() * 10);
    this.randomY = Math.floor(Math.random() * 10);
  }

  moveDown() {
    if (this.col < 9) {
      ctx.clearRect(0, 0, width, height);
      drawGrid();

      this.col++;
      this.drawPlayer();
      this.drawTreasure();
    }
  }
  moveUp() {
    if (this.col > 0) {
      
      ctx.clearRect(0, 0, width, height);
      drawGrid();
      this.col--;
      this.drawPlayer();
      this.drawTreasure();
    }
  }
  moveRight() {
    if (this.row < 9) {
      ctx.clearRect(0, 0, width, height);
      drawGrid();
      this.row++;

      this.drawPlayer();
      this.drawTreasure();
    }
    
  }
  moveLeft() {
    if (this.row > 0) {
      
      ctx.clearRect(0, 0, width, height);
      drawGrid();
      this.row--;
      this.drawPlayer();
      this.drawTreasure();
    }
  }
  drawPlayer() {
    var img = new Image();
    img.src = "/starter-code/images/character-down.png";
    ctx.drawImage(img, this.row * 51, this.col * 50, 46, 46);

    
  }
  drawTreasure() {
    var tres = new Image();
    tres.src = "/starter-code/images/treasure.png";
    ctx.drawImage(tres, this.randomX * 50, this.randomY * 50, 50, 50);
  }
}

document.onkeydown = function(e) {
  e.preventDefault();
  switch (e.keyCode) {
    case 37:
      player.moveLeft();

      break;
    case 38:
      player.moveUp();
      break;
    case 39:
      player.moveRight();
      break;
    case 40:
      player.moveDown();
      break;
  }
};

var player = new Character(1, 1); // (0,0) = Initial position

player.moveDown(); // Increase by 1 the value of player.row
player.moveDown(); // Increase by 1 the value of player.row
player.moveRight();
player.moveRight();
player.moveRight();
player.moveRight();
// Increase by 1 the value of player.col
console.log(player.col, player.row); // => 1,2
