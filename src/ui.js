// Експорт за замовчуванням (Default Export)
export default function updateDisplay(element, value) {
  element.textContent = value;

  // Динамічна зміна кольору тексту залежно від значення лічильника
  if (value > 0) {
    element.style.color = '#34d399'; // Зелений для додатних чисел
  } else if (value < 0) {
    element.style.color = '#f87171'; // Червоний для від'ємних чисел
  } else {
    element.style.color = '#f8fafc'; // Стандартний колір для 0
  }
}
