function solution(numbers) {
  let enNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  
    for (let i = 0; i < enNum.length; i++) {
      numbers = numbers.replaceAll(enNum[i], i)
    }
  
  return Number(numbers);
}