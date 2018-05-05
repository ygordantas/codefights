function circleOfNumbers(n, firstNumber) {
    let i = 0;
    let arr = [];
    let split = n / 2;
    let pos;
    let radiallyOppositeNumber;

    while (i < n) {
        arr.push(i);
        i++;
    }

    let rightHalf = arr.slice(0, split);

    let leftHalf = arr.slice(split);

    if (rightHalf.includes(firstNumber)) {
        pos = rightHalf.indexOf(firstNumber);
        radiallyOppositeNumber = leftHalf[pos];
    } else {
        pos = leftHalf.indexOf(firstNumber);
        radiallyOppositeNumber = rightHalf[pos]
    }

    return radiallyOppositeNumber;
}