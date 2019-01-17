var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

// Iteration 1
function drawGrid() {
  for(var i = 1; i < 10; i++){
    ctx.beginPath();
    ctx.moveTo(0, 50*i);
    ctx.lineTo(500,50*i);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(50*i, 0);
    ctx.lineTo(50*i,500);
    ctx.closePath();
    ctx.stroke();
  }
}
// Iteration 2
var player = new Character(0,0) // (0,0) = Initial position

// Iteration 3
var imgPlayer = new Image();
imgPlayer.src = "images/character-down.png";
function drawPlayer() {
  imgPlayer.onload = function(){
    ctx.drawImage(imgPlayer, 50*player.col, 50*player.row, 50, 50)
  }
}

// Iteration 4
var treasure = new Treasure;
treasure.setRandomPosition();

function drawTreasure() {
  var imgTreasure = new Image();
  imgTreasure.src = "images/treasure.png"
  imgTreasure.onload = function(){
    ctx.drawImage(imgTreasure, 50*treasure.col, 50*treasure.row, 50, 50)
  }
}

function checkIfFoundTreasure(){
  if(player.col === treasure.col && player.row === treasure.row) return true;
  else return false;
}

drawGrid();
drawPlayer();
drawTreasure();

document.onkeydown = function(event) {
  ctx.clearRect(0,0,width,height);
  drawGrid();
  switch (event.keyCode) {
    case 37: 
      player.moveLeft(); 
      imgPlayer.src = "images/character-left.png";
      break;
    case 38: 
      player.moveUp(); 
      imgPlayer.src = "images/character-up.png";
      break;
    case 39: 
      player.moveRight(); 
      imgPlayer.src = "images/character-right.png"
      break;
    case 40: 
      player.moveDown(); 
      imgPlayer.src = "images/character-down.png"
      break;
  }
  if(checkIfFoundTreasure()){
    treasure.setRandomPosition();
    player.points ++;
    if(player.points === 10) {
      alert("Congratulations! You win!");
      player.row = 0; 
      player.col = 0;
      treasure.setRandomPosition();
    }
  };
  drawPlayer();
  drawTreasure();
  document.querySelector(".points").innerHTML = player.points;
}