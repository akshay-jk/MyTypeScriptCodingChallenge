//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

RL.question('Enter the height of pyramid\t', (height) => {
    printPyramid(parseInt(height));
    RL.close();
});

function printPyramid(pyramidHeight: number): void {
    for (let i = 0; i < pyramidHeight; i++) {
        let PyramidLine = "";

        let NumberOfHyphens = pyramidHeight - (i + 1), NumberOfStar = i;

        PyramidLine += " - ".repeat(NumberOfHyphens);
        PyramidLine += " * ".repeat(NumberOfStar);
        PyramidLine += " * ";
        PyramidLine += " * ".repeat(NumberOfStar);
        PyramidLine += " - ".repeat(NumberOfHyphens);

        console.log(PyramidLine);
    }
}