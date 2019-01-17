class Character {
  constructor(x,y) {
    this.row = x;
    this.col = y;
    this.direction = '';
  }
  moveUp() {
    this.col -= 50;
  }
  moveRight() {
    this.row += 50;
  }
  moveDown() {
    this.col += 50;
  }
  moveLeft() {
    this.row -= 50;
  }
}