function solution(s) {
  return s.split(' ').map(word => {
    let result = '';
    for (let i = 0; i < word.length; i++) {
      const letter = word[i]
      result += i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
    }
    return result;
  }).join(' ');
}