function solution(s){
  let stack = [];
  for (const item of s) {
    if (item === '(') stack.push(item);
    else {
      if(stack.length > 0) stack.pop();
      else return false;
    }
  }
  return stack.length === 0 ? true : false;
}