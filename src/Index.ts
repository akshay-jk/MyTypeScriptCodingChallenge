//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

//Reading input from CommandLine/Terminal
RL.question('Enter Your Number\t', (num) => {
    //Printing user input to CommandLine/Terminal
    console.log("You have entered:\t" + num);

    //Calling the function with user input;
    const PrimeNumbers = [];

    if (parseInt(num) <= 2) {
        console.log("The lowest prime number is 2");
    } else {
        for (let i = 2; i < parseInt(num); i++) {
            if (isPrimeNumber(i)) PrimeNumbers.push(i);
        }
        console.log(PrimeNumbers, " are the prime numbers between 0 and " + num);
    }


    //Giving the control back to CommandLine/Terminal
    RL.close();
})

//Function which does the logic
function isPrimeNumber(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    };
    return true;
}