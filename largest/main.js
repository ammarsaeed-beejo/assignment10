
let number = [5, 8, 6, 74, -6, 95, -59, 55, 77, -30, 0, 3, 6, 54, -3, 98, -69, 95, 606, -80];

let thelargest = 0;

for (let a = 0; a < number.length; a++) {

    if (thelargest < number[a]) {

        thelargest = number[a];
    }
}
alert("The largest number" + thelargest);