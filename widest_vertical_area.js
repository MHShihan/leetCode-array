const maxWidthOfVerticalArea = (points) => {
  points.sort((a, b) => a[0] - b[0]);
  let widestWidth = 0;
  for (let i = 1; i < points.length; i++) {
    widestWidth = Math.max(widestWidth, points[i][0] - points[i - 1][0]);
  }
  return widestWidth;
};

const points = [
  [8, 7],
  [9, 9],
  [7, 4],
  [9, 7],
];

console.log(maxWidthOfVerticalArea(points));
