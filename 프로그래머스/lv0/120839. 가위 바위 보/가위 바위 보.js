function solution(rsp) {
  let answer = '';
  for (const item of rsp) {
    if (item === '2') answer += '0'
    else if (item === '0') answer += '5'
    else if (item === '5') answer += '2'
  }
  return answer;
}