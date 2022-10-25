function solution(my_string, n) {
  var answer = '';
  for (const item of my_string) {
    let i = 1;
    while(i <= n){
      answer += item;
      i++
    }
  }
  return answer;
}