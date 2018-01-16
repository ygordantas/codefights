function allLongestStrings(inputArray) {
    var longest = inputArray.reduce(function (a, b) {
        return a.length > b.length ? a : b;
    });

    /*If condition is true, the operator returns the value of a; otherwise, it returns the value of b.*/

    var answer = inputArray.filter(function (word) {
        return word.length >= longest.length
    })
    return answer;
}