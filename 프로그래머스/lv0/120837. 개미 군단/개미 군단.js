function solution(hp) {
  let general = Math.floor(hp / 5);
  let pawn = Math.floor((hp - (general * 5)) / 3);
  let work = hp - (general * 5) - (pawn * 3);

  return general + pawn + work;
}