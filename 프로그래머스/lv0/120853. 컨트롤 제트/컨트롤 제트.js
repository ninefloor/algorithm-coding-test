function solution(s) {
  const splitArr = s.split(" ");
  let result = 0;
  let curItem;
  let prevItem;
  for (let i = 0; i < splitArr.length; i++) {
    const item = splitArr[i];
    const nextItem = splitArr[i + 1];
    if (item !== "Z") {
      result += Number(item);
      curItem = Number(item);
      prevItem = splitArr[i - 1]
    } else {
      result -= curItem;
      curItem = prevItem;
    }
  }
  return result;
}