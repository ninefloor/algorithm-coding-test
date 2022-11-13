function solution(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    const item1 = arr1[i];
    const item2 = arr2[i];
    let newArr = [];
    for(let j = 0; j < item1.length; j++){
      newArr.push(item1[j] + item2[j]);
    }
    result.push(newArr)
  }
  return result;
}