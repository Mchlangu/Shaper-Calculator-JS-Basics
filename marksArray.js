const prompt = require('prompt-sync')()

    var numberOfTests = 3;
    const minDistinctionMark = 75;
    const avgPassMark = 50;
    const students = 3;


    const stuMarks = new Array(3).fill(0).map(() => new Array(3).fill(0));
    const stuNames = [" ", " ", " "];
    const stuStatus = [" ", " ", " "];
    const stuAverage = [0,0,0];
    var stuTotal = [0, 0, 0];

    val = "12,34,56,78,76";

    for (let i = 0; i < students; i++) {
        stuNames[i] = prompt("Enter name of the student: ");
        for (let x = 0; x < students; x++) {
        
            stuMarks[i][x] = parseInt(prompt("Enter mark for the test: "));
            stuTotal[i] = stuTotal[i] + stuMarks[i][x];
        }

        stuAverage[i] = stuTotal[i] /numberOfTests
        if(stuAverage[i] < avgPassMark){
            stuStatus[i] = "failed. Better luck next time.";
        }else if(stuAverage[i]>= avgPassMark && stuAverage[i] <=minDistinctionMark){
            stuStatus[i] ="passed. Congrats!";
        }else if(stuAverage[i]>= minDistinctionMark){
            stuStatus[i] ="passed with a distinction. Awesome!";
        }else{
            stuStatus[i] = "Invalid input";
        } 
        console.clear(); 
    }
    
    for (let i = 0; i < students; i++) {
        console.log(`${stuNames[i]} has ${stuStatus[i]} . With an average of: ${stuAverage[i]} \n`);
    }