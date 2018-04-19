function simpleArraySum(ar) {
    let sum = 0;
    for (const item of ar) {
        sum += item;
    }
    return sum;
}

//taking an array of arrays sum both diagonals
//of the matrix and return the absolute value of the difference
function diagonalDifference(a) {

    let primary = 0;
    let secondary = 0;

    for (let i = 0; i < a.length; i++) {
        primary += a[i][i];
        secondary += a[i][a.length - 1 - i];
    }

    return  Math.abs(primary - secondary);
}
