function solution(sizes = []) {
  // 50, 60 / 30, 70 / 30, 60 / 40, 80
  // 7, 10 / 3, 12 / 8, 15 / 7, 14 / 5, 15
  let max = [0, 0]
  sizes.forEach(el => {
    el.sort((a, b) => a - b);
    max[0] = el[0] > max[0] ? el[0] : max[0];
    max[1] = el[1] > max[1] ? el[1] : max[1];
  })
  return max[0] * max[1];
}
