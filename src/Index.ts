//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

//Reading input from CommandLine/Terminal
RL.question('Enter Your Number\t', (num) => {
    //Printing user input to CommandLine/Terminal
    console.log("You have entered:\t" + num);

    //Calling the function with user input;
    console.log(num + " is " + (isPrimeNumber(parseInt(num)) ? "a" : "not") + " prime number");

    //Giving the control back to CommandLine/Terminal
    RL.close();
})

//Function which does the logic
function isPrimeNumber(num: number): boolean {
    if(num < 1) return false;
    for (let i = 1; i < num; i++) {
        if (i != 1 && num % i == 0) {
            return false;
        }
    };
    return true;
}