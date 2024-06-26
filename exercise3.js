// Function to sum two numbers:
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5)); // Output: 8
// Function that returns a fixed number:
function getFixedNumber() {
    return 42; // Example fixed number
}
console.log(getFixedNumber()); // Output: 42
// Function that takes a string and an optional boolean parameter:
function formatString(text, toUpperCase) {
    if (toUpperCase) {
        return text.toUpperCase();
    }
    else {
        return text.toLowerCase();
    }
}
console.log(formatString("My name is Portia Mashaba", true)); // Output: UpperCase
console.log(formatString("I am now learning TypeScript")); // Output: Lowercase
