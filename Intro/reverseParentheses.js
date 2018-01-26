function reverseParentheses(s) {
    let e = /\(([^()]+)\)/g;

    let innermost = [];

    function process() {
        // find the innermost parenthesis
        innermost = s.match(e);

        if (innermost !== null) {
            // Revert and remove the parenthesis
            let answer = innermost.map(el => el.split('').reverse().join('').replace("(", "").replace(")", ""));

            // Add the reverted word back into the string
            innermost.forEach((el, i) => s = s.replace(innermost[i], answer[i]));

            innermost = [];
            answer = [];
        }
        return s;
    }

    while (innermost !== null) {
        process();
    }

    return s;
};