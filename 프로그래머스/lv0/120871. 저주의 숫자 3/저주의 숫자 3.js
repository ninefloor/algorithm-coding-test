function solution(n) {
  let result = [0];
  let three = 1;
  const isThree = (num) => {
    if (String(num).includes("3") || num % 3 === 0) return isThree(num + 1);
    else return num;
  };
  for (let i = 1; i <= n; i++) {
    result[i] = isThree(result[i-1] + 1);
  }
  return result[n];
}