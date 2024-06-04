//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

//Reading input from CommandLine/Terminal
RL.question('Enter Your Number\t', (num) => {
    //Printing user input to CommandLine/Terminal
    console.log("You have entered:\t" + num);

    //Calling the function with user input;
    console.log(num + " is " + (isArmstrongNumber(parseInt(num)) ? "an" : "not an") + " armstrong number");

    //Giving the control back to CommandLine/Terminal
    RL.close();
})

//Function which does the logic
function isArmstrongNumber(num: number): boolean {
    let inputNum = num;
    let aggregateValue = 0;
    while (inputNum != 0) {
        aggregateValue = aggregateValue + (doCube(Math.floor(inputNum % 10)));
        inputNum = inputNum / 10;
    }

    if (num == aggregateValue) return true;
    return false;
}

function doCube(num: number): number {
    return Math.pow(num, 3);
}