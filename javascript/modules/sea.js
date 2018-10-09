class Sea {
  constructor (canvas) {
    this.width = Math.ceil(window.innerWidth);
    this.height = Math.ceil(window.innerHeight);
    canvas.fillStyle = '#768AA8';
    canvas.fillRect(0, 0, this.width, window.innerHeight);
  }
  move() {

  }
}

export default Sea;
