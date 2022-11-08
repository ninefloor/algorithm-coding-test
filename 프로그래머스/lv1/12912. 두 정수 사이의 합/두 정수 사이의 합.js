function solution(a, b) {
  let result = 0;
  [a, b] = [a, b].sort((a, b) => a - b)
  while(a <= b) {
    result += a;
    a++;
  }
  return result;
}