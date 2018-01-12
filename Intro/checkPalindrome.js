function checkPalindrome(inputString) {
    var splitStr = inputString.split('').reverse().join('');
    if (inputString === splitStr) {
        return true;
    } else {
        return false;
    }
}