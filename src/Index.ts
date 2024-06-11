//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';
import { ComplexNumber } from './Entity'

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

//Reading real part from CommandLine/Terminal
RL.question('Enter the real part of first number\t', (RealPartFirstNumber) => {

    //Reading imaginary part from CommandLine/Terminal
    RL.question('Enter the imaginary part of first number\t', (ImaginaryPartFirstNumber) => {

        const ComplexNo = new ComplexNumber(parseInt(RealPartFirstNumber), parseInt(ImaginaryPartFirstNumber));

        //Reading real part from CommandLine/Terminal
        RL.question('Enter the real part of second number\t', (RealPartSecondNumber) => {

            ComplexNo.addRealPart(parseInt(RealPartSecondNumber));

            //Reading imaginary from CommandLine/Terminal
            RL.question('Enter the imaginary part of second number\t', (ImaginaryPartSecondNumber) => {

                ComplexNo.addImaginaryPart(parseInt(ImaginaryPartSecondNumber));
                ComplexNo.showDetails();

                RL.close();
            })
        });

    })
});