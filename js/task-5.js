const color = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', handleClick);

function handleClick() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}