//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

//Reading the character from CommandLine/Terminal
RL.question('Enter the limit\t', (limit) => {

    doPrintNaturalNumbersInDescOrder(parseInt(limit));
    RL.close();
});

function doPrintNaturalNumbersInDescOrder(limit: number): void {
    console.log(limit);
    if (limit > 1) doPrintNaturalNumbersInDescOrder(limit - 1);
}