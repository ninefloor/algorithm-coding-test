function solution(n, arr1, arr2) {
  const map = new Array(n).fill(0).map(el => new Array(n).fill(0))
  
  arr1 = arr1.map(el => {
    let str = el.toString(2);
    while(str.length < n) str = '0' + str;
    return str;
  })
  arr2 = arr2.map(el => {
    let str = el.toString(2);
    while(str.length < n) str = '0' + str;
    return str;
  })

  return map.map((arr, i) => {
    return arr.map((el, j) => {
      if(arr1[i][j] === '1' || arr2[i][j] === '1') return '#'
      else return ' '
    }).join('')
  })
}