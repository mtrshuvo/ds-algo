function min(array, n) {
  if (n == 1) {
    return array[0];
  }

  return Math.min(array[n - 1], min(array, n - 1));
}

function max(array, n) {
  if (n == 1) {
    return array[0];
  }

  return Math.max(array[n - 1], max(array, n - 1));
}

let arr = [2, 5, 8, 5, 1];
let len = arr.length;

console.log(min(arr, len));
console.log(max(arr, len));
