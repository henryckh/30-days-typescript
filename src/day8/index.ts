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
    let queries = new Map<string, number>();
    let n: number = parseInt(inputLines[0], 10);
    for (let i = 1; i <= n; i++) {
        queries.set(inputLines[i].split(' ')[0], Number(inputLines[i].split(' ')[1]));
    }
    for (let j = n + 1; j < inputLines.length; j++) {
        let query = inputLines[j];
        console.log(!queries.get(query) ? 'Not found' : `${query}=${queries.get(query)}`);
    }
}
