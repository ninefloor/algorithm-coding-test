function solution(array) {
  let answer = {};
  for (const item of array) {
    if (item in answer) {
      answer[item] += 1;
    } else {
      answer[item] = 1;
    }
  }
  let max = 0
  let maxKey;
  for (const key in answer) {
    if(answer[key] > max){
      max = answer[key];
      maxKey = key
    }
  }
  delete answer[maxKey]
  if(Object.values(answer).includes(max)) return -1;
  else return Number(maxKey);
}

