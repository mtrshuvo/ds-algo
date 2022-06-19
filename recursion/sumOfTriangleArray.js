function sota(array, n) {
  if (n < 1) return;
  let newArray = new Array(n - 1);
  for (let i = 0; i < n - 1; i++) newArray[i] = array[i] + array[i + 1];
  sota(newArray, n - 1);
  console.log(array);
}

sota([1, 2, 3, 4, 5], 5);
