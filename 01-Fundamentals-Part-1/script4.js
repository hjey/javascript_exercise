// test 4

const bill1 = 275;
let tip1;
if ((bill1 <= 300) && (bill1 >= 50)) {
    bill1 * 0.15;
} else {
    bill1 * 0.2;
}
console.log('The bill was ' + bill1 + ', and the tip was ' + tip1 + ', and the total value is ' + (tip1 + bill1));

const bill2 = 40;
const tip2 = (bill2 <= 300) && (bill2 >= 50) ? bill2 * 0.15 : bill2 * 0.2;
console.log('The bill was ' + bill2 + ', and the tip was ' + tip2 + ', and the total value is ' + (tip2 + bill2));

const bill3 = 430;
const tip3 = (bill3 <= 300) && (bill3 >= 50) ? bill3 * 0.15 : bill3 * 0.2;
console.log('The bill was ' + bill3 + ', and the tip was ' + tip3 + ', and the total value is ' + (tip3 + bill3));