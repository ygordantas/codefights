function arrayChange(inputArray) {
    let count = 0;

    for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i - 1] > inputArray[i] || inputArray[i - 1] === inputArray[i]) {
            inputArray[i]++;
            count++;
            i--;
        }
    }
    return count;
}
