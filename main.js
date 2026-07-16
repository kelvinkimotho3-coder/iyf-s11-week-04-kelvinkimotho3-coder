// Variable declarations
let name = "Kelvin Kimotho";
let age = 25;
const birthYear = 1999;

console.log(typeof name);
console.log(typeof age);
console.log(typeof true);

let score = 100;
score = 150;

const PI = 3.14159;

// Exercise: Variable Practice
let myName = "Kelvin Kimotho";
let myAge = 22;
let isStudent = true;
let favoriteColors = ["blue", "green", "black"];
let today = new Date();

console.log("My name is:", myName);
console.log("My age is:", myAge);
console.log("Am I a student?", isStudent);
console.log("My favorite colors are:", favoriteColors);
console.log("Today's date is:", today);

// Exercise 1: Number Operations
let a = 10;
let b = 3;

console.log(a + b);   // Addition
console.log(a - b);   // Subtraction
console.log(a * b);   // Multiplication
console.log(a / b);   // Division
console.log(a % b);   // Modulus (remainder)
console.log(a ** b);  // Exponentiation

let count = 0;
count++;
count--;

// Exercise 2: String Operations
let firstName = "Kelvin";
let lastName = "Kimotho";

let fullName = firstName + " " + lastName;
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Kelvin"));

// Exercise 3: Comparison & Logical Operators
console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 !== 3);

console.log(true && true);
console.log(true || false);
console.log(!true);

// Challenge: Age calculations
const myAgeYears = 22;
const ageInDays = myAgeYears * 365;
const ageInHours = ageInDays * 24;
const currentYear = new Date().getFullYear();
const yearTurning100 = currentYear + (100 - myAgeYears);

console.log(`Age in days: ${ageInDays}`);
console.log(`Age in hours: ${ageInHours}`);
console.log(`Year I turn 100: ${yearTurning100}`);