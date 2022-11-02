function solution(my_str, n) {
  let result = [];
  let word = ''
  for (let i=0;i < my_str.length; i++) {
    const letter = my_str[i];
    if(word.length < n) word += letter;
    if (word.length === n) {
      result.push(word);
      word = ''
    }
    if(i === my_str.length - 1 && word.length < n && word.length !== 0){
      result.push(word);
    }
  }
  return result;
}