// Write a function to get the lowest, highest and average value in the array (with and without sort function).
let array = [12, 5, 23, 18, 4, 45, 32]

const lowHighAvg = (array) => {
  let lowest = array[0];
  let highest = array[0];
  let avg = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < lowest) {
      lowest = array[i];
    }

    if (array[i] > highest) {
      highest = array[i]
    }

    avg += array[i];
  }

  return {
    lowest,
    highest,
    average: avg / array.length
  }
}

console.log(lowHighAvg(array));
console.log("\n");

/* Write a function that takes an array of words and returns a string by concatenating the words in the array,
separated by commas and - the last word - by an 'and'. */
const fruits = ["apple", "banana", "cherry", "date"];

const stringFruits = (fruits) => {
  let string = "";
  for (let i = 0; i < fruits.length; i++) {
    if (i + 1 !== fruits.length) {
      string += `${fruits[i]},`
    } else {
      string += ` and ${fruits[i]}`
    }
  }

  return `"${string}"`;
}

console.log(stringFruits(fruits));
console.log("\n");

// Write a function to split a string and convert it into an array of words
let text = "Hello World";

const splitText = (text) => {
  return text.split(" ");
}

console.log(splitText(text));
console.log("\n");

// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
let arr1 = [1,2,3];
let arr2 = [3,2,1];

const calculateArrByIndex = (arr1, arr2) => {
  const calArr = [];
  for (let i = 0; i < arr1.length; i++) {
    calArr.push(arr1[i] + arr2[i]);
  }

  return calArr;
}

console.log(calculateArrByIndex(arr1, arr2));
console.log("\n");

/* Write a function that adds an element to the end of an array. However, the element should only be added if it is
not already in the array. */
array = [1, 2, 3, 4];
const addNewNumber = (num, array) => {
  let isNotAlready = false;
  for (let arr of array) {
    if (num == arr) {
      isNotAlready = false;
    } else {
      isNotAlready = true;
    }
  }

  if (isNotAlready) {
    array.push(num);
  }

  return array;
}

console.log(addNewNumber(5, array));
console.log("\n");

// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
array = [1,2,3,4,5,6];

const removeOddNumbers = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(removeOddNumbers(array));
console.log("\n");

/* Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
array can only contain 5 elements). */
let maxSize = 5;

const limitArray = (maxSize, ...numbers) => {
  const newArray = [];
  for (let i = 0; i < maxSize; i++) {
    newArray.push(numbers[i]);
  }

  return newArray;
}

console.log(limitArray(maxSize, 5, 10, 24, 3, 6, 7, 8));
console.log("\n");

// Write a function that will combine 2 given array into one array
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];

const combineArray = (arr1, arr2) => {
  const newArr = [];

  for (let arr of arr1) {
    newArr.push(arr);
  }

  for (let arr of arr2) {
    newArr.push(arr);
  }

  return newArr;
}

console.log(combineArray(arr1, arr2));
console.log("\n");

// Write a function to find duplicate values in an array
array = [1, 2, 2, 2, 3, 3, 4, 5, 5];

const addDuplicateNumber = (array) => {
  const newArray = [];
  let lastNumberChecked = 0;

  for (let i = 0; i < array.length; i++) {
    let countDuplicate = 0;

    if (array[i] == lastNumberChecked) {
      lastNumberChecked = array[i];
      continue;
    }

    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        countDuplicate++;
      }
    }

    if (countDuplicate > 1) {
      newArray.push(array[i]);
    }

    lastNumberChecked = array[i];
  }

  return newArray;
}

console.log(addDuplicateNumber(array));
console.log("\n");

// Write a function to find the difference in 2 given array
arr1 = [1, 2, 3, 4, 5];
arr2 = [3, 4, 5, 6, 7];

const findDiffNum = (arr1, arr2) => {
  const concatArr = arr1.concat(arr2);
  const newArray = [];
  let lastNumberChecked = 0;

  for (let i = 0; i < concatArr.length; i++) {
    let countDuplicate = 0;

    if (concatArr[i] == lastNumberChecked) {
      lastNumberChecked = concatArr[i];
      continue;
    }

    for (let j = 0; j < concatArr.length; j++) {
      if (concatArr[i] == concatArr[j]) {
        if (countDuplicate > 1) {
          break;
        }
        countDuplicate++;
      }
    }

    if (countDuplicate <= 1) {
      newArray.push(concatArr[i]);
    }

    lastNumberChecked = concatArr[i];
  }

  return newArray;
}

console.log(findDiffNum(arr1, arr2));
console.log("\n");

// write a function that will return primitive data types only.
array = [1, [], undefined, {}, "string", {}, []];

const primitiveData = (array) => {
  const newArray = [];
  for (let arr of array) {
    if (typeof arr != "object") {
      newArray.push(arr);
    }
  }

  return newArray;
}

console.log(primitiveData(array));
console.log("\n");

// Write a function from a given array of numbers and return the second smallest number
array = [5, 3, 1, 7, 2, 6];

const findSecondSmallNum = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  return array[1];
}

console.log(findSecondSmallNum(array));
console.log("\n");

// Write a function from a given array of mixed data types and return the sum of all the number
array = ["3", 1, "string", null, false, undefined, 2];

const sumTypeNumb = (array) => {
  let total = 0;

  for (let arr of array) {
    if (typeof arr == "number") {
      total += arr;
    }
  }

  return total;
}

console.log(sumTypeNumb(array));
console.log("\n");

// Write a function from the below array of number that will return sum of duplicate values.
array = [10, 20, 40, 10, 50, 30, 10, 60, 10];

const sumDuplicateNumb = (array) => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; i++) {
      if (array[i] == array[j]) {
        total += array[i];
        break;
      }
    }
  }

  return total;
}

console.log(sumDuplicateNumb(array));
console.log("\n");

/* Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
between rock, paper, or scissor. */
const rockPaperScissor = (player) => {
  player = player.toLowerCase();
  const options = ['rock', 'paper', 'scissor']
  const randomNum = Math.floor(Math.random() * 3);
  const computer = options[randomNum];
  let result = "";

  const isExist = options.filter(option => option == player).length;

  if (!isExist) {
    return "Options is not exist!";
  }

  if (player === computer) {
    result += "Tie";
  }else if (player == 'rock') {
    if (computer == 'paper') {
      result += 'Computer Won';
    } else {
      result += 'Player Won';
    }
  } else if (player == 'scissor') {
    if (computer == 'rock') {
      result += 'Computer Won';
    } else {
      result += 'Player Won';
    }
  }
  else if (player == 'paper') {
    if (computer == 'scissor') {
      result += 'Computer Won';
    } else {
      result += 'Player Won';
    }
  }

  return {
    "Player Option": player,
    "Computer Option": computer,
    "Hasil Game": result,
  };
}

console.log(rockPaperScissor("paper"));
