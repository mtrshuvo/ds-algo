function ins(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let j = i + 1;
    while (j >= 0 && array[j] < array[j - 1]) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
      j--;
    }
  }
  return array;
}
console.log(ins([3, 2, 0, 5]));
