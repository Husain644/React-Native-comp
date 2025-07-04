export function dist(
    x0, y0,x1, y1, x2, y2) {
  // Step 1: Calculate A, B, C from the line points
  const A = y1 - y2;
  const B = x2 - x1;
  const C = x1 * y2 - x2 * y1;
  // Step 2: Apply distance formula
  const numerator = Math.abs(A * x0 + B * y0 + C);
  const denominator = Math.sqrt(A * A + B * B);
  return Math.ceil(numerator*100 / denominator)/100
}

