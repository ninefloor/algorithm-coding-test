function solution(money) {
  let answer = [];
  let coffeePrice = 5500;
  answer.push(Math.floor(money / coffeePrice));
  answer.push(money % coffeePrice);
  return answer;
}