// Function to sum two numbers:
function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(3, 5)); // Output: 8

// Function that returns a fixed number:
function getFixedNumber(): number {
    return 42; // Example fixed number
}

console.log(getFixedNumber()); // Output: 42

// Function that takes a string and an optional boolean parameter:
function formatString(text: string, toUpperCase?: boolean): string {
    if (toUpperCase) {
        return text.toUpperCase();
    } else {
        return text.toLowerCase();
    }
}

console.log(formatString("Hello World", true)); // Output: HELLO WORLD
console.log(formatString("Hello World")); // Output: hello world