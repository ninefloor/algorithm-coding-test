function solution(numbers) {
  let result = numbers[0] * numbers[1]
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const item1 = numbers[i];
      const item2 = numbers[j];
      if(result < item1*item2) result = item1*item2
    }
  }
  return result
}