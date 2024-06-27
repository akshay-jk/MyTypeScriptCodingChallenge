//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

RL.question('Enter the height of the triangle\t', (height) => {

    const TriangleHeight: number = parseInt(height);
    PrintInvertedRightAngledRightSidedTriangle(TriangleHeight);

    RL.close();
});


function PrintInvertedRightAngledRightSidedTriangle(triangleHeight: number): void {
    for (let i = 0; i < triangleHeight; i++) {
        console.log(" - ".repeat(i) + " * ".repeat(triangleHeight - i));
    }
}