function solution(num_list, n) {
  let result = [];
  let arr = [];
  for (const item of num_list) {
    if (arr.length < n) arr.push(item);
    if (arr.length === n) {
      result.push(arr);
      arr = [];
    }
  }
  return result;
}