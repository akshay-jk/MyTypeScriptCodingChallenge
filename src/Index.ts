//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

RL.question("Enter the array elements\t", (input) => {
    const SortedArray: Array<number> = input.split(' ').map(n => parseInt(n));

    RL.question("Enter the search key\t", (key) => {
        const SearchKey: number = parseInt(key);

        BinarySearch(SortedArray, SearchKey);

        RL.close();
    });
});

function BinarySearch(arr: Array<number>, key: number): void {
    let LowerLimit: number = 0, UpperLimit: number = arr.length - 1;
    while (LowerLimit != UpperLimit) {
        let MiddleIndex = Math.floor((UpperLimit + LowerLimit) / 2);
        if (arr[MiddleIndex] == key) {
            console.log('Key present at index ' + MiddleIndex);
            return;
        } else {
            if (key > arr[MiddleIndex]) {
                LowerLimit = MiddleIndex + 1;
            } else {
                UpperLimit = MiddleIndex - 1;
            }
        }
    }
    console.log("Key not present");
}