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
            console.log("Total Interest : " + SimpleInterest);
            console.log("Amount to be repaid : " + (parseInt(amount) + SimpleInterest));
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