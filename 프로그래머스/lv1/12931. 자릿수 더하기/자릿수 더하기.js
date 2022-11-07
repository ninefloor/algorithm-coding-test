function solution(n) {
  let result = 0;
  for (const item of String(n)) {
    result += Number(item);
  }
  return result
}