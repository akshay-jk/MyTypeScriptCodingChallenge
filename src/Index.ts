//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

//Reading input from CommandLine/Terminal
RL.question('Enter Your Number\t', (num) => {
    //Printing user input to CommandLine/Terminal
    console.log("You have entered:\t" + num);

    //Calling the function with user input;
    const FactorialValue01: number = findFactorial(parseInt(num));
    console.log(FactorialValue01 + " is the factorial of " + num + ". (Normal)");

    //Calling the recursive function with user input;
    const FactorialValue02: number = findFactorialByRecursion(parseInt(num));
    console.log(FactorialValue02 + " is the factorial of " + num + ". (Recursion)");

    //Giving the control back to CommandLine/Terminal
    RL.close();
})

//Function which does the logic
function findFactorial(num: number): number {
    // Factorial of 0 and 1 is 1;
    if (num == 0 || num == 1) return 1;

    //Factorial calculation of numbers greater than 2
    let factorialNum = 1;
    for (let i = num; i > 1; --i) factorialNum *= i;
    return factorialNum;
}

//Function which does the logic using recursion
function findFactorialByRecursion(num: number) {
    // Factorial of 0 and 1 is 1;
    if (num == 0 || num == 1) return 1;

    //Factorial calculation of numbers greater than 2
    return num * findFactorialByRecursion(num - 1);
}