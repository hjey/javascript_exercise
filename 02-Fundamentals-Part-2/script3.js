'use strict';
/*
console.log('Lifting weights repetition 1 ✨');
console.log('Lifting weights repetition 2 ✨');
console.log('Lifting weights repetition 3 ✨');
console.log('Lifting weights repetition 4 ✨');
console.log('Lifting weights repetition 5 ✨');
console.log('Lifting weights repetition 6 ✨');
console.log('Lifting weights repetition 7 ✨');
console.log('Lifting weights repetition 8 ✨');
console.log('Lifting weights repetition 9 ✨');
console.log('Lifting weights repetition 10 ✨');
*/

// for loop keeps running while condition is True
for (let rep = 1; rep <= 10; rep++) {
    console.log('Lifting weights repetition ' + rep + ' ✨');
}

// Object
const jonas = [
    'jonas',
    'schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];


for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i]); // unshift말고 push써야 확실
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('-- String Only --');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue; //continue loop, 스트링이 아니면 if문 통과(= 콘솔찍기)
    console.log(jonas[i], typeof jonas[i]);
}
console.log('-- Number Only --');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break; // break, i의 타입이 넘버면 모두 정지
    console.log(jonas[i], typeof jonas[i]);
}

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

// Mini Test
const workOuts = ['ex1', 'ex2', 'ex3', 'ex4'];
for (let i = 0; i < workOuts.length; i++) {
    console.log(`-- ${workOuts[i]} --`);
    for (let k = 1; k <= 5; k++) {
        console.log(workOuts[i] + ' : ' + k, 'time tried 🐱‍🏍');
    }
}

// While
let i = 1;
while (i < workOuts.length) {
    console.log(`-- ${workOuts[i]} --`);
}