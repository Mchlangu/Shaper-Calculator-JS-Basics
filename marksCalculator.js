const prompt = require('prompt-sync')()

const numberOfTests = 3;
minDistinctionMark = 75
var status = "";

function calculateMarksSum(firstTest, secondTest, thirdTest){

    return firstTest + secondTest + thirdTest;
}
function calculateMarksAvg(firstTest, secondTest, thirdTest){
    
    return ((calculateMarksSum(firstTest, secondTest, thirdTest)/numberOfTests));
}

var firstMark = parseInt(prompt("Enter mark for the first test: "));
var secondMark = parseInt(prompt("Enter mark for the second test: "))
var thirdMark = parseInt(prompt("Enter mark for the third test: "))

if(calculateMarksAvg(firstMark, secondMark, thirdMark) < 50){
    status = "failed";
}else if(calculateMarksAvg(firstMark, secondMark, thirdMark)>= 50 && calculateMarksAvg(firstMark, secondMark, thirdMark) <=75){
    status ="Passed";
}else if(calculateMarksAvg(firstMark, secondMark, thirdMark)>= 75){
    status ="Passed with distinction";
}else{
    status = "Invalid input";
}

console.log(status);