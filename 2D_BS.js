function search(array, target) {
  let col = array.length - 1;
  let row = 0;
  while (row < array.length && col >= 0) {
    if (target === array[row][col]) {
      return [row, col];
    }
    if (target > array[row][col]) {
      row++;
    } else {
      col--;
    }
  }
  return [-1, -1]; //not found
}

console.log(
  search(
    [
      [1, 2],
      [3, 4],
    ],
    4
  )
);
