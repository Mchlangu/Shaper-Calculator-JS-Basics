
let numbers = "1,4,5,10"

if(numbers == "1,4,5,10"){
    let numArr = numbers.split(",");

    let sum = 0;
    for (let i = 0; i < numbers.split(",").length; i++) {
        sum = sum + parseInt(numArr[i]);
    }
    return sum;
}
