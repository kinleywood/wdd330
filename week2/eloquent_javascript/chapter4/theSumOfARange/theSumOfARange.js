function sum(array) {
  let total = 0
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
function range(a, b, step=1) {
  const rangeArray = [];
  if (step > 0) {
    while (a <= b) {
      rangeArray.push(a);
        a += step;
      }
  } else {
    while (a >= b) {
      rangeArray.push(a);
      a += step;
    }
  }
  return rangeArray;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
console.log(range(-4, 20, 2));