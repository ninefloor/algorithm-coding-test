function solution(my_string) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  let result = '';
  for (const item of my_string) {
    if(!vowel.includes(item)) result += item;
  }
  return result;
}