console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

RL.question('Enter Your Number\t', (number) => {
    console.log("You have entered : \t" + number);
    checkParity(parseInt(number));
    RL.close();
})

function checkParity(num: number): void {
    console.log(num + " is an " + (num % 2 == 0 ? "EVEN" : "ODD") + " number");
}