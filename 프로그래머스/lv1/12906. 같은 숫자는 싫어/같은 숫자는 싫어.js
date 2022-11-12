function solution(arr) {
  let result = [arr[0]];
  arr.splice(0, 1);
  for (const item of arr) {
    if(result[result.length - 1] !== item) result.push(item);
  }
  return result;
}
