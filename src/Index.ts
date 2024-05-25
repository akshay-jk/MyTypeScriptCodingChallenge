import * as R from 'node:readline';

const ReadLine = R.createInterface({
    input: process.stdin,
    output: process.stdout
});

// How to accept user input from commandline
ReadLine.question("Enter Your Name?\t", (name) => {
    ReadLine.question("Enter Your Age?\t", (age) => {
        const BornYear = new Date().getFullYear() - parseInt(age);
        
        console.log("You have entered as " + name);
        console.log("You were born in " + BornYear);

        ReadLine.close();
    });
});