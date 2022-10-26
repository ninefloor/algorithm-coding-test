function solution(array) {
  let maxNum = 0;
  for (const item of array) {
    if (maxNum < item) maxNum = item;
  }
  return [maxNum, array.indexOf(maxNum)];
}
