var findPairs = function (nums, k) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
  }
  let count = 0;
  for (let num in obj) {
    if (k != 0) {
      let b = parseInt(num) + k;
      if (b in obj) count++;
    } else {
      if (obj[num] >= 2) count++;
    }
  }
  return count;
};

console.log(findPairs([1, 3, 1, 5, 4], 0));
