class Character{
    constructor() {
        this.col = 0; //x axis
        this.row = 0; //y axis        
    }
    moveUp() {
        if (this.row > 0) {
            this.row--
            drawPlayer('up');
        }
    }
    moveDown() {
        if (this.row < 9) {
            this.row++
            drawPlayer('down');
        } 
    }
    moveLeft() {
        if (this.col > 0) {
            this.col--
            drawPlayer('left');
        } 
    }
    moveRight() {
        if (this.col < 9) {
            this.col++
            drawPlayer('right');
        } 
    }    
}

class Treasure {
    constructor() {
        this.col = 5
        this.row = 5
        this.setRandomPosition();
    }
    setRandomPosition() {
        this.col = Math.floor(Math.random() * Math.floor(10))
        this.row = Math.floor(Math.random() * Math.floor(10));
    }
}