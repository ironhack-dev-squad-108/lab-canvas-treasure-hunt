class Character {
  constructor(){
    this.col = 0;
    this.row = 0;
    this.direction = "S";
  }

  moveUp() {
    this.row -= 50;
    this.direction = "N";
  }

  moveRight() {
    this.col += 50;
    this.direction = "E";
  }

  moveDown() {
    this.row += 50;
    this.direction = "S";
  }

  moveLeft(){
    this.col -= 50;
    this.direction = "W";
  }
  setRandomPosition() {
    this.col = Math.ceil(Math.random() * 10)*50;
    this.row = Math.ceil(Math.random() * 10)*50;
  }

}