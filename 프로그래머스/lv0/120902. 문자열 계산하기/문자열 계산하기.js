function solution(my_string) {
  let strArr = my_string.split(' ');
  let result = Number(strArr[0]);
  let index = 1;
  while(index < strArr.length){
    const item = strArr[index];
    const nextItem = strArr[index + 1];
    if(item === '+') {
      result += Number(nextItem);
      index += 2;
    } else if (item === '-'){
      result -= Number(nextItem);
      index += 2;
    }
  }
  return result;
}

solution("5 + 123 + 45 + 5 - 123")