export const STEP = 1;

export function calculateNext(current, step = STEP) {
  return current + step;
}

export function calculatePrev(current, step = STEP) {
  return current - step;
}
