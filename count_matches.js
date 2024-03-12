const countMatches = (items, ruleKey, ruleValue) => {
  const matchedCounter = (totalItem, i) => {
    let count = 0;
    for (const item of totalItem) {
      if (item[i] === ruleValue) {
        count++;
      }
    }
    return count;
  };

  if (ruleKey.toLowerCase() === "type") {
    return matchedCounter(items, 0);
  }
  if (ruleKey.toLowerCase() === "color") {
    return matchedCounter(items, 1);
  }
  if (ruleKey.toLowerCase() === "name") {
    return matchedCounter(items, 2);
  }
};

const items = [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"],
  ],
  ruleKey = "color",
  ruleValue = "silver";
console.log(countMatches(items, ruleKey, ruleValue));

// const allItems = (items)=> {
//     for(const item of items){

//     }
// }
