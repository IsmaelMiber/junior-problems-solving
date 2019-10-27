var arr = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
var rows = arr.length;
var cols = arr[0].length;
var rowOfTargetNum;
var colOfTargetNum;
var colIndexForBeatiful = Math.floor(cols / 2); // i made it for dynamic matrix length.
var rowIndexForBeatiful = Math.floor(rows / 2); // i made it for dynamic matrix length.

for(var i = 0; i < rows; ++i) {
    for(var j = 0; j < cols; ++j) {
        if(arr[i][j] == 1) {
            rowOfTargetNum = i;
            colOfTargetNum = j;
            break;
        }
    }
    if(rowOfTargetNum !== undefined) {
        break;
    }
}
console.log(rowIndexForBeatiful - rowOfTargetNum);
console.log(colIndexForBeatiful - colOfTargetNum);
console.log(Math.abs(rowIndexForBeatiful - rowOfTargetNum) + Math.abs(colIndexForBeatiful - colOfTargetNum));