const prompt = require('prompt-sync')()


const numberOfTests = 3;
minDistinctionMark = 75;
students = 3;

const stuMarks = new Array(2).fill(0).map(() => new Array(2).fill(0));
const stuNames = [" ", " ", " "];
const stuStatus = [" ", " ", " "];
const stuAverage = 0;
var stuTotal = [0, 0, 0];

    for (let i = 0; i < students; i++) {
        stuNames[i] = prompt("Enter name of the student: ");
        for (let x = 0; x < students; x++) {
        
            stuMarks[i][x] = parseInt(prompt(`Enter mark for the test: `));
            stuTotal[i] = stuTotal[i] + stuMarks[i][x];
        }

        console.log(stuTotal[i]);
        stuAverage[i] = stuTotal /numberOfTests
        if(stuAverage < 50){
            stuStatus[i] = "failed";
        }else if(stuAverage[i]>= 50 && stuAverage[i] <=75){
            stuStatus[i] ="Passed";
        }else if(stuAverage[i]>= 75){
            stuStatus[i] ="Passed with distinction";
        }else{
            stuStatus[i] = "Invalid input";
        } 

    }

    console.log(stuTotal);

