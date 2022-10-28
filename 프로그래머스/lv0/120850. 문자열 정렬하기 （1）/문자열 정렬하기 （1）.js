function solution(my_string) {
  let result = [];
  for (const item of my_string) {
    if(!Number.isNaN(Number(item))) result.push(Number(item));
  }
  result.sort((a, b) => a - b);
  return result;
}