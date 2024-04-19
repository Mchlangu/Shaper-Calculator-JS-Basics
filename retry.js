const prompt = require('prompt-sync')()



    function addNums(numX, numY){
        return numX + numY;
    }
    function subNums(numX, numY){
        return numX - numY
    }
    function divideNums(numX, numY){
        return numX / numY
    }
    function muliplytNums(numX, numY){
        return numX * numY;
    }



var firstNum = parseFloat(prompt("Enter first number: "));
var secNum = parseFloat(prompt("Enter second number: "));
var operator = prompt("Enter operator: + - * / ")
var results = 0;

switch (operator) {
    case '+':
        results = addNums(firstNum, secNum);
        break;
    case '-':
        results = subNums(firstNum, secNum);
    case '/':
        results = divideNums(firstNum, secNum);
    case '*':
        results = muliplytNums(firstNum, secNum);
    default:
        break;
}

var number = "55,58,10,11";
var numArr = number.split(",");

console.log(numArr[1]);


console.log(results);