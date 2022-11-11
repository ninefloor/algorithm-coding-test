function solution(s) {
  if(s.length === 4 || s.length === 6) {
    for (const item of s) {
      if(Number.isNaN(item * 1)) return false;
    }
    return true
  }
  else return false;
}