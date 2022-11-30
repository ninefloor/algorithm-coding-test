function solution(brown, yellow) {
  // brown + yellow = 총 타일의 갯수 (가로 * 세로)
  // brown = 2가로 + 2세로 - 4
  // 나올 수 있는 가로*세로 값 구하기
  let sumTile = brown + yellow;
  const value = [];
  for (let i = 1; i <= Math.sqrt(sumTile); i++){
    if(sumTile % i === 0){
      value.push([sumTile / i, i]);
    }
  }
  for (const item of value) {
    let isBrown = brown === (item[0] * 2) + (item[1] * 2) - 4 ? true : false;
    if(isBrown) return item;
  }
}