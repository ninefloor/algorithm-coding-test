function solution(numbers) {
  let answer = 0;
  for (const item of numbers) {
    answer += item
  }
  return answer / numbers.length;
}