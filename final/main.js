const counterEl = document.querySelector(".counter");

function increment() {
  counterEl.textContent++;
}

function decrement() {
  counterEl.textContent--;
}

function reset() {
  counterEl.textContent = 0;
}