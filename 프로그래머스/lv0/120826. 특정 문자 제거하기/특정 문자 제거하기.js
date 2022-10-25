function solution(my_string, letter) {
  var answer = '';
  for (const item of my_string) {
    if(item !== letter){
      answer += item
    }
  }
  return answer;
}