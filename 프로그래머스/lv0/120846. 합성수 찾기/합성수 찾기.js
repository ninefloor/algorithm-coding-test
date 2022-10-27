function solution(n) {
  let composite = 0;
  for (let i = 4; i <= n; i++){
    let divisor = 0;
    for (let j = 1; j <= i; j++){
      if (i % j === 0) divisor++;
      if (divisor >= 3){
        composite++;
        break;
      }
    }
  }
  return composite;
}
