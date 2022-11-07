function solution(my_string, num1, num2) {
  let strArr = my_string.split('');
  let changeItem;
  changeItem = strArr[num1];
  strArr[num1] = strArr[num2];
  strArr[num2] = changeItem;
  let result = ''
  for (const item of strArr) {
    result += item
  }
  return result;
}