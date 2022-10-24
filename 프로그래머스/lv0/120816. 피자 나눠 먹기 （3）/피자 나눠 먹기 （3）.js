function solution(slice, n) {
  let answer = 0;
  while(answer * slice < n){
    answer++;
  }
  return answer;
}