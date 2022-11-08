function solution(x) {
  let str = String(x);
  let sum = 0;
  for (const item of str) sum += Number(item);
  return x % sum === 0;
}