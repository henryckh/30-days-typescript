'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    let i: number = 4;
    let d: number = 4.0;
    let s: string = "HackerRank ";
    
    // declare variables
    let myInt: number;
    let myFloat: number;
    let myString: string;
    
    myInt = parseInt(inputLines[0]);
    myFloat = parseFloat(inputLines[1]);
    myString = inputLines[2];
    
    console.log(i + myInt);
    console.log((d + myFloat).toFixed(1));
    console.log(s + myString);
}