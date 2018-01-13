function makeArrayConsecutive2(statues) {
    var statuesLength = statues.length;

    statues.sort(function (a, b) {
        return a - b;
    })
    for (var i = 0; i < statues.length; i++) {
        if (statues[i + 1] - statues[i] > 1) {
            statues.push(statues[i] + 1);
            statues.sort(function (a, b) {
                return a - b;
            })

        }
    }
    var answer = statues.length - statuesLength;

    return answer;
}