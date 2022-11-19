function solution(d = [], budget) {
  let result = 0;
  d = d.sort((a, b) => a - b);
  for (const item of d) {
    if (budget - item >= 0) {
      budget -= item;
      result++;
    } else {
      return result;
    }
  }
  return result;
}
