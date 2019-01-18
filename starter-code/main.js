let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

let imgDown = new Image();
  imgDown.src = "./images/character-down.png";
let imgUp = new Image();
  imgUp.src = "./images/character-up.png";
let imgLeft = new Image();
  imgLeft.src = "./images/character-left.png";
let imgRight = new Image();
  imgRight.src = "./images/character-right.png";
let imgTreasure = new Image();
  imgTreasure.src = "./images/treasure.png";

let player = new Character();
let treasure = new Treasure();

drawGrid();
treasure.setRandomPosition();
player.setRandomPosition();
imgDown.onload = function() { 
  ctx.drawImage(imgDown,player.col,player.row, 50, 50);
};
drawTreasure();
drawPlayer();

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

function drawPlayer() {
    switch (player.direction) {
      case "N": ctx.drawImage(imgUp,player.col,player.row, 50, 50); break;
      case "E": ctx.drawImage(imgRight,player.col,player.row, 50, 50); break;
      case "S": ctx.drawImage(imgDown,player.col,player.row, 50, 50); break;
      case "W": ctx.drawImage(imgLeft,player.col,player.row, 50, 50); break;
    }
}

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


