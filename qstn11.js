//function that displays decreased right triangle of 1 pattern
function decreasedTriangle(height){
    for(let i = 1; i <= height; i ++){
        let rowPattern = '';
        for(let j = height; j >= i; j--){
            rowPattern += '1';
        }
        console.log(rowPattern)
    }
}
decreasedTriangle(4);