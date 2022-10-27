function solution(n) {
  let fac = [1, 1];
  for (let i = 2; fac[i - 1] < n; i++){
    fac[i] = fac[i - 1] * i;
  }
  let facLength = fac.length
  if(fac[facLength - 1] === n){
    return facLength - 1
  } else {
    return facLength - 2
  }
}