function matrixElementsSum(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0 && i < matrix.length - 1) {
                matrix[i + 1][j] = 0;
            }
        }
        sum += matrix[i].reduce((a, b) => a + b, 0);
    }

    return sum;
}