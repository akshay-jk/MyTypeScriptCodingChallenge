//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

RL.question("Enter the array elements followed by space\t", (input) => {
    const Arr: Array<number> = input.split(' ').map(n => parseInt(n));

    RL.question("Enter the array elements to be searched\t", (key) => {
        const searchKey: number = parseInt(key);

        LinearSearch(Arr, searchKey);

        RL.close();
    });
});

function LinearSearch(arr: Array<number>, searchKey: number): void {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == searchKey) {
            console.log(i + 1);
            return;
        }
    }

    console.log(searchKey + " is not present");

}