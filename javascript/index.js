import Wave from './modules/wave';
import Sea from './modules/sea';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('#sea').getContext('2d');
  const sea = new Sea(canvas)
});
