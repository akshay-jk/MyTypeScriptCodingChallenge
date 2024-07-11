//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';
const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

RL.question("Enter the array elements\t", (input) => {
    const SortedArray: Array<number> = input.split(' ').map(n => parseInt(n));
    SelectionSort(SortedArray);

    RL.close();
});

function SelectionSort(Arr: number[]): void {
    let ArrIndexPointer: number = 0;
    while (ArrIndexPointer < Arr.length) {
        let SmallestIntegerIndex: number = ArrIndexPointer;

        for (let i = ArrIndexPointer; i < Arr.length; i++) {
            if (Arr[i] < Arr[SmallestIntegerIndex]) {
                SmallestIntegerIndex = i;
            }
        }
        if (SmallestIntegerIndex != ArrIndexPointer) {
            Arr[ArrIndexPointer] = Arr[ArrIndexPointer] + Arr[SmallestIntegerIndex];
            Arr[SmallestIntegerIndex] = Arr[ArrIndexPointer] - Arr[SmallestIntegerIndex];
            Arr[ArrIndexPointer] = Arr[ArrIndexPointer] - Arr[SmallestIntegerIndex];
        }

        console.log(Arr);

        ArrIndexPointer += 1;
    }
}