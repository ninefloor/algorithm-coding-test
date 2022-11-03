function solution(my_string) {
  const str = new RegExp(/[a-zA-Z]/g)
  let numArr = my_string.split(str)
  let num = 0
  for (const item of numArr) {
    const numItem = Number(item);
    if(!Number.isNaN(numItem)) num += numItem;
  }
  return num;
}