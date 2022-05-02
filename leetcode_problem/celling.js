// 744. Find Smallest Letter Greater Than Target
function cellings(array, target) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let mid = start + parseInt((end - start) / 2);
    if (array[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return array[start % array.length];
}
console.log(cellings(["c", "f", "j"], "f"));
