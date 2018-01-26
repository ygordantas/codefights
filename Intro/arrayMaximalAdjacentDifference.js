function arrayMaximalAdjacentDifference(inputArray) {
    let arrDifferences = [];


    inputArray.forEach((el, i, arr) => {
        let difference = 0;
        if (el > arr[i + 1]) {
            difference = el - arr[i + 1];
            arrDifferences.push(difference);
        } else if (arr[i + 1] > el) {
            difference = arr[i + 1] - el;
            arrDifferences.push(difference);
        } else if (el === arr[i + 1]) {
            arrDifferences.push(0);
        }
    });
    return Math.max(...arrDifferences);
}