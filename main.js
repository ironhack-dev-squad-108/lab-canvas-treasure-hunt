var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height
var player = new Character(0,0);
var playerDown = new Image();
var playerUp = new Image();
var playerRight = new Image();
var playerLeft = new Image();
var treasureImg = new Image();
var grass = new Image(50,50)
playerDown.src = "starter-code/images/character-down.png";
playerUp.src = "starter-code/images/character-up.png";
playerRight.src = "starter-code/images/character-right.png";
playerLeft.src = "starter-code/images/character-left.png";
treasureImg.src = "starter-code/images/treasure.png";
grass.src = "starter-code/images/grass.jpg"
player.direction = playerDown;
var treasure = new Treasure()
treasure.setRandomPosition();
document.onkeydown = getInput;

// initial render
setTimeout(function() {
  render();
}, 100)

function drawGrid() {
  for(var i=50; i<width; i+=50) {
    // set color
    ctx.strokeStyle = "white";
    // vertical
    ctx.beginPath();
    ctx.moveTo(i,0);
    ctx.lineTo(i,height);
    ctx.closePath();
    ctx.stroke();
    // horizontal
    ctx.beginPath();
    ctx.moveTo(0,i);
    ctx.lineTo(width,i);
    ctx.closePath();
    ctx.stroke();
  }
}

function drawPlayer() {
  ctx.drawImage(player.direction,player.row,player.col,50,50)
}

function drawTreasure() {
  ctx.drawImage(treasureImg,treasure.row,treasure.col,50,50)
}

function getInput(e) {
  switch(e.keyCode) {
    case 37: 
      player.moveLeft();
      player.direction = playerLeft;
      render();
      break;
    case 38: 
      player.moveUp();
      player.direction = playerUp;
      render();
      break;
    case 39: 
      player.moveRight();
      player.direction = playerRight;
      render();
      break;
    case 40: 
      player.moveDown();
      player.direction = playerDown;
      render();
      break;
  }
}

function winGame() {
  return ((player.col === treasure.col) && (player.row === treasure.row))
}

function render() {
  if(winGame()) {
    ctx.clearRect(0,0,width,height);
    ctx.font = '30px sans-seif'
    ctx.fillStyle = "black"
    ctx.fillText("You have found the treasure!", 80, 150)
  } else {
    ctx.clearRect(0,0,width,height);
    var pattern = ctx.createPattern(grass,'repeat');
    ctx.fillStyle = pattern;
    ctx.fillRect(0,0,width,height);
    drawGrid()
    drawPlayer();
    drawTreasure();
  }
}

