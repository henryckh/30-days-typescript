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

function dec2bin(dec: number) {
  return Number(dec).toString(2);
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);
    let count = 0;
    let maxCount = 0;
    let str = dec2bin(n);
    for (let i = 0; i < str.length ; i ++) {
        str.charAt(i) == '1' ? count++ : count = 0;
        if (count > maxCount)
            maxCount = count
    }
    console.log(maxCount);
}
