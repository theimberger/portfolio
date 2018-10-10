import Wave from './wave';

class Sea {
  constructor (canvas) {
    const maxHeight = Math.ceil(window.innerHeight * 0.75);
    const maxWidth = Math.ceil(window.innerWidth);
    canvas.width = maxWidth;
    canvas.height = maxHeight;
    const seaContext = canvas.getContext('2d');

    this.width = maxWidth;
    this.height = maxHeight;
    this.seaElement = canvas;
    seaContext.fillStyle = '#768AA8';
    seaContext.fillRect(0, 0, maxWidth, maxHeight);

    this.waves = [];

    let i = 0;
    while (i < 10) {
      this.waves.push(new Wave({
        maxWidth,
        maxHeight,
        sea: seaContext,
      }));
      i += 1;
    }

  }

}

export default Sea;
