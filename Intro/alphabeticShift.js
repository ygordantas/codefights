function alphabeticShift(inputString) {
    let str = [];
    for (let i = 0; i < inputString.length; i++) {
        if (inputString.charCodeAt(i) == 122) {
            str.push(97);
        } else {
            str.push(inputString.charCodeAt(i) + 1);
        }
    }
    return String.fromCharCode(...str);
}