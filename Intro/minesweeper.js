function minesweeper(matrix) {
    const empty = matrix.map(el => el.map(e => e = 0));

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            // Y axes scanning top to bottom
            if (matrix[y][x] && y < matrix.length - 1) {
                empty[y + 1][x]++;
                // First element
                if (x == 0) {
                    empty[y + 1][x + 1]++;
                }
                // Last element 
                else if (x == matrix[y].length - 1) {
                    empty[y + 1][x - 1]++;
                } else {
                    empty[y + 1][x + 1]++;
                    empty[y + 1][x - 1]++;
                }

            }

            // Y axes scanning bottom to top
            if (matrix[y][x] && y > 0) {
                empty[y - 1][x]++;
                // First element
                if (x == 0) {
                    empty[y - 1][x + 1]++;
                }
                // Last element 
                else if (x == matrix[y].length - 1) {
                    empty[y - 1][x - 1]++;
                } else {
                    empty[y - 1][x + 1]++;
                    empty[y - 1][x - 1]++;
                }

            }

            // X axes
            if (matrix[y][x]) {
                // First element
                if (x == 0) {
                    empty[y][x + 1]++;
                }
                // Last element 
                else if (x == matrix[y].length - 1) {
                    empty[y][x - 1]++;
                } else {
                    empty[y][x + 1]++;
                    empty[y][x - 1]++;
                }
            }
        }
    }
    return empty;

}