function solution(board) {
  const boardLength = board.length - 1;
  const arrClone = (arr) => {
    let result = [];
    for (const item of arr) {
      if(Array.isArray(item)) result.push(arrClone(item));
      else result.push(item)
    }
    return result;
  }
  let clone = arrClone(board);
  for (let i = 0; i < board.length; i++) {
    const arr = board[i]
    for (let j = 0; j < arr.length; j++) {
      const item = arr[j];
      if(item === 1){
        clone[i][j] = 1;
        clone[i][j-1] = 1;
        clone[i][j+1] = 1;
        if(clone[i-1] !== undefined){
          clone[i-1][j] = 1;
          clone[i-1][j - 1] = 1;
          if(j + 1 <= boardLength) clone[i-1][j + 1] = 1;
        }
        if(clone[i+1] !== undefined){
          clone[i+1][j] = 1;
          clone[i+1][j - 1] = 1;
          if(j + 1 <= boardLength) clone[i+1][j + 1] = 1;
        }
      }
    }
  }
  let result = []
  for (const item of clone) {
    result = result.concat(item.filter(el => el === 0))
  }
  return result.length;
}
