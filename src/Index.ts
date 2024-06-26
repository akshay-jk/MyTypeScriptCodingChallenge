//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

RL.question('Enter the height of pyramid\t', (height) => {
    printMirrorPyramid(parseInt(height));
    RL.close();
});

function printMirrorPyramid(pyramidHeight: number): void {
    
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

    for (let i = 0; i < pyramidHeight; i++) {
        let PyramidLine = "";

        let NumberOfHyphens = i, NumberOfStar = pyramidHeight - (i + 1);

        PyramidLine += " - ".repeat(NumberOfHyphens);
        PyramidLine += " * ".repeat(NumberOfStar);
        PyramidLine += " * ";
        PyramidLine += " * ".repeat(NumberOfStar);
        PyramidLine += " - ".repeat(NumberOfHyphens);

        console.log(PyramidLine);
    }
}