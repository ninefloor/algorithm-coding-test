function solution(common) {
  let geo, idx;
  if(common[2] - common[1] === common[1] - common[0]){
    geo = false;
    idx = common[1] - common[0];
  } else {
    geo = true;
    idx = common[1] / common[0];
  }
  let lastCommon = common[common.length - 1];
  return geo ? lastCommon * idx : lastCommon + idx;
}