function createBoxes(amount){
  const boxes = document.getElementById("boxes");
  boxes.innerHTML = '';

  const fragment = document.createDocumentFragment(); 

  let size = 30;
  for(let i = 0; i < amount; i++){
    const box = document.createElement("div");

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    fragment.appendChild(box); 

    size += 10;
  }

  boxes.appendChild(fragment); 
}

function destroyBoxes() {
  const boxes = document.getElementById("boxes");
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
      input.value = ''; // Очищаємо значення поля вводу
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });

  destroyBtn.addEventListener('click', destroyBoxes);
})
