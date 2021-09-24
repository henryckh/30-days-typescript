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

class Person {
    private age: number;

    constructor(initialAge: number) {
        if (initialAge >= 0) {
            this.age = initialAge;
        } else {
            this.age = 0;
            console.log('Age is not valid, setting age to 0.');
        }
    }

    yearPasses(): void {
        this.age = this.age + 1;
    }

    amIOld(): void {
        if (this.age < 13) {
            console.log('You are young.');
        } else if (this.age >= 13 && this.age < 18) {
            console.log('You are a teenager.');
        } else {
            console.log('You are old.');
        }
    }
}

function main() {
    for (let j = 1; j < inputLines.length; j++) {
        const p = new Person(Number(inputLines[j]));
        p.amIOld();
        for (let i = 0; i < 3; i++) {
            p.yearPasses();
        }
        p.amIOld();
        if (j != 4) console.log('');
    }
}
