function solution(num_list) {
  let result = [];
  function loop(num_list) {
    if (num_list.length === 0) return [];
    result.push(num_list[num_list.length - 1]);
    return loop(num_list.slice(0, num_list.length - 1));
  }
  loop(num_list);
  return result;
}