
let numbers = [5, 8, 6, 74, -6, 95, -59, 55, 77, -30, 0, 3, 6, 54, -3, 98, -69, 95, 66, -80,];
let total = 0;
for (let a = 0; a < numbers.length; a++) {
    total += numbers[a];
}
const result = total / (numbers.length);

alert(" the result is" + result);