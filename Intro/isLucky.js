function isLucky(n) {
    var digits = n.toString().split('').map(s => parseInt(s));

    var half = digits.length / 2;
    var half1 = digits.slice(0, half);
    var half2 = digits.splice(half);

    var sum1 = half1.reduce((sum, value) => sum + value);
    var sum2 = half2.reduce((sum, value) => sum + value);

    if (sum1 === sum2) {
        return true;
    } else {
        return false;
    }
}