// Іменований експорт константи
export const STEP = 1;

// Іменовані експорти функцій для обчислення стану
export function calculateNext(current, step = STEP) {
  return current + step;
}

export function calculatePrev(current, step = STEP) {
  return current - step;
}
