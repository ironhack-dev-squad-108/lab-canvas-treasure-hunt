var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

// Iteration 1
function drawGrid() {
  let x = 0;
  let y = 0;
  
  for (let j = 0; j < 10; j++){
    drawLine(y);
    y += 50;
  }

  function drawLine(y) {
    let x = 0;
    for (let i = 0; i < 10; i++){
      ctx.strokeRect(x,y,50,50);
      x += 50;
    }
  }
}

drawGrid();

// Iteration 2

class Character {
  constructor(){
    this.col = 0;
    this.row = 0;
  }

  moveUp() {
    this.row -= 50;
  }

  moveRight() {
    this.col += 50;
    console.log(player.col);
  }

  moveDown() {
    this.row += 50;
  }

  moveLeft(){
    this.col -= 50;
  }
  setRandomPosition() {
    this.col = Math.ceil(Math.random() * 10)*50;
    this.row = Math.ceil(Math.random() * 10)*50;
  }

}

var player = new Character(); 

var imgDown = new Image();
  imgDown.src = "./images/character-down.png";
var imgUp = new Image();
  imgUp.src = "./images/character-up.png";
var imgLeft = new Image();
  imgLeft.src = "./images/character-left.png";
var imgRight = new Image();
  imgRight.src = "./images/character-right.png";
var imgTreasure = new Image();
  imgTreasure.src = "./images/treasure.png";

// Iteration 3
function drawPlayer() {
  // console.log("col :" +player.col+ " row: "+player.row);
  // imgDown.onload = function() { 
    ctx.drawImage(imgDown,player.col,player.row, 50, 50);
  // };
}


// Iteration 3
class Treasure {
  constructor(){
    this.col = 1;
    this.row = 1;
  }
  setRandomPosition() {
    this.col = Math.ceil(Math.random() * 10)*50;
    this.row = Math.ceil(Math.random() * 10)*50;
  }
}

let treasure = new Treasure();
treasure.setRandomPosition();
player.setRandomPosition();
imgDown.onload = function() { 
  ctx.drawImage(imgDown,player.col,player.row, 50, 50);
};
drawTreasure();
drawPlayer();

function drawTreasure() {
  imgTreasure.onload = function() { 
    ctx.drawImage(imgTreasure,treasure.col,treasure.row, 50, 50);
  };
}

function reset(){
  drawGrid();
  drawPlayer();    
  drawTreasure();
}

// Iteration 5

window.onkeyup = function(e) {
  if (e.keyCode == 40) {
    player.moveDown();
    ctx.clearRect(player.col, player.row-50, 50, 50);    
    reset();
  }
  if (e.keyCode == 38) {
    player.moveUp();
    ctx.clearRect(player.col, player.row+50, 50, 50);    
    reset();
  }
  if (e.keyCode == 37) {
    player.moveLeft();
    ctx.clearRect(player.col+50, player.row, 50, 50);    
    reset();
  }
  if (e.keyCode == 39) {
    player.moveRight();
    console.log(player.col);
    ctx.clearRect(player.col-50, player.row, 50, 50);
    reset();
  }
};