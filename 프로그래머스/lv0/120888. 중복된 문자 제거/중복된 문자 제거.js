function solution(my_string) {
  let result = '';
  for (const item of my_string) {
    if(!result.includes(item)) result += item;
  }
  return result;
}