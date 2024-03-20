const reverseWords = (s) => {
  let sentence = s.split(" ");

  for (let i = 0; i < sentence.length; i++) {
    let reverseWord = sentence[i].split("").reverse().join("");
    sentence[i] = reverseWord;
  }

  return sentence.join(" ");
};

const s = "Let's take LeetCode contest";
console.log(reverseWords(s));
