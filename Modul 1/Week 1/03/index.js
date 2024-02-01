// display the multiplication table of a given integer
let number = 9;

for(let i = 1; i < number + 1; i++) {
  console.log(9 + " x " + i);
}

console.log("\n");

// check whether a string is a palindrome or not.
let text = "madam";

let splitText = text.split("");

let reserveArray = splitText.reverse();

let newText = reserveArray.join("");

if (text === newText) {
  console.log(text + " is palindrome")
} else {
  console.log(text + " is not palindrome")
}
console.log("\n");

// convert centimeter to kilometer.
let cm = 100000;

let km = cm / 100000;

console.log(km + " km");
console.log("\n");

// format number as currency (IDR)
number = 100000;

let numberString = number.toString(),
sisa 	= numberString.length % 3,
rupiah 	= numberString.substr(0, sisa),
ribuan 	= numberString.substr(sisa).match(/\d{3}/g),
idr,
separator;

if (ribuan) {
	separator = sisa ? "." : "";
	idr = "Rp. " + rupiah + separator + ribuan.join(".") + ",00";
}

console.log(idr);
console.log("\n");

// remove the first occurrence of a given “search string” from a string
text = "Hello world";

newText = text.replace("ell", "");

console.log(newText);
console.log("\n");

// reverse a string.
text = "hello";

splitText = text.split("");

reserveArray = splitText.reverse();

newText = reserveArray.join("");

console.log(newText);
console.log("\n");

// swap the case of each character from string
text = "The QuiCk BrOwN Fox";

splitText = text.split("");

newText = "";

for (let i = 0; i < splitText.length; i++) {
  if (splitText[i].search(/[A-Z]/) == 0) {
    newText += splitText[i].toLowerCase();
  } else {
    newText += splitText[i].toUpperCase();
  }
}

console.log(newText);
console.log("\n");

// find the largest of two given integers
let num1 = 42;
let num2 = 27;

function checkNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(checkNumber(num1, num2));
console.log("\n");

// a conditional statement to sort three numbers
num1 = 42;
num2 = 27;
let num3 = 18;

const numArr = [];
numArr.push(num1, num2, num3);

function sortNumber(num1, num2, num3) {
  const numArr = [];
  numArr.push(num1, num2, num3);

  for (let i = 0; i < numArr.length; i++) {
    for (let j = 0; j < numArr.length; j++) {
      if (numArr[i] < numArr[j]) {
        const temp = numArr[i];
        numArr[i] = numArr[j];
        numArr[j] = temp;
      }
    }
  }

  return numArr;
}

console.log(sortNumber(num1, num2, num3));
console.log("\n");

// shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
let data = "hello";

if (typeof data == "string") {
  console.log(1);
} else if (typeof data == "number") {
  console.log(2);
} else {
  console.log(3);
}
console.log("\n");

// change every letter a into * from a string of input
text = "An apple a day keeps the doctor away";

newText = text.replace(/a/gi, "*");

console.log(newText);