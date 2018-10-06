import Wave from './modules/wave';

document.addEventListener('DOMContentLoaded', () => {
  const sea = document.querySelector('#sea');
  let i = 0;
  while (i < 10) {
    new Wave(sea);
    i += 1;
  }
});
