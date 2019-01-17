class Character {
  constructor(col,row){
    this.col = col;
    this.row = row;
  }

  moveUp() {
    if (this.row == 0) {
      return 'end of grid'
    }
    else {this.row--}
  }

  moveDown() {
    if (this.row ==9) {
      return 'end of grid'
    }
    else {this.row++}
  }

  moveRight() {
    if (this.col == 9) {
      return 'end of grid'
    }
    else {this.col++}
  }

  moveLeft() {
    if (this.col == 0) {
      return 'end of grid'
    }
    else {this.col--}
  }
}

class Treasure {
  constructor() {
    this.col = 0;
    this.row = 0;
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10)
    this.row = Math.floor(Math.random() * 10)
  }
}

