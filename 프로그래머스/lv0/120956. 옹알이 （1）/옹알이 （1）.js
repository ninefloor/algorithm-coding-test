function solution(babbling) {
  let result = 0;
  let word = ["aya", "ye", "woo", "ma"]
  for (let item of babbling) {
    for (const wordEl of word) {
      if(item.includes(wordEl)){
        item = item.replaceAll(wordEl, '*');
      }
    }
    if(item.replaceAll('*', '').length === 0) result++;
  }
  return result;
}