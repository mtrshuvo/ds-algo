function split_and_add(params, split_val) {
  const len = params.length;

  swap(params, 0, len-1);
  swap(params, 0, len-split_val-1);
  swap(params, len-split_val, len-1);

  return params;
}
function swap(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}
const arr = [1,2,4,0,8,62,0,67,0];
console.log(split_and_add(arr, 2));
