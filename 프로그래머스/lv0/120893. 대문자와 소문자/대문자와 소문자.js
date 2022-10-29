function solution(my_string) {
  let result = '';
  for (const item of my_string) {
    if (item !== item.toUpperCase()) result += item.toUpperCase();
    if (item !== item.toLowerCase()) result += item.toLowerCase();
  }
  return result;
}