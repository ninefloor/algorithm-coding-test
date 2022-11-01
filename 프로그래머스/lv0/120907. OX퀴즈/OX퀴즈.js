function solution(quiz) {
  return quiz.map(el => {
    let arr = el.split(' ');
    let firstNum = Number(arr[0]);
    let operator = arr[1];
    let secondNum = Number(arr[2]);
    let result = Number(arr[4]);
    if(operator === '+') return firstNum + secondNum === result ? "O" : "X"
    else if (operator === '-') return firstNum - secondNum === result ? "O" : "X"
  })
}