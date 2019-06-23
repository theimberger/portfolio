class Wave {
  constructor ({
    sea,
    layer = 0,
    index,
  }) {
    const coordinates = {
      top: [],
      left: [],
      right: [],
    };

    const colors = ['#5a6d8c', '#63799c', '#7386a5',];
    const maxWidth = sea.canvas.width;
    const maxHeight = sea.canvas.height;

    coordinates.top.push(Math.floor(
      (Math.random() * maxWidth) - (Math.random() * 100)
    ));

    this.life = 100 + Math.floor(Math.random() * 100)
    this.age = 0

    coordinates.top.push(
      Math.floor(Math.random() * (maxHeight - 100))
    );

    let waveWidth = Math.floor((maxWidth - (Math.random() * this.life * 2)) / 1.2);
    this.width = waveWidth;

    waveWidth = Math.floor(
      waveWidth * (coordinates.top[1] / (maxHeight + 100))
    );


    coordinates.right.push(coordinates.top[0] + waveWidth);
    coordinates.right.push(coordinates.top[1]);

    coordinates.left.push(coordinates.top[0] - waveWidth);
    coordinates.left.push(coordinates.top[1]);

    this.color = colors[Math.floor(Math.random() * 4)];
    
    sea.beginPath();
    sea.moveTo(...coordinates.top);
    sea.lineTo(...coordinates.left);
    sea.lineTo(...coordinates.right);
    sea.closePath();
    sea.fillStyle = this.color
    sea.fill();
    this.coordinates = coordinates;
    this.index = index;
    this.sea = sea;

    // const period = Math.floor(2.5 + Math.floor(Math.random() * 2.5)) * 200;
    // const deterioration = Math.floor(5 + Math.floor(Math.random() * 5)) * 200;
  }

  move() {
    const {
      coordinates,
      sea,
      width,
      age,
      life,
      color,
    } = this;

    const factor = coordinates.top[1] / (sea.canvas.height + 100)

    coordinates.top[1] += factor;
    coordinates.left[1] += factor;
    coordinates.right[1] += factor;

    let waveWidth = Math.floor(
      width * factor
    );

    let waveHeight = (-(((age / 4 - life) ** 2) / life) + life) * factor;

    this.age = age + 1

    coordinates.right[0] = coordinates.top[0] + waveWidth;
    coordinates.right[1] = coordinates.top[1] + waveHeight;

    coordinates.left[0] = coordinates.top[0] - waveWidth;
    coordinates.left[1] = coordinates.top[1] + waveHeight;


    sea.beginPath();
    sea.moveTo(...coordinates.top);
    sea.lineTo(...coordinates.left);
    sea.lineTo(...coordinates.right);
    sea.closePath();
    sea.fillStyle = color;
    sea.fill();

    return coordinates.top[1] > sea.canvas.height || waveHeight < 0;
  }

  drop() {

  }

  delete() {

  }
}

export default Wave;
