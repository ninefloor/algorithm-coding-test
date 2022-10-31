function solution(s1, s2) {
  let result = 0;
  for (const item of s2) {
    if(s1.includes(item)) result++;
  }
  return result;
}