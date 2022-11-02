function solution(array) {
  let result = 0;
  for (const item of array) {
    let strArr = String(item).split('');
    for (const letter of strArr) {
      if(letter === '7') result++;
    }
  }
  return result;
}