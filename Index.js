const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// How to accept user input from commandline
rl.question("Enter Your Name?\t", (name) => {
    console.log("You have entered as " + name);
    rl.question("Enter Your Age?\t", (age) => {
        const BornYear = new Date().getFullYear() - parseInt(age);
        console.log("You were born in " + BornYear);
        rl.close();
    });
});