class Character{
    constructor(col, row){
        this.col = col;
        this.row = row;
        this.points = 0;
    }
    moveUp(){
        if(this.row > 0) this.row--
        else alert("You are already on the top of the grid!")
    }
    moveDown(){
        if(this.row < 9) this.row++
        else alert("You are already at the bottom of the grid!")
    }
    moveRight(){
        if(this.col < 9) this.col++
        else alert("You are already at the edge of the grid!")
    }
    moveLeft(){
        if(this.col > 0) this.col--
        else alert("You are already at the edge of the grid!")
    }
}