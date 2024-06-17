//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

//Reading the character from CommandLine/Terminal
RL.question('Enter the limit\t', (limit) => {

    doPrintNaturalNumbersInAscOrder(parseInt(limit));
    RL.close();
});


function doPrintNaturalNumbersInAscOrder(limit: number): void {
    if (limit > 1) doPrintNaturalNumbersInAscOrder(limit - 1);
    console.log(limit);
}