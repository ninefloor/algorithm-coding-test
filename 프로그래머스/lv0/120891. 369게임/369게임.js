function solution(order) {
  let str = String(order);
  let result = 0;
  const tsn = ['3', '6', '9']
  for (const item of str) {
    if (tsn.includes(item)) result++;
  }
  return result;
}