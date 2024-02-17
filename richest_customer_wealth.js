const maximumWealth = (accounts) => {
  let maxWealth = 0;
  for (const account of accounts) {
    maxWealth = Math.max(
      maxWealth,
      account.reduce((acc, value) => acc + value, 0)
    );
  }
  return maxWealth;
};

const maximumWealth1 = (accounts) =>
  Math.max(...accounts.map((element) => element.reduce((a, c) => a + c, 0)));

const accounts = [
  [1, 5],
  [7, 3],
  [3, 5],
];

console.log(maximumWealth1(accounts));
