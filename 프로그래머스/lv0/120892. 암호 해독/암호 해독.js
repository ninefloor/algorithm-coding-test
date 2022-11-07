function solution(cipher, code) {
  let result = '';
  for (let i = 0; i < cipher.length; i++) {
    const element = cipher[i];
    if ((i + 1) % code === 0) result += element;
  }
  return result;
}