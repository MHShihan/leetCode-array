const restoreString = (s, indices) => {
  let shuffleString = [];
  for (let i = 0; i < indices.length; i++) {
    shuffleString[indices[i]] = s[i];
  }
  return shuffleString.join("");
};

const s = "codeleet",
  indices = [4, 5, 6, 7, 0, 2, 1, 3];
console.log(restoreString(s, indices));
