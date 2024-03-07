//function tha display rectangle pattern star
function displayRectacle (rows, columns){
    for(let i = 0; i <= rows; i++){
        let rowPattern = '';
        for(let j = 0; j <= columns; j++){
            rowPattern += '* ';
        }
        console.log(rowPattern);
    }
}
displayRectacle(5,4);