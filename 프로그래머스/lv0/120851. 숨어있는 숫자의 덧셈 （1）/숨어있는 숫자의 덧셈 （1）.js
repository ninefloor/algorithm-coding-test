function solution(my_string) {
  let result = 0;
  for (const item of my_string) {
    if(!Number.isNaN(Number(item))) result += Number(item);
  }
  return result;
}