const runningSum1 = (nums) => {
  let sum = 0;
  let newArray = [];
  for (const num of nums) {
    newArray.push((sum += num));
  }
  return newArray;
};

const runningSum2 = (nums) => {
  nums.reduce(
    (accumulator, currentValue, index, arr) => (arr[index] += accumulator)
  );
};

const runningSum = (nums, value = 0) => nums.map((num) => (value += num));

const nums = [1, 2, 3, 4];
console.log(runningSum(nums));
