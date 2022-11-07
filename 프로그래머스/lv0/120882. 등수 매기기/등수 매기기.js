function solution(score) {
  score = score.map((el) => (el[0] + el[1]) / 2);
  let grade = score.slice().sort((a, b) => b - a);
  score = score.map((el) => {
    return grade.indexOf(el) + 1;
  })
  return score;
}
