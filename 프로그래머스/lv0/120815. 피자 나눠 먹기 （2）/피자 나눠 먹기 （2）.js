function solution(n) {
  let pizza;
  for(pizza = 1; pizza <= 6 * n; pizza++){
    if(pizza * 6 % n === 0){
      return pizza;
    }
  }
}

