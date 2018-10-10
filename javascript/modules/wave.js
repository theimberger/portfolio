class Wave {
  constructor ({
    sea,
    maxHeight,
    maxWidth,
    layer = 1,
  }) {
    const coordinates = {
      top: [],
      left: [],
      right: [],
    };

    coordinates.top.push(Math.floor(Math.random() * maxWidth));
    coordinates.top.push(Math.floor(Math.random() * maxHeight));
    let waveWidth =  Math.floor((maxWidth - (Math.random() * 400)) / 3);

    let waveHeight =  Math.floor(waveWidth / 5);

    coordinates.right.push(coordinates.top[0] + waveWidth);
    coordinates.right.push(coordinates.top[1] + waveHeight);

    coordinates.left.push(coordinates.top[0] - waveWidth);
    coordinates.left.push(coordinates.top[1] + waveHeight);

    sea.beginPath();
    sea.moveTo(...coordinates.top);
    sea.lineTo(...coordinates.left);
    sea.lineTo(...coordinates.right);
    sea.closePath();
    sea.fillStyle = '#607495';
    sea.fill();
    this.coordinates = coordinates;
    console.log(coordinates);
  }
  move() {

  }
}

export default Wave;
