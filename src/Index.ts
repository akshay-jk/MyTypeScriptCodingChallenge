//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

//Reading the character from CommandLine/Terminal
RL.question('Enter the character\t', (char) => {

    console.log("Input is a " + (isVowel(char) ? "VOWEL" : "CONSONANT"));

    RL.close();
});

function isVowel(char: string): boolean {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let vw of vowels)
        if (char.toLowerCase() == vw)
            return true;
    return false;
}