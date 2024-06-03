//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

//Reading input from CommandLine/Terminal
RL.question('Enter Your Number\t', (num) => {
    //Printing user input to CommandLine/Terminal
    console.log("You have entered:\t" + num);

    //Calling the function with user input;
    console.log(num + " is " + (isNeonNumber(parseInt(num)) ? "a" : "not a") + " neon number");

    //Giving the control back to CommandLine/Terminal
    RL.close();
})

//Function which does the logic
function isNeonNumber(num: number): boolean {
    let userInput: number = num;
    let squareOfInput = doSquare(userInput);
    let sumOfDigits = doDigitSum(squareOfInput);
    if (userInput == sumOfDigits) return true;
    return false;
}

function doSquare(num: number): number {
    return Math.pow(num, 2);
}

function doDigitSum(num: number): number {
    let Inp = num;
    let digitSum = 0;
    while (Inp != 0) {
        digitSum = digitSum + (Inp % 10);
        Inp = Math.floor(Inp / 10);
    }
    return digitSum;
}