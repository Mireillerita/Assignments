//function that displays a rectangle with decremented 1 and incremented 0

function displayPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let rowPattern = '';

        for (let j = 1; j <= rows; j++) {
            if (j <= rows - i + 1) {
                rowPattern += '1 ';
            } else {
                rowPattern += '0 ';
            }
        }

        console.log(rowPattern);
    }
}

displayPattern(4);