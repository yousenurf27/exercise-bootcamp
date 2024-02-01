// convert celsius to fahrenheit
const celcius = 60;

const fahrenheit = (celcius * 9/5) + 32;

console.log(fahrenheit + " Fahrenheit\n");

// check whether the number is odd or even
let number = 20;

if (number % 2 === 0) {
  console.log(number + " -> even number\n")
} else {
  console.log(number + "-> odd number\n")
}

// to check whether the number is prime number or not
number = 17;
let factors = 0;

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    factors++;
  }
}

if (factors > 2 || number === 1) {
  console.log(number + " is not a prime number\n")
} else {
  console.log(number + " is a prime number\n")
}

// to find the sum of the numbers 1 to N
number = 3;
let sumNumber = 0;
let string = "";

for (let i = 1; i <= number; i++) {
  sumNumber += i;

  if (i === number) {
    string += `${i} = ${sumNumber}`;
    break;
  }

  string += `${i} + `;
}

console.log(string + "\n");

// to find factorial of a number
number = 4;
sumNumber = 1;
string = "";

for (let i = number; i >= 1; i--) {
  sumNumber *= i;

  if (i === 1) {
    string += `${i} = ${sumNumber}`;
    break;
  }

  string += `${i} x `;
}

console.log(string + "\n")

// to print the first N fibonacci numbers
let n = 15;
let f1 = 0, f2 = 1, nextN;

for (let i = 1; i < n; i++) {
  nextN = f1 + f2;
  f1 = f2;
  f2 = nextN;
}

console.log(nextN);