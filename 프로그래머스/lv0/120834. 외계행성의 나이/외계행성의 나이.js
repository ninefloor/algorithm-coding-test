function solution(age) {
  let answer = '';
  let letterArr = ['a', 'b' ,'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  for (const item of String(age)) {
    answer += letterArr[Number(item)]
  }
  return answer;
}