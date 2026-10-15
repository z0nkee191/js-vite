// 1. Імпорт за замовчуванням (Default import)
import updateDisplay from './ui.js';

// 2. Іменовані імпорти (Named imports)
import { calculateNext, calculatePrev, STEP } from './state.js';

let count = 0;

// Отримуємо посилання на DOM-елементи
const counterEl = document.getElementById('counter-value');
const btnIncrement = document.getElementById('btn-increment');
const btnDecrement = document.getElementById('btn-decrement');
const btnReset = document.getElementById('btn-reset');

// Обробники кліків
btnIncrement.addEventListener('click', () => {
  count = calculateNext(count, STEP);
  updateDisplay(counterEl, count);
});

btnDecrement.addEventListener('click', () => {
  count = calculatePrev(count, STEP);
  updateDisplay(counterEl, count);
});

btnReset.addEventListener('click', () => {
  count = 0;
  updateDisplay(counterEl, count);
});

// Первинний рендер
updateDisplay(counterEl, count);
