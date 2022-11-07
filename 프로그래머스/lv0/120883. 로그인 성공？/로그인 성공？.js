function solution(id_pw, db) {
  let id = false;
  for (const item of db) {
    if(item[0] === id_pw[0]){
      id = true;
      if(item[1] === id_pw[1]) return 'login';
    }
  }
  return id ? 'wrong pw' : 'fail'
}