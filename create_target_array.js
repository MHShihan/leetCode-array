const createTargetArray = (nums, index) => {
  let targetedArray = [];
  for (let i = 0; i < index.length; i++) {
    targetedArray[index[i]] = nums[i];
  }
  return targetedArray;
};

const nums = [0, 1, 2, 3, 4],
  index = [0, 1, 2, 2, 1];
console.log(createTargetArray(nums, index));
