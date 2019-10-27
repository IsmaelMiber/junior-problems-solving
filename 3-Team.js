var numberOfProblems = 2;
var arrOfAnswers = [[1, 0, 0], [0, 1, 1]];
var friendsNum = 3;
var sureOfSolutions = 0
var countOfWhoSure = 0;

for(i = 0; i < parseInt(numberOfProblems); ++i) {
    countOfWhoSure = 0;
    for(var j = 0; j < friendsNum; ++j) {
        if(arrOfAnswers[i][j] == 1) {
            ++countOfWhoSure;
            if(countOfWhoSure == 2) {
                ++sureOfSolutions;
                break;
            }
            
        }
    }
}


console.log(sureOfSolutions);