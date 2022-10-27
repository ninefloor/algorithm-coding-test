function solution(numbers, k) {
  let person;
  let n = 1;
  let i = 0;
  while(n <= k){
    person = numbers[i];
    i += 2;
    if (i >= numbers.length) i -= numbers.length;
    n++;
  }
  return person;
}