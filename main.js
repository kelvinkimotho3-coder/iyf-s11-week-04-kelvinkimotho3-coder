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

// Exercise 1: Function Declarations
function greet(name) {
    return `Hello, ${name}!`;
}

const add = function(a, b) {
    return a + b;
};

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

// Exercise 2: Build These Functions
function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    return fullName
        .split(" ")
        .map(word => word.charAt(0).toUpperCase())
        .join("");
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(calculateArea(5, 10));          // 50
console.log(celsiusToFahrenheit(0));        // 32
console.log(isEven(7));                     // false
console.log(getInitials("John Doe"));       // JD
console.log(reverseString("hello"));        // olleh

// Exercise 3: Default Parameters
function greetDefault(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log(greetDefault());
console.log(greetDefault("Alice"));
console.log(greetDefault("Bob", "Hi"));

// Build: calculateTip
function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}
console.log(calculateTip(100));       // 15
console.log(calculateTip(100, 20));   // 20

// Exercise 1: If/Else
function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}
console.log(getGrade(85)); // B

// Exercise 2: Switch
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day";
    }
}
console.log(getDayName(3)); // Wednesday

// Exercise 3: Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let loopCount = 0;
while (loopCount < 5) {
    console.log(loopCount);
    loopCount++;
}

const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}

// Build 1: Print numbers 1-100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Build 2: Print only even numbers 1-50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) console.log(i);
}

// Build 3: FizzBuzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

// Build 4: Triangle of stars
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            return num1 % num2;
        case "**":
            return num1 ** num2;
        default:
            return "Invalid operator";
    }
}

// Test
console.log(calculate(10, "+", 5));   // 15
console.log(calculate(10, "-", 5));   // 5
console.log(calculate(10, "*", 5));   // 50
console.log(calculate(10, "/", 5));   // 2
console.log(calculate(10, "/", 0));   // Error message
console.log(calculate(10, "%", 3));   // 1
console.log(calculate(2, "**", 5));   // 32