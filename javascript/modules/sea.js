import Wave from './wave';

class Sea {
  constructor (canvas) {
    const maxHeight = Math.ceil(window.innerHeight * 0.7);
    const maxWidth = Math.ceil(window.innerWidth);
    canvas.width = maxWidth;
    canvas.height = maxHeight;
    const seaContext = canvas.getContext('2d');

    this.width = maxWidth;
    this.height = maxHeight;
    this.seaElement = canvas;
    this.context = seaContext;
    this.waves = [];

    while (this.waves.length < 500) {
      this.waves.push(new Wave({
        sea: seaContext,
        initial: true,
      }));
    }
    setInterval(() => this.moveWaves(), 25);
  }
  moveWaves() {
    const {
      context,
      waves,
    } = this;

    context.clearRect(0, 0, 2000, 2000);
    waves.forEach((wave, idx) => {
      const deleteWave = wave.move();
      if (deleteWave) waves[idx] = false;
    });

    
    const newWaves = waves.filter(wave => wave);

    while (newWaves.length < 500) {
      newWaves.push(new Wave({ sea: context, initial: true }));
    }

    this.waves = newWaves;
  }
}

export default Sea;
