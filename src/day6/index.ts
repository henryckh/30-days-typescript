'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    for (let i = 0; i < inputLines.length; i++) {
        const charArray = inputLines[i].split('');
        let oddIndexedString: string = '';
        let evenIndexedString: string = '';
        if (!isNaN(Number(inputLines[i]))) continue;
        for (let j = 0; j < charArray.length; j++) {
            if (j % 2 == 0) evenIndexedString += charArray[j];
            if (j % 2 != 0) oddIndexedString += charArray[j];
        }
        console.log(evenIndexedString + ' ' + oddIndexedString);
    }
}
