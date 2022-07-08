'use strict';

// Code Exercise_2-3

const Mark = {
    fullName: 'Mark Miller',
    height: 1.69,
    mass: 78,
    bmiCalc: function () {
        const bmi = this.mass / (this.height * this.height)
        return bmi.toFixed(2)
    }
}

const John = {
    fullName: 'John Smith',
    height: 1.95,
    mass: 92,
    bmiCalc: function () {
        const bmi = this.mass / (this.height * this.height)
        return bmi.toFixed(2)
    }
}

if (John.bmiCalc() > Mark.bmiCalc()) {
    console.log(John.fullName + `'s BMI(` + John.bmiCalc() + ') is higher than ' + Mark.fullName + `'s (` + Mark.bmiCalc() + ')');
} else if (Mark.bmiCalc() > John.bmiCalc()) {
    console.log(John.fullName + `'s BMI(` + John.bmiCalc() + ') is lower than ' + Mark.fullName + `'s (` + Mark.bmiCalc() + ')');
} else {
    console.log(John.fullName + `'s BMI(` + John.bmiCalc() + ') is same with ' + Mark.fullName + `'s (` + Mark.bmiCalc() + ')');
}
