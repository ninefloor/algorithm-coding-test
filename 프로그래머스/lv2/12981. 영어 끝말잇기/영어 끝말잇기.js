function solution(n, words) {
  const person = new Array(n).fill(0);
  person[0]++;

  const prevWords = [words.shift()];

  let idx = 1;
  while (words.length){
    const word = words.shift();
    const prev = prevWords[prevWords.length - 1];
    person[idx]++;
    if(prev[prev.length - 1] === word[0] && !prevWords.includes(word)){
      idx = idx === n-1 ? 0 : idx + 1;
      prevWords.push(word);
    } else {
      return [idx+1, person[idx]]
    }
  }
  return [0, 0]
}