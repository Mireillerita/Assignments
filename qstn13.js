//function that displays
function displayPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let rowPattern = '';

        for (let j = 1; j <= rows; j++) {
            if (i === 1 || i === rows || j === 1 || j === rows) {
                rowPattern += '1 ';
            } else {
                rowPattern += '0 ';
            }
        }

        console.log(rowPattern);
    }
}

displayPattern(5);
