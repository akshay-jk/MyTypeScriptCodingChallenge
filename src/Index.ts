//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

//Reading the year from CommandLine/Terminal
RL.question('Enter the year\t', (year) => {

    console.log(year + " is " + (checkIsLeapYear(parseInt(year)) ? "a " : "not a ") + "leap year");

    RL.close();
});

function checkIsLeapYear(year: number): boolean {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}