//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';
const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

RL.question("Enter the array elements\t", (input) => {
    const UnsortedArray: Array<number> = input.split(' ').map(n => parseInt(n));
    InsertionSort(UnsortedArray);

    RL.close();
});

function InsertionSort(ArrayToBeSorted: number[]): void {
    console.log(ArrayToBeSorted);
    for (let i = 1; i < ArrayToBeSorted.length; i++) {
        let ArrPointer: number = i;
        while (ArrPointer > 0) {
            if (ArrayToBeSorted[ArrPointer - 1] > ArrayToBeSorted[ArrPointer]) {
                ArrayToBeSorted[ArrPointer - 1] = ArrayToBeSorted[ArrPointer - 1] + ArrayToBeSorted[ArrPointer];
                ArrayToBeSorted[ArrPointer] = ArrayToBeSorted[ArrPointer - 1] - ArrayToBeSorted[ArrPointer];
                ArrayToBeSorted[ArrPointer - 1] = ArrayToBeSorted[ArrPointer - 1] - ArrayToBeSorted[ArrPointer];
                ArrPointer = ArrPointer - 1;
            } else {
                break;
            }
        }

        console.log(ArrayToBeSorted);
    }
}