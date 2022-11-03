function solution(polynomial) {
  let arr = polynomial.split(' ');
  let xNum = 0;
  let num = 0;

  for (const el of arr) {
    if(el.includes('x') && el.slice(0, -1).length !== 0){
      xNum += Number(el.slice(0, -1))
    } else if (el.includes('x') && el.slice(0, -1).length === 0){
      xNum++;
    } else if(!Number.isNaN(Number(el))) num += Number(el)
  }
  let x, result;
  if (xNum === 0) return `${num}`;
  else if (xNum === 1) x = 'x';
  else if (xNum > 1) x = `${xNum}x`;

  if(num === 0) result = '';
  else if(num > 0) result = ` + ${num}`;

  return x + result;
}