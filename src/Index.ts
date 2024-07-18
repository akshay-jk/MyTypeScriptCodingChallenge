//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';
const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

RL.question("Enter the array elements\t", (input) => {

    const UnsortedArray: Array<number> = input.split(' ').map(n => parseInt(n));
    console.log("Array before sorting");
    console.log(UnsortedArray);
    console.log();

    MergeSort(UnsortedArray, 0, UnsortedArray.length - 1);
    console.log("Array after sorting");
    console.log(UnsortedArray);

    RL.close();
});

function MergeSort(UnsortedArray: number[], StartIndex: number, EndIndex: number): void {
    if (StartIndex >= EndIndex) return;

    let MidIndex: number = Math.floor((EndIndex + StartIndex) / 2);
    MergeSort(UnsortedArray, StartIndex, MidIndex);
    MergeSort(UnsortedArray, MidIndex + 1, EndIndex);
    Merge(UnsortedArray, StartIndex, MidIndex, EndIndex);
}

function Merge(Arr: number[], StartIndex: number, MiddleIndex: number, EndIndex: number): void {
    let FirstArrayLength: number = MiddleIndex - StartIndex + 1;
    let SecondArrayLength: number = EndIndex - MiddleIndex;

    let i: number = 0, j: number = 0, k: number = StartIndex;
    let lArr: number[] = [], rArr: number[] = [];

    for (let x = 0; x < FirstArrayLength; x++) {
        lArr.push(Arr[StartIndex + x]);
    }

    for (let y = 0; y < SecondArrayLength; y++) {
        rArr.push(Arr[MiddleIndex + 1 + y]);
    }

    while (i < FirstArrayLength && j < SecondArrayLength) {
        if (lArr[i] <= rArr[j]) {
            Arr[k] = lArr[i];
            i++;
        } else {
            Arr[k] = rArr[j];
            j++;
        }
        k += 1;
    }

    while (i < FirstArrayLength) {
        Arr[k] = lArr[i];
        i++;
        k += 1
    }

    while (j < SecondArrayLength) {
        Arr[k] = rArr[j];
        j++;
        k += 1;
    }
}