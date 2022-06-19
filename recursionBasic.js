//print number from 1 to n number

function printNumber(start, end) {
  if (start > end) {
    return;
  }

  console.log(start);
  printNumber(start + 1, end);
}
// printNumber(1, 5);
function fibo(n) {
  if (n < 2) return n;
  let first = 0;
  let second = 1;
  let temp = n - 2;
  let result;
  while (temp > 0) {
    result = first + second;
    first = second;
    second = result;
    temp--;
  }
  return result;
}
// console.log(fibo(7));

function fiboWithRecursion(n) {
  if (n < 2) return n;

  return fiboWithRecursion(n - 1) + fiboWithRecursion(n - 2);
}

console.log(fiboWithRecursion(7));
