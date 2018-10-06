class Wave {
  constructor (sea, layer = 1) {
    const initialXPosition = Math.floor(Math.random() * 100);
    const initialYPosition = Math.floor(Math.random() * 75);

    const waveElement = document.createElement('div');

    waveElement.classList.add('wave');
    waveElement.style.top = `${initialYPosition}vh`;
    waveElement.style.left = `${initialXPosition}vw`;
    waveElement.style.borderBottom = '3vw solid #607495';
    waveElement.style.borderLeft = '25vw solid transparent';
    waveElement.style.borderRight = '25vw solid transparent';

    sea.appendChild(waveElement);
  }
  move() {

  }
}

export default Wave;
