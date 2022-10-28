function solution(numbers) {
  let enNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  while(Number.isNaN(Number(numbers))){
    for (let i = 0; i < enNum.length; i++) {
      numbers = numbers.replace(enNum[i], i)
    }
  }
  return Number(numbers);
}