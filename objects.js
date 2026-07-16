// Exercise 1: Object Basics
const person = {
    firstName: "Kelvin",
    lastName: "Kimotho",
    age: 22,
    isStudent: true,
    hobbies: ["reading", "coding", "traveling"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.city);

person.age = 23;
person.email = "kelvinkimotho3@gmail.com";
delete person.isStudent;
console.log(person);

// Exercise 2: Object Methods
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply: (a, b) => a * b
};
console.log(calculator.add(5, 3));

// Exercise 3: Object Iteration
const scores = {
    math: 95,
    english: 88,
    science: 92
};

console.log(Object.keys(scores));
console.log(Object.values(scores));
console.log(Object.entries(scores));

for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}