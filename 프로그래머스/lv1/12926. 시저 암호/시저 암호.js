function solution(s, n) {
  const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const upper = lower.map(el => el.toUpperCase());

  return s.split('').map(el => {
    if(el === ' ') return ' ';
    else if(lower.includes(el)){
      const idx = lower.indexOf(el);
      if(idx + n <= 25) return lower[idx + n];
      else return lower[idx + n - 26];
    } else {
      const idx = upper.indexOf(el);
      if(idx + n <= 25) return upper[idx + n];
      else return upper[idx + n - 26];
    }
  }).join('');
}