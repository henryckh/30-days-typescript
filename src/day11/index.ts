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

function main(): void {
    let arr: number[][] = Array(6);
    for (let i: number = 0; i < 6; i++) {
        arr[i] = readLine()
            .replace(/\s+$/g, '')
            .split(' ')
            .map(arrTemp => parseInt(arrTemp, 10));
    }

    const sumArray: Array<number> = [];
    for (let i: number = 0; i < arr.length; i++) {
        for (let j: number = 0; j < arr[i].length; j++) {
            if (arr[i] && arr[i + 1] && arr[i + 2]) {
                if (arr[i][j + 1] != undefined && arr[i][j + 2] != undefined) {
                    sumArray.push(arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]);
                }
            }
        }
    }
    console.log(Math.max.apply(null, sumArray));
}
