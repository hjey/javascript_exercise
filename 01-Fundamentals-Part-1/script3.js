const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
// AND
console.log(hasDriverLicense || hasGoodVision);
// OR
console.log(!hasDriverLicense);
// NOT


if (hasDriverLicense && hasGoodVision) { //(shoudlDrive)면 OR
    console.log('can drive');
} else {
    console.log('can not drive');
}

const isTired = false;
console.log(hasDriverLicense || hasGoodVision || isTired); // T

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('can drive');
} else {
    console.log('can not drive');
}

// Test1
const dfnAvg1 = (96 + 108 + 89) / 3;
const avgDolphin = dfnAvg1.toFixed(2);
const klaAvg1 = (88 + 91 + 110) / 3;
const avgKoala = klaAvg1.toFixed(2);

if (avgDolphin > avgKoala) {
    console.log(avgDolphin, avgKoala, 'Dolphin Wins!');
} else if (avgKoala > avgDolphin) {
    console.log(avgDolphin, avgKoala, 'Koala Wins!');
} else {
    console.log('Draw!!');
}

// Test2
const a = 97;
const b = 112;
const c = 101;
avgD = (a + b + c) / 3;

const x = 109;
const y = 95;
const z = 123;
avgK = (x + y + z) / 3;


if ((a >= 100) && (x >= 100)) {
    if (a > x) {
        console.log('Dfn get 1 score!');
    } else if (x > a) {
        console.log('Kla get 1 score!');
    } else {
        console.log('tie');
    }
} else {
    console.log('atlast one of num is under the min');
}
if ((b >= 100) && (y >= 100)) {
    if (b > y) {
        console.log('Dfn get 1 score!');
    } else if (y > b) {
        console.log('Kla get 1 score!');
    } else {
        console.log('tie');
    }
} else {
    console.log('atlast one of num is under the min');
}
if ((c >= 100) && (z >= 100)) {
    if (c > z) {
        console.log('Dfn get 1 score!');
    } else if (z > c) {
        console.log('Kla get 1 score!');
    } else {
        console.log('tie');
    }
} else {
    console.log('atlast one of num is under the min');
}
console.log('----- test2 end -----');
// Test3
const x1 = 97;
const x2 = 112;
const x3 = 101;

const y1 = 109;
const y2 = 95;
const y3 = 106;

if ((x1 >= 100) && (y1 >= 100)) {
    if (x1 > y1) {
        console.log('Dfn got 1 score!');
    } else if (y1 > x1) {
        console.log('Kla got 1 score!');
    } else {
        console.log('Tie!');
    }
} else {
    console.log('some num is under min');
}
if ((x2 >= 100) && (y2 >= 100)) {
    if (x2 > y2) {
        console.log('Dfn got 1 score!');
    } else if (y2 > x2) {
        console.log('Kla got 1 score!');
    } else {
        console.log('Tie!');
    }
} else {
    console.log('some num is under min');
}
if ((x3 >= 100) && (y3 >= 100)) {
    if (x3 > y3) {
        console.log('Dfn got 1 score!');
    } else if (y3 > x3) {
        console.log('Kla got 1 score!');
    } else {
        console.log('Tie!');
    }
} else {
    console.log('some num is under min');
}
// winner should pass min number!!!!!
// lets try again






const day = 'sunday';

switch (day) { // day ==='monday'
    case 'monday':
        console.log('plan monday');
        break;
    case 'tuesday':
        console.log('plan tuesday');
        break;
    case 'wednesday':
        console.log('plan wednesday');
        break;
    case 'thursday':
        console.log('plan thursday');
        break;
    case 'friday':
        console.log('plan friday');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy saturday, sunday');
        break;
    default:
        console.log('unvalid');
}

if (day === 'monday') {
    console.log('plan monday');
} else if (day === 'tuesday') {
    console.log('plan tuesday');
} else if (day === 'wednesday') {
    console.log('plan wednesday');
} else if (day === 'thursday') {
    console.log('plan thursday');
} else if (day === 'friday') {
    console.log('plan friday');
} else if (day === ('tuesday') || ('sunday')) {
    console.log('enjoy saturday, sunday');
}


// expression
2 + 4
1991
true && false && !false
const me = 'hj';
console.log(`I'm ${2037 - 1991} years old. ${me} `); // just insert expression


// decleration, statement
if (23 > 10) {
    const str = '23 is bigger';
}


// the conditional, ternary operator
// condition ? if : else

// expression
const age = 14;
age >= 18 ? console.log('i like to drink wine') : console.log('i like to drink water');

const drink = age >= 18 ? 'wine🍷' : 'milk🥛';
console.log(drink);

// declaration
let drink2; //!!! declare outside
if (age >= 18) {
    drink2 = 'wine🍷'; // reassign
} else {
    drink2 = 'milk🥛';
}
console.log(drink2);

console.log(`i like to drink ${age >= 18 ? 'wine🍷' : 'milk🥛'}`);