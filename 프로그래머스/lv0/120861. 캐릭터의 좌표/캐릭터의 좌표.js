function solution(keyinput, board) {
  let horizon = 0, vertical = 0;
  let horLimit = (board[0] - 1) / 2;
  let verLimit = (board[1] - 1) / 2;
  for (const item of keyinput) {
    let isHor = -horLimit < horizon && horizon < horLimit
    let isVer = -verLimit < vertical && vertical < verLimit
    if(item === 'up' && vertical < verLimit) vertical++;
    if(item === 'down' && -verLimit < vertical) vertical--;
    if(item === 'left' && -horLimit < horizon) horizon--;
    if(item === 'right'&& horizon < horLimit) horizon++;
  }
  return [horizon, vertical]
}