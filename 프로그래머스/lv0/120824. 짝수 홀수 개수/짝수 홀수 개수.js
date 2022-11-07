function solution(num_list) {
  let even = 0;
  let odd = 0;
  for (const i of num_list) {
    
    if (i % 2 === 0) even++;
    else odd++;
  }
  return [even, odd];
}