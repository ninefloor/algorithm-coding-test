function solution(a, b) {
  const getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);
  let gcd = getGCD(a, b)
  if (Number.isInteger(a / gcd) && Number.isInteger(b / gcd)){
    a = a / gcd;
    b = b / gcd;
  }
  while(b > 1){
    if(b % 2 === 0) {
      b = b / 2
      continue;
    };
    if(b % 5 === 0) {
      b = b / 5
      continue;
    };
    return 2
  }
  return 1
}
