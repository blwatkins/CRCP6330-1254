import P5Lib from 'p5';

function printString(token: string): void {
    console.log(`token = ${token}`);
}

function sketch(p5: P5Lib) {
    // let p5Random = p5.random;
    let fruits: string[] = ['apple', 'banana', 'cherry'];

    p5.setup = () => {
        p5.createCanvas(720, 720);
        // let x = p5Random(0, p5.width);
        // console.log(`x = ${x}`);

        // for loop
        for (let i: number = 0; i < fruits.length; i++) {
            console.log(`fruits[${i}] = ${fruits[i]}`);
        }

        // for...of loop
        for (const fruit of fruits) {
            console.log(`fruit = ${fruit}`);
        }

        // forEach method
        // function parameter: accepts a parameter of your element type and has a void return type
        fruits.forEach(printString);

        fruits.forEach((fruit: string, index: number): void => {
            console.log(`fruit[${index}] = ${fruit}!`);
        });
    }

    p5.draw = () => {
        p5.background(0, 0, 255);
    }

    p5.mousePressed = () => {

    }

    p5.keyPressed = () => {

    }
}

new P5Lib(sketch);
