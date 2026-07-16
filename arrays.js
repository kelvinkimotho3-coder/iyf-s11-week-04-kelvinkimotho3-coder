// Exercise 1: Array Basics
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

console.log(fruits[0]);
console.log(fruits.length);

fruits.push("grape");
fruits.unshift("mango");
fruits.pop();
fruits.shift();
console.log(fruits);

// Exercise 2: Array Methods
numbers.forEach(num => console.log(num * 2));

const doubled = numbers.map(num => num * 2);
const evenNumbers = numbers.filter(num => num % 2 === 0);
const firstEven = numbers.find(num => num % 2 === 0);
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(numbers.includes(3));

console.log(doubled);
console.log(evenNumbers);
console.log(firstEven);
console.log(sum);

// Build tasks
const testNumbers = [5, -3, 8, -1, 12, 20];

const allDoubled = testNumbers.map(n => n * 2);
const noNegatives = testNumbers.filter(n => n >= 0);
const firstOverTen = testNumbers.find(n => n > 10);
const product = testNumbers.reduce((total, n) => total * n, 1);

console.log("Doubled:", allDoubled);
console.log("No negatives:", noNegatives);
console.log("First over 10:", firstOverTen);
console.log("Product:", product);

