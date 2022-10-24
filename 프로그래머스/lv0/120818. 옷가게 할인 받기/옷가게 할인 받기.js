function solution(price) {
  let discount = 0;
  if (price >= 100000) discount = 0.05;
  if (price >= 300000) discount = 0.1;
  if (price >= 500000) discount = 0.2;
  
  return Math.floor(price - (price * discount));
}
