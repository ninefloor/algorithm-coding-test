function solution(A, B) {
  if(A===B) return 0;
  A = A.split('');
  for (let i = 1; i <= A.length; i++) {
    let cut = A.splice(A.length - 1, 1);
    A.unshift(cut);
    if(A.join('') === B) return i;
  }
  return -1;
}
