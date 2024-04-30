function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




function createBoxes(amount){
  const boxes = document.getElementById("boxes");
  boxes.innerHTML = '';

  let size = 30;
  for(let i =0; i < amount; i++){
    const box = document.createElement("div");

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(box);

    size += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxes.innerHTML = ''; 
}


document.addEventListener("DOMContentLoaded", () => {
  const createBtn = document.querySelector("[data-create]");
  const destroyBtn = document.querySelector("[data-destroy]");
  const input = document.querySelector("input")

  createBtn.addEventListener('click', () => {
    const amount = parseInt(input.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = ''; // Clear input value
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });

  destroyBtn.addEventListener('click', destroyBoxes);
})