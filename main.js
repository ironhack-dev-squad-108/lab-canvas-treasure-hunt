var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

var player = new Character(0,0)
var treasure = new Treasure
treasure.setRandomPosition()

// Iteration 1
function drawGrid() {
  for (var i = 0; i < width; i+=width/10) {
    ctx.beginPath()
    ctx.moveTo(i,0,)
    ctx.lineTo(i,500)
    ctx.stroke()
  }
  for (var i = 0; i < height; i+=width/10) {
    ctx.beginPath()
    ctx.moveTo(0,i)
    ctx.lineTo(500,i)
    ctx.stroke()
  }
}
function drawPlayer(direction) {
  var img = new Image()
  switch (direction) {
    case 'l':
      img.src = 'starter-code/images/character-left.png'
      img.onload = function () {
        ctx.drawImage(img, player.col * 50, player.row * 50, 50, 50)
      }; break;

    case 'r':
      img.src = 'starter-code/images/character-right.png'
      img.onload = function () {
        ctx.drawImage(img, player.col * 50, player.row * 50, 50, 50)
      }; break;

    case 'u':
      img.src = 'starter-code/images/character-up.png'
      img.onload = function () {
        ctx.drawImage(img, player.col * 50, player.row * 50, 50, 50)
      }; break;

    case 'd':
      img.src = 'starter-code/images/character-down.png'
      img.onload = function () {
        ctx.drawImage(img, player.col * 50, player.row * 50, 50, 50)
      }; break;


  }
}


function drawTreasure() {
  var img = new Image()
  img.src = "starter-code/images/treasure.png"
  img.onload = function() {
    ctx.drawImage(img,treasure.col*50,treasure.row*50,50,50)
  }

}


drawGrid()
drawPlayer()

function keyUp() {
  ctx.clearRect(0,0,500,500)
  drawGrid()
  player.moveUp()
  drawPlayer()
  checkTreasure()
}

function keyDown() {
  ctx.clearRect(0,0,500,500)
  drawGrid()
  player.moveDown()
  drawPlayer()
  checkTreasure()
}

function keyRight() {
  ctx.clearRect(0,0,500,500)
  drawGrid()
  player.moveRight()
  drawPlayer()
  checkTreasure()
}

function keyLeft() {
  ctx.clearRect(0,0,500,500)
  drawGrid()
  player.moveLeft()
  drawPlayer()
  checkTreasure()
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37: keyLeft(); break;
    case 38: keyUp(); break;
    case 39: keyRight(); break;
    case 40: keyDown(); break;
  }
}

function checkTreasure() {
  if(player.col === treasure.col && player.row === treasure.row) {
    drawTreasure()
    console.log("YOU FOUND THE TREASURE! YAY!")
  }
}
