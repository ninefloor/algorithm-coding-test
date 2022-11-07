function solution(n) {
  let cd = 0;
  for(let i = 1; i <= n; i++){
    if(n % i === 0) cd += i;
  }
  return cd;
}
