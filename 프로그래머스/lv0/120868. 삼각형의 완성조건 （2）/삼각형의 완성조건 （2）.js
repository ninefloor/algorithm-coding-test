function solution(sides) {
  let long = Math.max(...sides);
  let short = Math.min(...sides);
  let etc = 1;
  let result = [];
  while(etc <= short + long){
    if(etc < short + long && long < short + etc) result.push(etc)
    etc++
  }
  return result.length;
}