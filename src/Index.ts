//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

//Reading the character from CommandLine/Terminal
RL.question('Enter the limit\t', (limit) => {

    doPrintNaturalNumbers(parseInt(limit));
    RL.close();
});


function doPrintNaturalNumbers(limit: number): void {
    let str: string = '';
    for (let i = 1; i <= limit; i++)
        str += `${i} `;
    console.log(str);
}