//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

//Reading input from CommandLine/Terminal
RL.question('Enter the Principle Amount\t', (amount) => {

    //Reading input from CommandLine/Terminal
    RL.question('Enter the Rate\t', (rate) => {

        //Reading input from CommandLine/Terminal
        RL.question('Enter the Tenure\t', (tenure) => {

            //Calling the function with user input
            const SimpleInterest: number = doCalculateSimpleInterest(parseInt(rate))(parseInt(tenure))(parseInt(amount));
            console.log("-------------------------------------");
            console.log("Principle Amount : " + amount);
            console.log("Total Interest (Simple): " + SimpleInterest);
            console.log("Amount to be repaid : " + (parseInt(amount) + SimpleInterest));
            console.log("-------------------------------------");

            const CompoundInterest: number = doCalculateCompoundInterest(parseInt(amount), parseInt(rate), parseInt(tenure));
            console.log("-------------------------------------");
            console.log("Principle Amount : " + amount);
            console.log("Total Interest (Compound) : " + CompoundInterest);
            console.log("Amount to be repaid : " + (parseInt(amount) + CompoundInterest));
            console.log("-------------------------------------");

            //Giving the control back to CommandLine/Terminal
            RL.close();
        })
    })
})

function doCalculateSimpleInterest(rate: number) {
    return function (tenure: number) {
        return function (amount: number) {
            return (amount * tenure * rate) / 100;
        }
    }
}

function doCalculateCompoundInterest(amount: number, rate: number, tenure: number): number {
    return (amount * (Math.pow((1 + ((rate / 100) / 12)), (12 * tenure)))) - amount;
}