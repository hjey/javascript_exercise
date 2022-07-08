'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I cant drive!');

//const interface = 'Audio';
//const private = 534;


// function is for Reuse
function logger() {
    console.log('my name is hj');
}
// calling / running / invoking function
logger(22);
logger();

/*
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
    return juice;
}
// 결과값이 return값, 그래서 펑션만 적으면 리턴값이 나오지 않음
// 결과값을 저장할 공간을 지정해야 값이 나옴
const appleJuice = fruitProcessor(22, 0);
console.log(appleJuice);
console.log(fruitProcessor(22, 0)); // 그냥보여줄뿐 값을 저장하지는 못함. 일회성

const appleOrangeJuice = fruitProcessor(2, 5);
console.log(appleOrangeJuice);

const num = Number('23'); // to check, just type in F12 console


// function declaration
function calcAge1(birthYear) {
    //const age = 2037 - birthYear;
    //return age;

    return 2037 - birthYear;
}

const age1 = calcAge1(1997);
console.log(age1);

// anonymous function
// function expression -> produce value
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);
// function is value, not type
// declaration work const function flow
// expression work function const flow
// 순서가 확실한 function expression이 Clean Code하기에 좋다.


// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const nowYear = 2022;
    const retirement = (birthYear + 60) - nowYear;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1990, 'Noh'));
console.log(yearUntilRetirement(1980, 'Chris'));
*/

function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces}cut of apples, and ${orangePieces}cut of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 60 - age;

    // return immidiatly out the process
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🌈`);
        return -1;
        //return `${firstName} retires in ${retirement} years`;
    }
}
console.log(yearsUntilRetirement(1990, 'joanna'));
console.log(yearsUntilRetirement(1960, 'dave'));
// option + arrow = move a single line
// option + command + arrow = hold block a line more
// add next occurance ??? select one word as group


// test1
const calcAverage = (score1, score2, score3) =>
    (score1 + score2 + score3) / 3;

function calcAvg(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

const data1_dph = calcAverage(44, 23, 71);
const data1_kla = calcAverage(65, 54, 49);
console.log('dph avg score : ', data1_dph, ' kla avg score : ', data1_kla);

const data2_dph = calcAvg(85, 54, 41);
const data2_kla = calcAvg(23, 34, 27);
console.log('dph avg score : ', data2_dph, ' kla avg score : ', data2_kla);

function checkWinner(dataK, dataD) {
    if (dataD >= dataK * 2) {
        console.log(`dfn wins! ${dataD}`);
    } else if (dataK >= dataD * 2) {
        console.log('kla wins!');
    } else {
        console.log('draw, or not enough score');
    }
}

checkWinner(data1_kla, data1_dph);
checkWinner(data2_kla, data2_dph);


//---------------------
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(friends.length); // 0~2, tot 3
console.log(friends[friends.length - 1]); // []안이라 수가 들어감, 2자리의 값

const years = new Array(1991, 1984, 2008, 2020);
console.log(years[0]);

friends[2] = 'Jay';
console.log(friends);

const firstname = 'jonas';
const jonas = [firstname, 'shhmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);

const years2 = [1990, 1991, 2002, 1959, 2034];
console.log(calcAge(years2)); // const + num doesnt work

const yearsAge1 = calcAge(years2[0]);
const yearsAge2 = calcAge(years2[1]);
const yearsAge3 = calcAge(years2[years2.length - 1]);
console.log(yearsAge1, yearsAge2, yearsAge3);

const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])];
console.log(ages);

//-----------------
// add elements 
// last
const newLength = friends.push('Laura');
console.log(friends);
console.log(newLength); // length
// first
friends.unshift('Misha');
console.log(friends);


// remove elements
// last
friends.pop();
const popped = friends.pop();
console.log(popped); // name
console.log(friends);
// first
friends.shift();
console.log(friends);

// if it is not there, value is -1
console.log(friends.indexOf('Steven'));

// ES6
console.log(friends.includes('Michael')); // T/F

friends.push(33);
console.log(friends.includes('33')); // F

