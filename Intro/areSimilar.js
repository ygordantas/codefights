function areSimilar(a, b) {
    let count = 0;
    let repeat = [];
    if (a.every((el) => b.includes(el)) && a.reduce((acc, cur) => acc + cur) === b.reduce((acc, cur) => acc + cur)) {
        a.forEach((el, i) => {
            if (el !== b[i]) {
                count++;
            }
        })
        if (count > 2) {
            return false;
        } else {
            return true;
        }

    } else {
        return false;
    }
}