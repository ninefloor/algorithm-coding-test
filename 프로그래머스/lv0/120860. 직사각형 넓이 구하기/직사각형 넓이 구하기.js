function solution(dots) {
  let bench = dots[0];
  let reverse;
  for (const item of dots) {
    if(item[0] !== bench[0] && item[1] !== bench[1]) reverse = item;
  }

  let width = Math.max(bench[0], reverse[0]) - Math.min(bench[0], reverse[0])
  let height = Math.max(bench[1], reverse[1]) - Math.min(bench[1], reverse[1])
  return width * height;
}