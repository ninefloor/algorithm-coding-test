function solution(array) {
    var answer = [];
    let sortArray = array.sort((a, b) => a - b);
    let sortCenter = (sortArray.length - 1) / 2
    
    return sortArray[sortCenter];
}