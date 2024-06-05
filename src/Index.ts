//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

//Reading input from CommandLine/Terminal
RL.question('Enter the text\t', (text) => {
    //Printing user input to CommandLine/Terminal
    console.log("You have entered:\t" + text);

    //Calling the function with user input;
    console.log("The text you have entered is " + (isPalindrome(`${text}`) ? "a" : "not a") + " palindrome")

    //Giving the control back to CommandLine/Terminal
    RL.close();
})

//Function which does the logic
function isPalindrome(str: string): boolean {
    let reversedString: string = "";
    let inputCleansed = str.split(" ").join("");
    for (let i = inputCleansed.length - 1; i > -1; --i) {
        reversedString += inputCleansed[i];
    }
    if (inputCleansed == reversedString) return true;
    return false;
}