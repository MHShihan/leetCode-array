const kidsWithCandies = (candies, extraCandies) => {
  const greatestCandy = Math.max(...candies);
  const result = candies.map((candy) => candy + extraCandies >= greatestCandy);
  return result;
};

const candies = [12, 1, 12],
  extraCandies = 10;
console.log(kidsWithCandies(candies, extraCandies));
