//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';
const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

RL.question("Enter the array elements\t", (input) => {
    const SortedArray: Array<number> = input.split(' ').map(n => parseInt(n));
    BubbleSort(SortedArray);

    RL.close();
});

function BubbleSort(ArrAsInput: Array<number>): void {
    const ArrLen: number = ArrAsInput.length;
    for (let a of ArrAsInput) {
        for (let i = 0; i < ArrLen - 1; i++) {
            if (ArrAsInput[i] > ArrAsInput[i + 1]) {
                ArrAsInput[i] = ArrAsInput[i] + ArrAsInput[i + 1];
                ArrAsInput[i + 1] = ArrAsInput[i] - ArrAsInput[i + 1];
                ArrAsInput[i] = ArrAsInput[i] - ArrAsInput[i + 1];
            }
        }
    }

    console.log(ArrAsInput);
}