// Day 1: FizzBuzz
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

// Day 2: Reverse a String
function reverseLoop(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
function reverseBuiltIn(str) {
    return str.split("").reverse().join("");
}
console.log(reverseLoop("hello"));
console.log(reverseBuiltIn("hello"));

// Day 3: Find Largest Number
function findLargestLoop(arr) {
    let largest = arr[0];
    for (const num of arr) {
        if (num > largest) largest = num;
    }
    return largest;
}
function findLargestReduce(arr) {
    return arr.reduce((max, num) => num > max ? num : max, arr[0]);
}
console.log(findLargestLoop([3, 7, 2, 9, 4]));
console.log(findLargestReduce([3, 7, 2, 9, 4]));

// Day 4: Remove Duplicates
function removeDuplicatesSet(arr) {
    return [...new Set(arr)];
}
function removeDuplicatesFilter(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicatesSet([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicatesFilter([1, 2, 2, 3, 4, 4, 5]));

// Day 5: Palindrome Checker
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}
console.log(isPalindrome("racecar"));                        // true
console.log(isPalindrome("hello"));                           // false
console.log(isPalindrome("A man a plan a canal Panama"));     // true