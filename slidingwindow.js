function sw(nums, size) {
  let currsum = 0;
  let maxsum = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    currsum += nums[i];

    if (i >= size - 1) {
      maxsum = Math.max(currsum, maxsum);
      currsum -= nums[i - (size - 1)];
    }
  }
  return maxsum;
}
console.log(sw([1, 2, 0, 3, 4, 1], 3));
