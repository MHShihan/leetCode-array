const buildArray1 = (nums) => {
  let ans = [];
  for (const num of nums) {
    ans.push(nums[num]);
  }
  return ans;
};

const buildArray = (nums) => {
  return nums.map((num) => nums[num]);
};

const array = [0, 2, 1, 5, 3, 4];
const arr = [5, 0, 1, 2, 3, 4];
console.log(buildArray(array));
console.log(buildArray(arr));
