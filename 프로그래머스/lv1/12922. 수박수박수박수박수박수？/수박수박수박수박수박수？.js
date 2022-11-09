function solution(s) {
  let result = ''
  for(let i = 1; i <= s; i++) result += i % 2 === 1 ? '수' : '박'
  return result;
}