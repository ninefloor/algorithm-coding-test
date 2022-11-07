function solution(i, j, k) {
  let str = '';
  let result = 0;
  while(i <= j) {
    str += i;
    i++;
  }
  for (const item of str) {
    if(item === String(k)) result++;
  }
  return result;
}