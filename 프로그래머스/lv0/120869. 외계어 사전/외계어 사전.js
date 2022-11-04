function solution(spell, dic) {
  for (const item of spell) {
    dic = dic.filter(el => el.includes(item));
  }
  return dic.length === 1 ? 1 : 2;
}