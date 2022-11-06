function solution(chicken) {
  // 첫 주문 시 받는 서비스 치킨
  let service = parseInt(chicken / 10);
  // 첫 서비스 치킨 쿠폰 + 남은 쿠폰
  let coupon = chicken % 10 + service;
  // 추가 된 쿠폰으로 서비스 치킨 추가
  while(coupon >= 10){
    service += parseInt(coupon / 10);
    coupon = coupon % 10 + parseInt(coupon / 10) ;
  }
  return service;
}