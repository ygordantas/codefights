function longestDigitsPrefix(inputString) {
    if (inputString.charCodeAt(0) >= 48 && inputString.charCodeAt(0) <= 57) {
        let i = 0;
        while (inputString.charCodeAt(i) >= 48 && inputString.charCodeAt(i) <= 57) {
            i++;
        }
        return inputString.slice(0, i);
    } else {
        return "";
    }
}