function solution(s) {
  let result = {};
  for (const item of s) {
    if(!(item in result)) result[item] = 1;
    else if(item in result) result[item]++;
  }

  for (const key in result) {
    if (result[key] > 1) delete result[key];
  }
  return Object.keys(result).sort().join('')
}