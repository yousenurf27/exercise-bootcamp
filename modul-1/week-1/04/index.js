
// Create a function that can create a triangle pattern according to the height

let height = 4;
const trianglePatter = (height) => {
  let count = 0;
  let row = "";
  for (let i = 1; i <= 4; i++) {
    for (let j = 0; j < i; j++ ) {
      count += 1;
      row += count < 10 ? "0" + count + " " : "" + count + " ";
    }
    row += "\n";
  }
  return row;
}

console.log(trianglePatter(height));

/* Create a function that can loop the number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz". */
let n = 15;
const result = [];

const fizzBuzz = (n, result) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      result.push("FizzBuzz");
    } else if (i % 3 == 0) {
      result.push("Fizz");
    } else if (i % 5 == 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result.toString();
}

console.log(fizzBuzz(n, result));
console.log("\n");

// Create a function to calculate Body Mass Index (BMI)
let weight = 53;
height = 1.63;

const calculateBMI = (weight, height) => {
  const bmi = weight / (height ** 2);

  if (bmi <= 18.5) {
    return "less weight";
  } else if (bmi > 18.5 && bmi <= 24.9 ) {
    return "ideal";
  } else if (bmi >= 25.0 && bmi <= 29.9 ) {
    return "overweight";
  } else if (bmi >= 30.0 && bmi <= 39.9 ) {
    return "very overweight";
  } else {
    return "obesity";
  }
}

console.log(calculateBMI(weight, height));
console.log("\n");

/* Write a function to remove all odd numbers in an array and return a new array that contains even
numbers only */
const array = [1,2,3,4,5,6,7,8,9,10];

const removeOddNumbers = (array) => {
  const newArray = [];
  for (const arr of array) {
    if (arr % 2 == 0) {
      newArray.push(arr)
    }
  }

  return newArray;
}

console.log(removeOddNumbers(array));
console.log("\n");

// Write a function to split a string and convert it into an array of words
let text = "Hello World";

const splitText = (text) => {
  return text.split(" ");
}

console.log(splitText(text));