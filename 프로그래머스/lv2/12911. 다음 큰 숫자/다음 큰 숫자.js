function solution(n) {
  let idx = n + 1;
  let key = n.toString(2).split('').filter(el => el === '1').length;
  while(idx > 0){
    if(idx.toString(2).split('').filter(el => el === '1').length === key) return idx;
    else idx++
  }
}