//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

//Reading the character from CommandLine/Terminal
RL.question('Enter the first number\t', (num1) => {
    RL.question('Enter the second number\t', (num2) => {
        const FirstNumber: number = parseInt(num1);
        const SecondNumber: number = parseInt(num2);

        const HighestCommonFactor: number = findHighestCommonFactor(FirstNumber, SecondNumber);
        const LowestCommonMultiple: number = findLowestCommonMultiple(FirstNumber, SecondNumber);

        console.log("The highest common factor is " + HighestCommonFactor);
        console.log("The lowest common multiple is " + LowestCommonMultiple);

        RL.close();
    });
});

function findHighestCommonFactor(NumOne: number, NumTwo: number): number {
    let ExpectedValue: number = Math.min(NumOne, NumTwo);
    while (ExpectedValue > 0) {
        if (NumOne % ExpectedValue == 0 && NumTwo % ExpectedValue == 0)
            break;
        ExpectedValue--;
    }
    return ExpectedValue;
}

function findLowestCommonMultiple(NumOne: number, NumTwo: number): number {
    let ExpectedValue: number = Math.max(NumOne, NumTwo);
    while (ExpectedValue <= findProduct(NumOne, NumTwo)) {
        if (ExpectedValue % NumOne == 0 && ExpectedValue % NumTwo == 0)
            break;
        ExpectedValue++;
    }
    return ExpectedValue;
}

function findProduct(NumOne: number, NumTwo: number): number {
    return NumOne * NumTwo;
}