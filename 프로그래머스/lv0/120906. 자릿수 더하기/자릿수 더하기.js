function solution(n) {
  let str = String(n);
  let result = 0;
  for (const i of str) {
    result += Number(i);
  }
  return result;
}