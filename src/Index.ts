//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

RL.question('Enter the height of pyramid\t', (Height) => {

    const PyramidHeight: number = parseInt(Height);
    printInvertedPyramidMirror(PyramidHeight);

    RL.close();
});

function printInvertedPyramidMirror(pyramidHeight: number): void {
    const Height: number = pyramidHeight, Width: number = (Height == 1) ? Height : (2 * Height) - 1;

    for (let h = Height; h >= -Height; h--) {

        let DynamicWidth: string = "";

        DynamicWidth += " - ".repeat(Math.ceil(Width / 2) - Math.abs(h));
        DynamicWidth += " * ".repeat(Math.abs(h));

        DynamicWidth += " * ";

        DynamicWidth += " * ".repeat(Math.abs(h));
        DynamicWidth += " - ".repeat(Math.ceil(Width / 2) - Math.abs(h));

        console.log(DynamicWidth);
    }
}