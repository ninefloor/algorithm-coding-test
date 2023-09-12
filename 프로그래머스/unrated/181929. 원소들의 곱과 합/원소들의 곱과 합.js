function solution(num_list) {
    let multi = num_list.reduce((acc, cur) => {
        return acc * cur
    }, 1)
    let sum = num_list.reduce((acc, cur) => {
        return acc + cur
    }, 0) ** 2
    console.log(multi, sum)
    
    return multi < sum ? 1 : 0
}