function solution(sides) {
  let [a, b, c] = sides;
  let maxNum = Math.max(a, b, c);
  sides.splice(sides.indexOf(maxNum), 1);
  return sides[0] + sides[1] > maxNum ? 1 : 2;
}