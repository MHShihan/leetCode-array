const firstPalindrome1 = (words) => {
  for (const word of words) {
    if (word === word.split("").reverse().join("")) {
      return word;
    }
  }
  return "";
};

const firstPalindrome = (words) => {
  for (const word of words) {
    let left = 0;
    let right = word.length - 1;
    while (word[left] === word[right]) {
      if (left >= right) return word;
      left++;
      right--;
    }
  }
  return "";
};

const words = ["abc", "car", "ada", "", "", "cool"];
console.log(firstPalindrome(words));
