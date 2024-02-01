console.log("\n\n=== Find area and perimeter of rectangle ===\n");

const length = 5;
const width = 3;

const areaOfRectangle = length * width;
const perimeterOfRectangler = 2*(length+width);

console.log("Area of rectangle = " + areaOfRectangle);
console.log("Perimeter of rectangle = " + perimeterOfRectangler);


console.log("\n\n=== Find diameter, circumference and area of a circle ===\n");

const radius = 5;
const pi = 3.14159265;

const diameter = 2 * radius;
const circumference = 2 * pi * radius;
const areaOfCircle = pi * (radius ** 2);

console.log("Diameter = " + diameter);
console.log("Circumference = " + circumference.toFixed(4));
console.log("Circumference = " + areaOfCircle.toPrecision(5));

console.log("\n\n=== Find angles of triangle if two angles are given ===\n");

const a = 80;
const b = 65;

const c = 180 - (a + b);

console.log("Angles of triangle = " + c);

console.log("\n\n=== Get difference between dates in days ===\n");

const date1 = "2022-01-20";
const date2 = "2022-01-24";

const ms = Date.parse(date2) - Date.parse(date1);
const day = Math.abs(ms / (1000 * 60 * 60 * 24));

console.log("Difference between dates = " + day + " day");

console.log("\n\n=== Convert days to years, months and days ===\n");

const days = 400;

const toYear = parseInt(days / 365);
const toMonth = parseInt(days % 365 / 30);
const toDays = days % 365 % 30;
const dayOrDays = toDays <= 1 ? "day" : "days";

console.log(toYear + " year, " + toMonth + " month, " + toDays + " " + dayOrDays);