function solution(arr) {
  let result = 0;
  for (const item of arr) {
    result += item;
  }
  return result / arr.length
}