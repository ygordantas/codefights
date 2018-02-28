function isIPv4Address(inputString) {

    if (!(/[a-zA-Z]/g.test(inputString))) {
        return inputString.split('.').map(el => parseInt(el)).every((el, i, arr) => el >= 0 && el <= 255 && arr.length === 4)
    } else {
        return false
    }

}