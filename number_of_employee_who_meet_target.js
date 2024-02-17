const numberOfEmployeesWhoMetTarget = (hours, target) =>
  hours.filter((hour) => hour >= target).length;

const hours = [5, 1, 4, 2, 2],
  target = 6;
console.log(numberOfEmployeesWhoMetTarget(hours, target));
