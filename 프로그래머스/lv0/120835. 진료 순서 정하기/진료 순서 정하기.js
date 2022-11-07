function solution(emergency) {
  let answer;
  // 우선순위 확인을 위해 정렬한 배열
  let sortArr = emergency.slice(0).sort((a, b) => a - b).reverse();
  answer = emergency.map(item => {
    return sortArr.indexOf(item) + 1
  })
  
  return answer;
}