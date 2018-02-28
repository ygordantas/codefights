function avoidObstacles(inputArray) {
    inputArray = inputArray.sort((a, b) => a - b);
    const arr = [];
    let i = 0;

    while (i <= inputArray[inputArray.length - 1]) {
        i++;
        arr.push(i);
    }

    return Math.min(...arr.filter(el => !(inputArray.includes(el))).filter(el => inputArray.every(e => (e % el) !== 0)))
}