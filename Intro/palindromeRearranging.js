function palindromeRearranging(inputString) {
    let letterCounts = {};
    let letter;
    let palindromeSum = 0;
    for (let i = 0; i < inputString.length; i++) {
        letter = inputString[i];
        letterCounts[letter] = letterCounts[letter] || 0;
        letterCounts[letter]++;
    }
    for (let letterCount in letterCounts) {
        palindromeSum += letterCounts[letterCount] % 2;
    }

    return palindromeSum < 2;
}