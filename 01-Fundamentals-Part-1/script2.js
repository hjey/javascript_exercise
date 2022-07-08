// Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear); // num, string
console.log(Number(inputYear) + 18); // 2009 as num
console.log(Number('nhj')); // NaN == Not a Number
console.log(typeof NaN); // Number
console.log(String(23), 23); // String, Num
// means Not a Number but is Number Type


// Type Coercion
console.log('I am ' + 23 + 'years old');
// if type mixed String and Number, all type is String
console.log('23' - '10' - 3); // 10
// (-) makes String to Number
console.log('23' + '10' + 3); // 23103
// (+) makes Number to String
console.log('23' * '2'); // 46
console.log('23' / '2'); // 11.5


let n = '1' + 1;
n = n - 1;
console.log(n); // 10

// 5 falsy Values : 0, '', undefined, null, NaN
console.log(Boolean({})); // object T
console.log(Boolean('')); // F
console.log(Boolean('nhj')); // T
console.log(Boolean(undefined)); // F
console.log(Boolean(4)); // T
console.log(Boolean(NaN)); // F

const money = 100;
if (money) {
    console.log("don't spend it all !");
} else {
    console.log('you should get a job');
} // Boolean first


let height = 0;
// let height;
if (height) {
    console.log('Yay, defined');
} else {
    console.log('undefined');
} // undefined BC 0 is falsy value

//---------------------
const age = 18;

if (age === '18') {
    console.log('its ===');
} else if (age == '18') {
    console.log('its ==');
} else {
    console.log('none of it');
} // coercion worked (==)

/*
    === : strict equals(no type coercion) --> USE THIS
    == : loose equals(does type coercion)

    !== : strict version ifnot
    != : loosen version ifnot
*/

const favorite = Number(prompt('What is your favorite number?'));
console.log(favorite);
console.log(typeof favorite); // string

if (favorite === 23) {
    console.log('23 is good number!!');
} else if (favorite === 7) {// coercion worked '23' == 23  
    console.log('7 is also good number!!');
} else {
    console.log('number is 23 nor 7');
}

if (favorite !== 23) {
    console.log('number is not 23');
} else if (favorite !== 7) {
    console.log('number is also not 7');
}
