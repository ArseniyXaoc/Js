const smallestDivisor = (num) => {
  let min;
  const acc = num;
  if (acc <= 0) return NaN;
  if (acc === 1) return 1;
  let counter = 2;
  while (min !== 0){
    min = acc%counter;
    if (min !== 0) counter++;
  }
  return counter;
}
// END