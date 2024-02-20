const sumIndicesWithKSetBits = (nums, k) => {
  let sum = 0;
  for (i = 0; i < nums.length; i++) {
    if (i.toString(2).split("1").length - 1 === k) {
      sum += nums[i];
    }
  }
  return sum;
};

const nums = [4, 3, 2, 1],
  k = 2;
console.log(sumIndicesWithKSetBits(nums, k));
