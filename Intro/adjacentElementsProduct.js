function commonCharacterCount(s1, s2) {
    var answer = 0;
    var count = 0;

    for (var i = 0; i < s1.length; i++) {
        if (s2.indexOf(s1[i]) !== -1) {
            answer++;
            s2 = s2.slice(i);
        }
    }
    return answer;
}