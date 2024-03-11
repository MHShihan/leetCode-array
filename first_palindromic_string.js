const firstPalindrome = (words) => {
  const reverseWords = words.map((word) => word.split("").reverse().join(""));

  const firstWord = reverseWords.find(
    (reverseWord) => reverseWord === words.find((word) => word === reverseWord)
  );
  return firstWord || "";
};
const words = ["abc", "car", "", "", "", "cool"];
console.log(firstPalindrome(words));
