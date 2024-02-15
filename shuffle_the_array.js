const shuffle = (nums, n) => {
  let shuffleArray = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + n; j < i + n + 1; j++) {
      console.log(j);
      shuffleArray.push(nums[i], nums[j]);
    }
  }
  return shuffleArray;
};

const shuffle1 = (nums, n) => {
  let shuffledArray = [];
  for (let i = 0; i < n; i++) {
    shuffledArray.push(nums[i], nums[n + i]);
  }
  return shuffledArray;
};

const array = [2, 5, 1, 3, 4, 7];
const n = Math.floor(array.length / 2);
console.log(shuffle1(array, n));
