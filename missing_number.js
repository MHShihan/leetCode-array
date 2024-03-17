const missingNumber1 = (nums) => {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (nums[n - 1] !== n) {
      return n;
    }
    if (nums[i] !== i) {
      return i;
    }
  }
};

const missingNumber = (nums) => {
  const n = nums.length;
  const v = new Array(n + 1).fill(false);
  for (const num of nums) {
    v[num] = true;
  }
  for (i = 0; i < v.length; i++) {
    if (!v[i]) return i;
  }
};

const nums = [0, 1];
console.log(missingNumber(nums));
