let js = "amazing";
console.log(40 + 8 + 23 - 10);
// ctrl shft k == delete a line
// parenthesis == ()
console.log("Jonas");
//                       -- what is different with "" and ''?
// nothing diff
console.log(23);

let first_name = "Hyejeong";
let lastName = "Noh";

console.log(lastName + " " + first_name);
// underscore == _

let _vv$dd = "d";
// real constant should type uppercase(like PI = 3.1415)

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

// change line by holding alt arrow
let job1 = "Programmer";
let job2 = "Teacher";

// ctrl / == do as comments and undo
console.log(myCurrentJob);

// Number == Float in JS
// "" == '' in JS


// undefined == empty value, empty box
// ES2020 bigInt larger valuea that cant hold with Number

// Dynamic typing == automatically determine data type, data type of value is stored into a variable

// value vs variables
// value has type.
// variable doesn't. it just store

/* */

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log('----------------')

// console.log(typeof true);
// console.log(typeof 23);
console.log(typeof javascriptIsFun);
// console.log(typeof 'Noh');

javascriptIsFun = 'Yes!!';
console.log(javascriptIsFun);

console.log('----------------')
let year;
console.log(year);
console.log(typeof year);

year = 1990;
console.log(typeof year);

console.log(typeof null);

console.log('-------- ModernJava Let, Const --------')
// let => can reassigning(mutating), can be empty
// const => can't mutate(immutable), can't be empty
// always use const as base, use let if you have to
// var is old version of let, never use

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2001;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);

// let x = 10 + 12;
// x += 10;
// x *= 3;
// x++;
// console.log(x);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 36);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2000);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2; // parentethis 19, divide 15, plus 14, So, flow HighNum to LowNum
console.log(ageJonas, ageSarah, averageAge); // without (), ageJonas + (ageSarah/2)

//----------------------------------

// Code Exercise_1
// Test1
const markHeight = 1.69;
const markWeight = 78;

const johnHeight = 1.95;
const johnWeight = 92;

const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight * johnHeight);

console.log("markBMI", markBMI);
console.log("johnBMI", johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// Test2
const markHeight2 = 1.88;
const markWeight2 = 95;

const johnHeight2 = 1.76;
const johnWeight2 = 85;

const markBMI2 = markWeight2 / (markHeight2 ** 2);
const johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);

console.log("markBMI2", markBMI2);
console.log("johnBMI2", johnBMI2);

const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2);

//----------------------------------

const firstName = 'HJ';
const job = 'Student';
const birth = 1990;
const yearNow = 2040;

const nhj = "I'm " + firstName + ', a ' + (yearNow - birth) + ' years old ' + job + '!';
console.log(nhj);

// ES6 easy way of multi string concat
const nhjNew = `I'm ${firstName}, ${yearNow - birth} years old  ${job} !`;
console.log(nhjNew);

console.log('String for \n\
multi line\n\
results'); // \n\ == new line

// ES6 multi line !!! BACKTICK !!!
console.log(`this
is
new
line with backtick !!!`);

//---------------------------------

const age = 16;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('You can get Drive License🚗');
} else {
    console.log(`You need to wait ${18 - age} year(s) more!🚗`);
}
// usually use if(age >= 18){}

const birthYear = 1888;
let century;

if (birthYear < 1900) {
    century = 19;
    console.log(century);
} else if (birthYear < 2000) {
    century = 20;
    console.log(century);
} else {
    century = 21;
    console.log(century);
}

//---------------------------------

// Code Exercise_2
// Test1
const heightofMark1 = 1.69;
const massofMark1 = 78;

const heightofJohn1 = 1.95;
const massofjohn1 = 92;

const bmiM1 = massofMark1 / (heightofMark1 ** 2);
const bmiJ1 = massofjohn1 / (heightofJohn1 * heightofJohn1);

const BMIofMark1 = bmiM1.toFixed(2);
const BMIofJohn1 = bmiJ1.toFixed(2);

console.log("BMIofMark1", BMIofMark1);
console.log("BMIofJohn1", BMIofJohn1);

ifTalk1 = `Mark's BMI(${BMIofMark1}) is Higher then John's(${BMIofJohn1}) !!`;
elseTalk1 = `Mark's BMI(${BMIofMark1}) is Lower then John's(${BMIofJohn1}) !`;

if (BMIofMark1 > BMIofJohn1) {
    console.log(ifTalk1);
} else {
    console.log(elseTalk1);
}

// Test2
const heightofMark2 = 1.88;
const massofMark2 = 95;

const heightofJohn2 = 1.76;
const massofjohn2 = 85;

const bmiM2 = massofMark2 / (heightofMark2 ** 2);
const bmiJ2 = massofjohn2 / (heightofJohn2 * heightofJohn2);

const BMIofMark2 = bmiM2.toFixed(2);
const BMIofJohn2 = bmiJ2.toFixed(2);

console.log("BMIofMark2", BMIofMark2);
console.log("BMIofJohn2", BMIofJohn2);

ifTalk2 = `Mark's BMI(${BMIofMark2}) is Higher then John's(${BMIofJohn2}) !!`;
elseTalk2 = `Mark's BMI(${BMIofMark2}) is Lower then John's(${BMIofJohn2}) !`;

if (BMIofMark2 > BMIofJohn2) {
    console.log(ifTalk2);
} else {
    console.log(elseTalk2);
}