function solution(s) {
  const split = (string) => {
    const result = [];
    let str = ''
    for (let i = 0; i < string.length; i++) {
      const cur = string[i];
      const next = string[i + 1];
      str += cur;
      if (next === ' ' || i === string.length - 1) {
        result.push(str);
        str = '';
      } else if (cur === ' ' && next !== ' ') {
        result.push(str);
        str = '';
      }
    }
    return result;
  }
  return split(s).map(el => {
    el = el.toLowerCase();
    el = el.replace(el[0], el[0].toUpperCase())
    return el;
  }).join("")

}