function solution(array, n) {
  let diff = Math.abs(array[0] - n);
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    let item = array[i];
    let thisDiff = Math.abs(item - n);
    if (thisDiff < diff) {
      diff = thisDiff;
      result = item;
    } else if (thisDiff === diff && item < result) {
      result = item;
    }
  }
  return result;
}
