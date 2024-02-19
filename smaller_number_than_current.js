const smallerNumbersThanCurrent = (nums) => {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    newArray.push(count);
  }
  return newArray;
};

const nums = [8, 1, 2, 2, 3];
console.log(smallerNumbersThanCurrent(nums));
