export const fixMargins = () => {
  const sea = document.querySelector('#sea');
  const windowHeight = document.body.offsetHeight;
  sea.style.marginTop = `${
    (windowHeight * .09 * (10/7))
  }px`;
};
