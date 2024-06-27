//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

RL.question('Enter the height of the triangle\t', (height) => {

    const TriangleHeight: number = parseInt(height);
    PrintInvertedRightAngledLeftSidedTriangle(TriangleHeight);

    RL.close();
});


function PrintInvertedRightAngledLeftSidedTriangle(triangleHeight: number): void {
    for (let i = 0; i < triangleHeight; i++) {
        console.log(" * ".repeat(triangleHeight - (i)) + " - ".repeat((i)));
    }
}