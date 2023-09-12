function solution(arr) {
return arr.map(item => {
    if(50 <= item && item % 2 === 0) return item / 2
    else if (50 > item && item % 2 === 1) return item * 2
    else return item
})
}