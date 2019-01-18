var body = document.querySelector('body')
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var height = canvas.height
var width = canvas.width

var player = new Character(0, 0)
var counter = 0
var treasure = new Treasure
treasure.setRandomPositon()

drawGrid()

drawPlayer('d')

function drawTreasure() {
  var img = new Image()
  img.src = 'images/treasure.png'
  img.onload = function () {
    // Draw the image when picture is loaded
    ctx.drawImage(img, treasure.col * 50, treasure.row * 50, 50, 50)
  }
}

function drawGrid() {
  for (var i = 0; i < canvas.width; i += canvas.width / 10) {
    ctx.beginPath()
    ctx.moveTo(i, 0)
    ctx.lineTo(i, 500)
    ctx.stroke()
  }

  for (var i = 0; i < canvas.height; i += canvas.height / 10) {
    ctx.beginPath()
    ctx.moveTo(0, i)
    ctx.lineTo(500, i)
    ctx.stroke()
  }

}

function drawPlayer(direction) {
  var img = new Image()
  switch (direction) {
    case 'l':
      img.src = 'images/character-left.png'
      img.onload = function () {
        ctx.drawImage(img, player.col * 50, player.row * 50, 50, 50)
      }; break;

    case 'r':
      img.src = 'images/character-right.png'
      img.onload = function () {
        ctx.drawImage(img, player.col * 50, player.row * 50, 50, 50)
      }; break;

    case 'u':
      img.src = 'images/character-up.png'
      img.onload = function () {
        ctx.drawImage(img, player.col * 50, player.row * 50, 50, 50)
      }; break;

    case 'd':
      img.src = 'images/character-down.png'
      img.onload = function () {
        ctx.drawImage(img, player.col * 50, player.row * 50, 50, 50)
      }; break;


  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function checkTreasure() {
  var h1 = document.querySelector('h1')

  body.style.backgroundColor = getRandomColor()

  if (player.col == treasure.col && player.row == treasure.row) {
    drawTreasure()
    if (counter > 40)
      h1.innerHTML = counter + ' steps taken to find the treasure? You are so bad man!'
    else
      h1.innerHTML = counter + ' steps to find the treasure? You are a MASTER tresure hunter!!! '

    body.style.backgroundColor = 'white'

  }

}

function keyDown() {
  ctx.clearRect(0, 0, 500, 500)
  drawGrid()
  player.moveDown()
  console.log(player)
  drawPlayer('d')
  checkTreasure()
  counter++
  body.style.backgroundColor = getRandomColor()

}

function keyUp() {
  ctx.clearRect(0, 0, 500, 500)
  drawGrid()
  player.moveUp()
  console.log(player)
  drawPlayer('u')
  checkTreasure()
  counter++
  body.style.backgroundColor = getRandomColor()

}

function keyLeft() {
  ctx.clearRect(0, 0, 500, 500)
  drawGrid()
  player.moveLeft()
  console.log(player)
  drawPlayer('l')
  checkTreasure()
  counter++
  body.style.backgroundColor = getRandomColor()

}

function keyRight() {
  ctx.clearRect(0, 0, 500, 500)
  drawGrid()
  player.moveRight()
  console.log(player)
  drawPlayer('r')
  checkTreasure()
  counter++
  body.style.backgroundColor = getRandomColor()

}

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37: keyLeft(); break;
    case 38: keyUp(); break;
    case 39: keyRight(); break;
    case 40: keyDown(); break;

  }
}
