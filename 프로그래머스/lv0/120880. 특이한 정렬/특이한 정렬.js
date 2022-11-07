function solution(numlist, n) {
  let result = [];
  let minus = {};
  let big = {};
  for (const item of numlist) {
    let diff = Math.abs(n - item);
    if(diff in minus){
      if(minus[diff] < item) big[diff] = item;
      else {
        big[diff] = minus[diff];
        minus[diff] = item;
      }
    } else minus[diff] = item;
  }
  console.log(minus)
  console.log(big)
  while(Object.keys(minus).length > 0){
    let minusEl = Math.min(...Object.keys(minus));
    if(minusEl in big) result.push(big[minusEl])
    result.push(minus[minusEl]);
    delete minus[minusEl];
  }
  return result
}