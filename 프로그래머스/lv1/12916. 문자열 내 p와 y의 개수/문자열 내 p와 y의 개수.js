function solution(s){
  s = s.toLowerCase();
  let y = 0;
  let p = 0;
  for (const item of s) {
    y = item === 'y' ? y + 1 : y;
    p = item === 'p' ? p + 1 : p;
  }
  return p === y;
}