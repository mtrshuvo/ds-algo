//leetcode: 1295. Find Numbers with Even Number of Digits

var findNumbers = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (digitCount(nums[i]) % 2 === 0) {
      count++;
    }
  }
  return count;
};

var digitCount = (num) => {
  return parseInt(Math.log10(num)) + 1;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
