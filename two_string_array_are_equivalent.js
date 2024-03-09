const arrayStringsAreEqual1 = (word1, word2) => {
  const sum1 = word1.reduce((acc, cv) => acc + cv);
  const sum2 = word2.reduce((acc, cv) => acc + cv);
  return sum1 === sum2;
};

const arrayStringsAreEqual = (word1, word2) => {
  const sum1 = word1.join("");
  const sum2 = word2.join("");
  return sum1 === sum2;
};

const word1 = ["abc", "d", "defg"],
  word2 = ["abcddefgh"];

console.log(arrayStringsAreEqual1(word1, word2));
