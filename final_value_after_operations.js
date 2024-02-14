const finalValueAfterOperations = (operations) =>
  operations.reduce((acc, value) => (value.includes("+") ? ++acc : --acc), 0);

const operations = ["--x", "x++", "x++"];
console.log(finalValueAfterOperations(operations));
