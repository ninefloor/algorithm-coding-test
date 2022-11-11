function solution(price, money, count) {
  let sumCount = 0;
  for (let i = 1; i <= count; i++) sumCount += i;
  price = sumCount * price;
  return money - price >= 0 ? 0 : Math.abs(money - price)
}