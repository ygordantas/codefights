function almostIncreasingSequence(sequence) {
    var answer;
    for (var i = 0; i < sequence.length; i++) {
        if (sequence[i] >= sequence[i + 1] && i !== sequence.length - 2 && sequence[i] >= sequence[i + 2]) {
            delete sequence[i];
            break;
        } else if (sequence[i + 1] <= sequence[i]) {
            delete sequence[i + 1];
            break;
        }
    }
    sequence = sequence.filter(function (e) {
        return e !== undefined;
    });
    if (sequence.length === 1) {
        answer = true;
    } else {
        for (var j = 0; j < sequence.length - 1; j++) {
            if (sequence[j] < sequence[j + 1]) {
                answer = true;
            } else {
                answer = false;
                break;

            }
        }
    }
    return answer;
}