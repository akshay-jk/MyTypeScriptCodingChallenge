//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

//Reading the character from CommandLine/Terminal
RL.question('Enter the limit\t', (limit) => {

    let FibonacciSeries: Array<Number> = printFibonacciSeries(parseInt(limit));
    console.log(...FibonacciSeries);

    RL.close();
});

function printFibonacciSeries(limit: number): Array<Number> {
    let previousValue: number = 0, presentValue: number = 1;
    let resultantArray: Array<Number> = [];
    while (resultantArray.length < limit) {
        if (resultantArray.length == 0) {
            resultantArray.push(previousValue, presentValue);
        } else {
            let nextValue = previousValue + presentValue;
            resultantArray.push(nextValue);
            previousValue = presentValue;
            presentValue = nextValue;
        }
    }

    return resultantArray;
}