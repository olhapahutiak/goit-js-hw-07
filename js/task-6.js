const input = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', createMarkup);
buttonDestroy.addEventListener('click', () => {
  boxes.innerHTML = '';
});

function createMarkup() {
  const amount = input.value;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  input.value = '';
}

function createBoxes(amount) {
  boxes.innerHTML = '';
  const boxesItems = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesItems.push(div);

    size += 10;
  }
  boxes.append(...boxesItems);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}