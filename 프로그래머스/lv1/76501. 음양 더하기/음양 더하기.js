function solution(absolutes, signs) {
  let result = 0;
  for (let i = 0; i < absolutes.length; i++) {
    const item = absolutes[i];
    result = signs[i] ? result += item : result -= item;
  }
  return result;
}