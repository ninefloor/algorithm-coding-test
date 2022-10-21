function solution(denum1, num1, denum2, num2) {
    let deSum = (num1 * denum2) + (num2 * denum1);
    let numSum = num1 * num2;
    const gcdApp = (a, b) => (a % b === 0) ? b : gcdApp(b, a % b)
                              
    let key = gcdApp(deSum, numSum);
    
    // return [deSum, numSum]
    return [deSum / key, numSum / key];
}