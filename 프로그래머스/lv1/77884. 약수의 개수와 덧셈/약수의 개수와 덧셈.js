function solution(left, right) {
  let result = 0;
  for(left; left <= right; left++){
    let count = 0;
    for (let i = 1; i <= left; i++){
      if (left % i === 0) count++;
    }
    result = count % 2 === 0 ? result += left : result -= left;
  }
  return result;
}