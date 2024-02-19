const mostWordsFound = (sentences) => {
  let maximumWord = sentences[0].split(" ").length;
  for (let i = 0; i < sentences.length; i++) {
    let word = sentences[i].split(" ").length;
    if (word > maximumWord) {
      maximumWord = word;
    }
  }
  return maximumWord;
};

const sentences = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];

console.log(mostWordsFound(sentences));
