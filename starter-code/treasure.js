class Treasure {
  constructor(){
    this.col = 1;
    this.row = 1;
  }
  setRandomPosition() {
    this.col = Math.ceil(Math.random() * 10)*50;
    this.row = Math.ceil(Math.random() * 10)*50;
  }
}