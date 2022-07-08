'use strict';

// 1.
function calcTip(bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 :
        bill * 0.2;
}
console.log(calcTip(100));


// 2.
const bills = [125, 555, 44];
// 3.
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// 4.
const totPayment = (pym, tx) => pym + tx;
const total = [totPayment(bills[0], tips[0]), totPayment(bills[1], tips[1]), totPayment(bills[2], tips[2])];
console.log(bills + '  ' + tips + '  ' + total);


//---------------
// Object
const jonasArray = [
    'jonas',
    'schmedtmann',
    2037 - 1991,
    'teacher',
    ['michael', 'tom', 'steve']
];

const jonas = {
    firstName: 'jonas',
    lastName: 'schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['michael', 'tom', 'steve']
}
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// prompt === modal
/*
const interestIn = prompt('what do you want to know about Jonas? Choose between firstName, lastName, age, job, friends');
console.log(interestIn);
// dot notation didnt work at this time
// bracket notation works
console.log(jonas[interestIn]);


if (jonas[interestIn]) {
    console.log(jonas[interestIn]);
} else {
    console.log('wrong');
}
*/

jonas.location = 'portugal';
jonas['twitter'] = '@anything';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

//----------------

jonas.hasDriverLicense = true;
jonas.birthYear = 1991;
/*
jonas.calcAge = function (birthYear) { // function value
    return 2037 - birthYear; // function expression
};
*/

jonas.calcAge = function () {
    return 2037 - jonas.birthYear;
};

const bob = {
    birthYear: 1970,
    firstName: 'Bob',
    lastName: 'Sinclair',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['michael', 'tom', 'steve'],
    location: 'portugal',
    twitter: '@anything',
    hasDriverLicense: false,
    /*
        calcAge: function () {
            console.log(this);
            return 2037 - this.birthYear; // this를 쓰면 메서드명이 바뀌어도 영향이 없다.
        }
    */
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he ${this.hasDriverLicense ? 'has a' : 'does not have a'} driver license`
    },
    hasOrNotCard: function () {
        return this.hasDriverLicense ? 'a' : 'no';
    }
}

console.log(jonas.calcAge());
console.log(jonas['calcAge']());

console.log(bob.calcAge());
console.log(bob.age);

// mini test
console.log(bob);
console.log(bob.calcAge());
console.log(`${jonas.firstName} is a ${bob.age}-year old ${bob.job}, and he has ${bob.hasOrNotCard()} driver's license`);

console.log(bob.getSummary());

