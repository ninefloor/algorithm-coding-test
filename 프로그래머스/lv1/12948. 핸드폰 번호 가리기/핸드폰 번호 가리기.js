function solution(phone_number) {
  let result = '';
  let num = phone_number.slice(phone_number.length - 4, phone_number.length);
  for(let i = 0; i < phone_number.length - 4; i++) result += '*'
  return result + num;
}