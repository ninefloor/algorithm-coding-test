function solution(s) {
  let length = s.length - 1;
  return length % 2 === 1 ? s[Math.floor(length / 2)]+s[Math.ceil(length / 2)] : s[length / 2]
}