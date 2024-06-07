//Clearing the CommandLine/Terminal
console.clear();

import * as Readline from 'node:readline';

const RL = Readline.createInterface({ input: process.stdin, output: process.stdout });

//Reading length from CommandLine/Terminal
RL.question('Enter the length\t', (length) => {

    //Reading breadth from CommandLine/Terminal
    RL.question('Enter the breadth\t', (breadth) => {

        //Confirming whether square or rectangle
        const QuadrilateralName: string = (length == breadth ? "Square" : "Rectangle");

        //Printing Perimeter
        console.log("The Perimeter of " + QuadrilateralName + " is " + doCalculatePerimeter(parseInt(length), parseInt(breadth)));

        //Printing Area
        console.log("The Area of " + QuadrilateralName + " is " + doCalculateArea(parseInt(length), parseInt(breadth)));

        RL.close();
    })
});

// Function that calculates perimter
function doCalculatePerimeter(length: number, breadth: number): number {
    return 2 * (length + breadth);
}

// Function that calculates area
function doCalculateArea(length: number, breadth: number): number {
    return length * breadth;
}