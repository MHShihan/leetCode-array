const numberGame = (nums) => {
  nums.sort((a, b) => a - b);
  const arr = [];

  for (i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      arr[i] = nums[i + 1];
    } else {
      arr[i] = nums[i - 1];
    }
  }
  return arr;
};

const numberGame1 = (nums) => {
  nums.sort((a, b) => b - a);
  console.log(nums);
  const arr = [];
  while (nums.length) {
    let alice = nums.pop();
    let bob = nums.pop();
    arr.push(bob);
    arr.push(alice);
  }
  return arr;
};

const nums = [5, 4, 2, 3];
console.log(numberGame1(nums));
