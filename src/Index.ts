//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

RL.question('Enter the size of square\t', (SquareSize) => {

    printSquare(parseInt(SquareSize));
    RL.close();
});

function printSquare(size: number): void {
    const SquareSize: number = size;

    for (let i = 0; i < SquareSize; i++) {
        let NewLine: string = "";
        for (let j = 0; j < SquareSize; j++) {
            if (i == 0 || i == SquareSize - 1) {
                NewLine += " * ";
            } else {
                NewLine = (j == 0 || j == SquareSize - 1)
                    ?
                    NewLine + " * "
                    :
                    NewLine + " - ";
            }
        }
        console.log(NewLine);
    }
};