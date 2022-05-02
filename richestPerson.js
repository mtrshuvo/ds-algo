//1672. Richest Customer Wealth(leetcode)

var maximumWealth = function (accounts) {
  let maxVal = -0;
  for (let i = 0; i < accounts.length; i++) {
    let personCount = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      personCount += accounts[i][j];
    }
    if (personCount > maxVal) {
      maxVal = personCount;
    }
  }
  return maxVal;
};
console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
