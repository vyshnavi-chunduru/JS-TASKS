const counter = document.getElementById("counter");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");
const incrementButton = document.getElementById("increment");
let count = 0;

decrementButton.addEventListener("click", () => {
  count--;
  updateCounter();
});

resetButton.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

incrementButton.addEventListener("click", () => {
  count++;
  updateCounter();
});

function updateCounter() {
  counter.textContent = count;
}
