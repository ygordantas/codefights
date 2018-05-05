function absoluteValuesSumMinimization(a) {
    let absSum = [];
    let x = [];
    let y = [];

    for (let i = 0; i < a.length; i++) {
        a.forEach(n => absSum.push(Math.abs(n - a[i])));
        x = absSum.reduce((acc, cur) => acc + cur);
        absSum = [];
        y.push(x);
    }

    return a[y.indexOf(Math.min(...y))];
}