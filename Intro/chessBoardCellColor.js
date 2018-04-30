function chessBoardCellColor(cell1, cell2) {
    const line1 = [true, false, true, false, true, false, true, false];
    const line2 = [false, true, false, true, false, true, false, true];

    const board = [line1, line2, line1, line2, line1, line2, line1, line2];

    coor = (cell) => {

        let coordinates = cell.split('');
        let col = +coordinates[1] - 1;
        let line;

        switch (coordinates[0]) {
            case 'A':
                line = board[0];
                break;
            case 'B':
                line = board[1];
                break;
            case 'C':
                line = board[2];
                break;
            case 'D':
                line = board[3];
                break;
            case 'E':
                line = board[4];
                break;
            case 'F':
                line = board[5];
                break;
            case 'G':
                line = board[6];
                break;
            case 'H':
                line = board[7];
                break;
        }
        return line[col];
    }


    return coor(cell1) === coor(cell2);
}