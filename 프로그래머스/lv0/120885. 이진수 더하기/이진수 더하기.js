function solution(bin1, bin2) {
  bin1 = parseInt(bin1, 2);
  bin2 = parseInt(bin2, 2);
  let result = Number(bin1) + Number(bin2);
  return result.toString(2)
}