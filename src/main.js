import updateDisplay from './ui.js';
import { calculateNext, calculatePrev, STEP } from './state.js';

let count = 0;

const counterEl = document.getElementById('counter-value');
const btnIncrement = document.getElementById('btn-increment');
const btnDecrement = document.getElementById('btn-decrement');
const btnReset = document.getElementById('btn-reset');

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

updateDisplay(counterEl, count);
