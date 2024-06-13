//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

let FirstVar: number, SecondVar: number;

//Reading the character from CommandLine/Terminal
RL.question('Enter the first number\t', (num1) => {
    RL.question('Enter the second number\t', (num2) => {
        FirstVar = parseInt(num1);
        SecondVar = parseInt(num2);

        console.log("Before Swapping, A is " + FirstVar + ", B is " + SecondVar);
        doSwapNumber();
        console.log("After Swapping, A is " + FirstVar + ", B is " + SecondVar);

        RL.close();
    });
});

function doSwapNumber() {
    let tempVar = FirstVar + SecondVar;
    FirstVar = tempVar - FirstVar;
    SecondVar = tempVar - FirstVar;
}