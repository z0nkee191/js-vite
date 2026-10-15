export default function updateDisplay(element, value) {
  element.textContent = value;

  if (value > 0) {
    element.style.color = '#34d399';
  } else if (value < 0) {
    element.style.color = '#f87171';
  } else {
    element.style.color = '#f8fafc';
  }
}
