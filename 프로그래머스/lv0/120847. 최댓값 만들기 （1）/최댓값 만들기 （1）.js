function solution(numbers) {
  var answer = numbers.sort((a, b) => a - b).reverse();
  return answer[0] * answer[1];
}
