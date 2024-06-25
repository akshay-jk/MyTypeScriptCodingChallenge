//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

RL.question('Enter the depth of pyramid\t', (depth) => {
    printInvertedPyramid(parseInt(depth));
    RL.close();
});

function printInvertedPyramid(pyramidDepth: number): void {
    for (let i = 0; i < pyramidDepth; i++) {
        let PyramidLine = "";

        let NumberOfHyphens = i, NumberOfStar = pyramidDepth - (i + 1);

        PyramidLine += " - ".repeat(NumberOfHyphens);
        PyramidLine += " * ".repeat(NumberOfStar);
        PyramidLine += " * ";
        PyramidLine += " * ".repeat(NumberOfStar);
        PyramidLine += " - ".repeat(NumberOfHyphens);

        console.log(PyramidLine);
    }
}