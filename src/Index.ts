//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

RL.question('Enter the limit\t', (limit) => {

    printRightTriangle(parseInt(limit));

    RL.close();
});

function printRightTriangle(triangleHeight: number): void {
    for (let i = 1; i <= triangleHeight; i++) {
        console.log("- ".repeat(triangleHeight - (i)) + "* ".repeat(i))
    }
}