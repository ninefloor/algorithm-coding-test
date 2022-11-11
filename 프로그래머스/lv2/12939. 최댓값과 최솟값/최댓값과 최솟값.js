function solution(s) {
  s = s.split(' ').map(el => Number(el));
  return Math.min(...s) + ' ' + Math.max(...s)
}