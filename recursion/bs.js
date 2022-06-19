function bs(arr, target, start, end) {
  if (start > end) return -1;
  let mid = parseInt(start + (end - start) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) return bs(arr, target, start, mid - 1);
  return bs(arr, target, mid + 1, end);
}

let numbers = [1, 2, 3, 4, 5, 6];
let start = 0;
let end = numbers.length - 1;
const target = 4;
console.log(bs(numbers, target, start, end));
