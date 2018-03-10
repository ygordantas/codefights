function evenDigitsOnly(n) {
    return n.toString().split('').map(el => parseInt(el)).every(e => e % 2 === 0);
}