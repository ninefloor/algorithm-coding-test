function solution(n) {
  const prime = (num) => {
    let isPrimeArr = []
    for (let i = 2; i <= num; i++){
      let isPrime = 0
      for (let j = 1; j <= i; j++) {
        if(i % j === 0) isPrime++;
      }
      if(isPrime === 2) isPrimeArr.push(i);
    }
    return isPrimeArr;
  }

  let primeArr = prime(n);
  const result = [];
  for (let item of primeArr) {
    if(n % item === 0) result.push(item);
  }
  return result;
}