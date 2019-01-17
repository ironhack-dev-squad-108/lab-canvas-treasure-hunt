var characterup = new Image();   
characterup.src = 'images/character-up.png'; 
var characterdown = new Image();   
characterdown.src = 'images/character-down.png'; 
var characterleft = new Image();   
characterleft.src = 'images/character-left.png'; 
var characterright = new Image();   
characterright.src = 'images/character-right.png'; 
var treasure = new Image();   
treasure.src = 'images/treasure.png';

var character = new Character;    
var treasureObj = new Treasure;

treasureObj.setRandomPosition();
document.addEventListener('keydown', function(event) {
    console.log('keydown')
    if (event.keyCode === 38) { //up
        character.moveUp()
    }    
    else if (event.keyCode === 40) { //down
        character.moveDown()
    }    
    else if (event.keyCode === 37) { //left
        character.moveLeft()
    }    
    else if (event.keyCode === 39) { //right
        character.moveRight()
    }    
})

generateGrid(document.querySelector('canvas'))

characterup.onload = () => {
    drawPlayer();
}         
function drawPlayer(direction) {
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    generateGrid(canvas);
    genTreasure(canvas);
    var x = character.col * 50;
    var y = character.row * 50;
    if (canvas.dataset.status === 'launch') {
        canvas.dataset.status = 'launched';
        ctx.drawImage(characterup,x,y, 50,50)                       
    }
    if (direction) {
        switch(direction) {
        case 'up':
            ctx.drawImage(characterup,x,y, 50,50)
            break;
        case 'down':
            ctx.drawImage(characterdown,x,y, 50,50)
            break;    
        case 'left':
            ctx.drawImage(characterleft,x,y, 50,50)
            break;    
        case 'right':
            ctx.drawImage(characterright,x,y, 50,50)
        }    
    }
    if(character.col * 50 === treasureObj.col * 50 && character.row * 50 === treasureObj.row * 50) {
        alert('You win hero!')
    }
}

function generateGrid(canvas) { 
    var ctx = canvas.getContext('2d') 
    ctx.clearRect(0,0,500,500);
    for(var x = 0;x < 500;x += 50) { 
        ctx.moveTo(x,0);
        ctx.lineTo(x,500);
    };
    
    for(var y = 0; y < 500; y += 50) { 
        ctx.moveTo(0,y);
        ctx.lineTo(500,y);
    };
    ctx.strokeStyle = 'black';  
    ctx.stroke();   
}    

function genTreasure(canvas) {
    var ctx = canvas.getContext('2d');
    ctx.drawImage(treasure, treasureObj.col * 50,treasureObj.row * 50, 50, 50)
}