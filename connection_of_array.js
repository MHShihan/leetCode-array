const getConcatenation1 = (nums) => {
  let ans = [];
  for (element of nums) {
    ans.push(element);
  }
  for (element of nums) {
    ans.push(element);
  }
  return ans;
};

const getConcatenation2 = (nums) => {
  return [...nums, ...nums];
};
const array = [1, 2, 3, 4, 5];
// console.log(getConcatenation1(array));
console.log(getConcatenation2(array));
