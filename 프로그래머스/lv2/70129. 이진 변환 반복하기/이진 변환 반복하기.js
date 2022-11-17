function solution(s) {
  let delZero = 0;
  let count = 0;
  
  while(s !== '1'){
    // 배열로 만들기
    s = s.split('');
    // 배열에서 0을 제거하면서 제거된 0 카운트 추가
    s = s.filter(el => {
      if (el === '0') {
        delZero++;
        return false;
      } else {
        return true;
      }
    }).join(''); // 문자열로 변환
    // 1만 남은 문자열의 길이를 이진법 문자열로 변환해 s에 할당
    s = s.length.toString(2);
    count++;
  }
  return [count, delZero];
}