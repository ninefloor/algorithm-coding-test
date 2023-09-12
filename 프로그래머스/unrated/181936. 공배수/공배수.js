function solution(number, n, m) {
    let a = number % n
    let b = number % m
    console.log(a, b)
    return a === 0 && b === 0 ? 1 : 0
}