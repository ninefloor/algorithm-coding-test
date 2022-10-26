function solution(balls, share) {
  const fac = (num) => {
    if(num <= 1) return BigInt(1);
    return BigInt(num) * fac(num - 1);
  }

  let child = fac(balls);
  let parent = fac(balls - share) * fac(share);

  return child / parent;
}